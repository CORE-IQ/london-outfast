import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Client-side guard that redirects www.mediabuyinglondon.co.uk and
 * ooh.mediabuyinglondon.co.uk to the canonical apex domain.
 *
 * NOTE: This runs AFTER JS hydrates, so it does NOT help Googlebot —
 * Googlebot indexes the source URL before running JS. The real fix is
 * a server-level 301 in Cloudflare. This is only a fallback for human
 * visitors who land on the wrong variant.
 *
 * Important: only fires for the production www/ooh subdomains. Never
 * touches Lovable preview/staging URLs (id-preview--*.lovable.app,
 * *.lovable.app) or localhost.
 */
export const CanonicalRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const host = window.location.host.toLowerCase();
    const canonicalHost = 'mediabuyinglondon.co.uk';

    const isWrongVariant =
      host === `www.${canonicalHost}` || host === `ooh.${canonicalHost}`;

    if (!isWrongVariant) return;

    const canonicalUrl = `https://${canonicalHost}${location.pathname}${location.search}${location.hash}`;
    window.location.replace(canonicalUrl);
  }, [location]);

  return null;
};
