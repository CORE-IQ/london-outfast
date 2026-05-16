## What the data confirms

You answered: **hosted via 123-reg (registrar) → Lovable (Cloudflare) hosting**. I just tested live and:

- `www.mediabuyinglondon.co.uk/how-we-work` → **HTTP 200** (should be 301 to non-www). The `.htaccess` rules in `public/.htaccess` and `public/ooh/.htaccess` are dead code — Lovable's Cloudflare-fronted hosting does not run Apache.
- `mediabuyinglondon.co.uk/cms` → **HTTP 200**, fully indexable.

Cross-referencing the 85-URL GSC list you pasted:

| Problem | Count | Examples |
|---|---|---|
| **`www.` variant being crawled & indexed** | ~25 | `www.mediabuyinglondon.co.uk/outdoor-media/shopping-centre-advertising`, `/ooh/stadium-advertising-london`, `/what-is-media-buying`, etc. |
| **Admin / internal pages indexable** | 3 | `/cms`, `/configurator`, `/brief-plan` |
| **Sitemaps treated as HTML pages** | 2 | `/sitemap`, `/sitemap-blog.xml` |
| **Legacy URL `/what-is-media-buying`** | 2 | Already supposed to redirect to `/what-is-media-buying-in-london` but redirect is JS-only |
| **Nested ghost URL `/outdoor-media/industries/*`** | 2 | `/outdoor-media/industries/retail`, `/outdoor-media/industries/technology` — likely no real route |
| **Genuine thin SPA pages** | ~50 | The rest |

So the real root causes, in order of impact:

1. **No server-level www→non-www redirect** (Cloudflare needs a Page Rule / Redirect Rule). This alone accounts for ~25 of the 85.
2. **Admin/internal pages have no `noindex`** and aren't blocked in robots.txt.
3. **Pages are JS-shell HTML** to Googlebot → "Crawled, currently not indexed" for the rest.

## Plan

### Step 1 — Block admin/internal pages from indexing (5 min, ship immediately)

In code (I can do this now):
- Add `<meta name="robots" content="noindex, nofollow" />` via Helmet on `/cms`, `/configurator`, `/brief-plan`, `/brief-submitted`, `/account-created`, `/email-test`, `/thank-you`, `/auth`, `/create-account`, `/client-portal`.
- Update `public/robots.txt` to add:
  ```
  Disallow: /cms
  Disallow: /configurator
  Disallow: /auth
  Disallow: /client-portal
  Disallow: /thank-you
  Disallow: /email-test
  ```

### Step 2 — Add server-level redirects in Cloudflare (you do this, 5 min)

This is the single biggest fix. The `.htaccess` files do nothing. You need to set this up once in the Cloudflare dashboard that Lovable provisions for your domain:

**Option A (preferred) — Cloudflare Redirect Rule:**
- Cloudflare dashboard → your domain → Rules → Redirect Rules → Create
- Rule 1: If `hostname equals www.mediabuyinglondon.co.uk` → 301 to `https://mediabuyinglondon.co.uk/$1` preserving path
- Rule 2: If `hostname equals ooh.mediabuyinglondon.co.uk` → 301 to `https://mediabuyinglondon.co.uk/$1`

If you don't have access to that Cloudflare dashboard (Lovable manages it), the fastest fallback is to **remove the `www` and `ooh` subdomains from DNS at 123-reg** so they stop resolving at all. Google will eventually drop those URLs.

I'll also delete the misleading `.htaccess` files and add an in-app guard: a top-level `<meta http-equiv="refresh">` injected when hostname is `www.` or `ooh.` (better than nothing, but server redirects above are the real fix).

### Step 3 — Add build-time prerendering (you approved)

Install `react-snap` as a postbuild step (more reliable than `vite-plugin-prerender-spa` for this stack — it uses headless Chrome to render every route and write static HTML).

- `bun add -D react-snap`
- Add `"postbuild": "react-snap"` to package.json
- Configure `reactSnap.include` with the route list (static + dynamic slugs fetched at build time from Supabase: media_formats, industries, blog posts, OOH formats).
- Switch `createRoot` → `hydrateRoot` when prerendered HTML is detected (react-snap's standard requirement).
- Verify `dist/outdoor-media/48-sheet-billboard/index.html` contains a real `<h1>` and paragraphs after build.

After this ships, every URL Googlebot fetches will have full HTML, killing the "Crawled – currently not indexed" wave at scale.

### Step 4 — Fix the orphan/ghost URLs

- `/outdoor-media/industries/retail` and `/outdoor-media/industries/technology` — find and either route them properly or return a 404 / `noindex`.
- Remove `/sitemap` (no extension) from being routable as a page — the sitemap is `/sitemap.xml`.
- Confirm `/configurator` and legacy `/what-is-media-buying` are removed from all sitemaps.

### Step 5 — Resubmit & monitor (you, in GSC)

- Validate fix on all rows in your screenshot.
- Resubmit `sitemap.xml`.
- Recovery: 2–6 weeks for crawled-not-indexed once Steps 1–3 ship.

## What I'll build right now in this turn

If you flip me to build mode:
1. Step 1 in full (noindex meta + robots.txt updates).
2. Step 3 in full (react-snap setup + hydrateRoot switch + build-time slug fetcher).
3. Step 4 (404/noindex the ghost URLs, remove `/sitemap` route if it exists).
4. Delete the dead `.htaccess` files so we don't keep maintaining them.
5. Add a JS hostname guard as a stopgap until you do Step 2 in Cloudflare.

Step 2 you have to do yourself in the Cloudflare dashboard — I cannot reach it from here. Once you've done it, I'll re-test the headers and confirm 301s are firing.
