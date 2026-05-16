#!/usr/bin/env node
/**
 * Postbuild prerenderer.
 * Reads every sitemap-*.xml in public/, extracts canonical URLs,
 * then for each path writes dist/<path>/index.html with route-specific
 * <title>, <meta description>, <link rel=canonical>, og:* and a real <h1>.
 * React then hydrates over it normally.
 *
 * No headless browser. No SSR. Just static SEO HTML so Googlebot stops
 * filing pages under "Crawled - currently not indexed".
 *
 * Fail-soft: errors are logged but never crash the build.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const DIST = 'dist';
const PUBLIC = 'public';
const ORIGIN = 'https://mediabuyinglondon.co.uk';

function log(msg) { console.log(`[prerender] ${msg}`); }
function warn(msg) { console.warn(`[prerender] ${msg}`); }

try {
  if (!existsSync(DIST)) { warn('dist/ not found, skipping'); process.exit(0); }
  const tpl = readFileSync(join(DIST, 'index.html'), 'utf8');

  // Collect all URLs from sitemaps
  const sitemapFiles = readdirSync(PUBLIC).filter(f => /^sitemap-.*\.xml$/.test(f));
  const urls = new Set();
  for (const f of sitemapFiles) {
    const xml = readFileSync(join(PUBLIC, f), 'utf8');
    for (const m of xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) {
      try {
        const u = new URL(m[1]);
        if (u.hostname.replace(/^www\./, '') !== 'mediabuyinglondon.co.uk') continue;
        let path = u.pathname.replace(/\/+$/, '') || '/';
        urls.add(path);
      } catch {}
    }
  }
  log(`found ${urls.size} unique URL paths across ${sitemapFiles.length} sitemaps`);

  // Slug → human-readable title segment
  function titleize(slug) {
    return slug
      .split('-')
      .map(w => w.length <= 3 && w === w.toLowerCase() ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  // Map a route path to {h1, title, description}
  function metaFor(path) {
    if (path === '/') return null; // homepage uses index.html as-is
    const segs = path.replace(/^\//, '').split('/');
    const last = segs[segs.length - 1];
    const human = titleize(last);
    let h1, title, description;

    if (path === '/ooh') {
      h1 = 'Out-of-Home Advertising in London';
      title = 'Out-of-Home Advertising London | Media Buying London';
      description = 'Plan and buy every London OOH format — billboards, Tube, bus, taxi, digital screens. Same-day quotes, transparent rates.';
    } else if (path.startsWith('/ooh/')) {
      h1 = `${human} Advertising in London`;
      title = `${human} Advertising London | Media Buying London`;
      description = `${human} advertising in London — formats, locations, rates and same-day quotes from London's fastest OOH specialists.`;
    } else if (path.startsWith('/outdoor-media/')) {
      h1 = `${human} in London`;
      title = `${human} London | Out-of-Home Format Guide`;
      description = `${human} in London — specifications, locations, audience reach and rates. Get a same-day quote from Media Buying London.`;
    } else if (path === '/outdoor-media') {
      h1 = 'Outdoor Media Formats in London';
      title = 'Outdoor Media Formats London | Media Buying London';
      description = 'Browse every outdoor media format available in London — billboards, transit, digital, experiential and more.';
    } else if (path.startsWith('/industries/')) {
      h1 = `OOH Advertising for ${human}`;
      title = `${human} OOH Advertising London | Media Buying London`;
      description = `Out-of-home advertising for ${human} brands in London. Format recommendations, audience targeting and rates.`;
    } else if (path === '/industries') {
      h1 = 'OOH Advertising by Industry';
      title = 'OOH Advertising by Industry | Media Buying London';
      description = 'Out-of-home advertising recommendations tailored to your industry across London.';
    } else if (path.startsWith('/blog/')) {
      h1 = human;
      title = `${human} | Media Buying London Blog`;
      description = `${human} — insights and analysis from London's fastest OOH media buying specialists.`;
    } else if (path === '/blog') {
      h1 = 'Media Buying London Blog';
      title = 'OOH Advertising Insights | Media Buying London Blog';
      description = 'Insights, guides and analysis on out-of-home advertising in London.';
    } else {
      h1 = human;
      title = `${human} | Media Buying London`;
      description = `${human} — London's fastest out-of-home media buying specialists. Transparent rates, same-day quotes.`;
    }
    return { h1, title, description };
  }

  // Replace head tags + body H1
  function render(tpl, path, meta) {
    const canonical = `${ORIGIN}${path}`;
    let html = tpl;

    // Replace <title>
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    );

    // Replace og:title / og:description / twitter:title / twitter:description
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);

    // Inject canonical + og:url just before </head> (the static template intentionally omits canonical)
    const injectHead = `    <link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />\n  </head>`;
    html = html.replace('</head>', injectHead);

    // Replace the visible sr-only H1 with a route-specific H1 (still sr-only — visible H1 is rendered by React)
    html = html.replace(
      /<h1 id="seo-h1"[^>]*>[\s\S]*?<\/h1>/,
      `<h1 id="seo-h1" class="sr-only">${escapeHtml(meta.h1)}</h1>`
    );

    // Replace noscript content with route-specific copy
    html = html.replace(
      /<noscript>[\s\S]*?<\/noscript>/,
      `<noscript>\n      <section id="seo-noscript" style="padding:16px;max-width:900px;margin:0 auto;">\n        <h2>${escapeHtml(meta.h1)}</h2>\n        <p>${escapeHtml(meta.description)}</p>\n      </section>\n    </noscript>`
    );

    return html;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  let written = 0, skipped = 0;
  for (const path of urls) {
    const meta = metaFor(path);
    if (!meta) { skipped++; continue; }
    try {
      const out = join(DIST, path.replace(/^\//, ''), 'index.html');
      mkdirSync(dirname(out), { recursive: true });
      // Don't overwrite if a real file exists at this path (e.g. sitemap-*.xml)
      if (existsSync(out)) { skipped++; continue; }
      writeFileSync(out, render(tpl, path, meta));
      written++;
    } catch (e) {
      warn(`failed ${path}: ${e.message}`);
    }
  }
  log(`wrote ${written} prerendered pages, skipped ${skipped}`);
} catch (e) {
  warn(`fatal but not blocking build: ${e.message}`);
  process.exit(0);
}
