## What Google Search Console is actually telling us

From your screenshot:

| Reason | Pages | What it means |
|---|---|---|
| Crawled – currently not indexed | **85** | Google fetched the page, decided it wasn't worth indexing (almost always: thin content or duplicate to something already indexed) |
| Discovered – currently not indexed | **41** | Google knows the URL exists but hasn't even bothered fetching it (low quality signal for the whole site) |
| Duplicate without user-selected canonical | 15 | Multiple URLs serve the same content, no canonical resolves the tie |
| Alternative page with proper canonical tag | 14 | These pages exist but correctly point elsewhere — usually fine |
| Page with redirect | 6 | Fine |
| Duplicate, Google chose different canonical than user | 2 | Our declared canonical is being overruled |
| Soft 404 | 1 | Page returns 200 but looks empty |

**Diagnosis:** This is not "SEO fell off" — Google is actively *refusing* to index the site. The two root causes:

1. **The site is a client-rendered React SPA.** When Googlebot fetches any URL, it gets the same near-empty `index.html` shell. JS rendering happens later, sometimes never. Result: every URL looks like the same thin page → "Crawled, not indexed" en masse.
2. **Historical canonical/domain churn.** Until recently the codebase had hardcoded canonicals pointing at `reactivemedia.co.uk`, `www.mediabuyinglondon.com`, `www.mediabuyinglondon.co.uk` and `ooh.mediabuyinglondon.co.uk` mixed in across pages. We cleaned those up over the last few prompts, but Google still has the old signals cached.

You were "ranking #1 for everything" at launch because there was almost no competition for your brand name and Google was still discovering the site. Once it started crawling deeply, it found a wall of thin/duplicate pages and pulled back.

## Plan (in priority order)

### Step 1 — Make the HTML not be empty (highest impact)

Add build-time prerendering so every public route ships as fully-rendered HTML, not a JS shell. This is the single change that will fix "Crawled – currently not indexed" at scale.

- Install `vite-plugin-prerender-spa` (or `react-snap` as a postbuild step).
- Configure it with the list of indexable routes from `src/App.tsx` (home, `/outdoor-media`, `/outdoor-media/:slug`, `/industries/:slug`, `/ooh`, `/ooh/:slug`, `/london-ooh-specialists`, `/london-ooh-deals`, `/ooh-advertising-london`, `/media-buying-rates-london`, `/what-is-media-buying-in-london`, `/how-we-work`, `/about`, `/contact`, `/faqs`, `/blog`, `/blog/:slug`).
- For dynamic routes (`:slug`), pull the slug list from Supabase at build time the same way `scripts/generate-sitemap.ts` would.
- Verify the built `dist/` contains real `<h1>`, paragraphs, and meta tags per route.

This alone typically moves 50–80% of "Crawled, not indexed" pages back into the index within 2–4 weeks.

### Step 2 — Eliminate the duplicate-canonical signals

- Audit the 17 pages flagged as duplicate / alternative-canonical issues. Get the exact URL list from GSC → Pages → click each row → Export.
- For each, confirm `SchemaManager` emits exactly one `<link rel="canonical">` pointing at the `https://mediabuyinglondon.co.uk/...` version (View Source of the production page, not DevTools — DevTools shows post-JS state).
- Verify the `.htaccess` 301s in `public/.htaccess` and `public/ooh/.htaccess` are actually executing on the host. **Lovable hosting does not run Apache `.htaccess`** — if the site is published on Lovable, those rules do nothing and the JS `CanonicalRedirect.tsx` is the only thing redirecting `www` / `ooh` traffic. That's too late for Googlebot, which indexes the source URL before JS runs. We need either: (a) server-level redirects from whatever host the custom domain points at, or (b) keep all variants pointing at the canonical via DNS-level redirects.

### Step 3 — Kill the soft 404

One page returns 200 but looks empty to Google. Once we get the URL from GSC we'll either add real content or `noindex` it.

### Step 4 — Beef up the "Discovered – not indexed" 41

These 41 URLs Google won't even crawl because the site's overall quality signal is low. Step 1 (prerendering) is the main fix; supplement with:

- Internal links from the homepage to every hub page, and from each hub page to its children.
- Make sure each of these 41 pages has unique, substantive content (≥600 words of real info, not boilerplate).
- Request indexing for the top 10 via GSC URL Inspection after Step 1 ships.

### Step 5 — Resubmit and monitor

- Resubmit all 7 sitemaps in GSC.
- Use GSC's "Validate fix" button on each row in your screenshot once Steps 1–3 are deployed.
- Recovery: 2–6 weeks for crawled-not-indexed; 4–12 weeks for discovered-not-indexed.

## What I need from you to start

Three quick answers and I'll start on Step 1:

1. **Hosting:** Is the custom domain `mediabuyinglondon.co.uk` served by Lovable hosting, or have you pointed it at a different host (Cloudflare, Vercel, Apache server)? This determines whether the `.htaccess` files actually do anything.
2. **Prerender scope:** OK to prerender ~30 routes at build time? Adds 30–90s to publish time but is the single biggest SEO win available.
3. **Export the GSC URL lists** (the 85 + 41 + 15 lists). Paste them or attach the CSV exports — I need the exact URLs to fix the right pages instead of guessing.
