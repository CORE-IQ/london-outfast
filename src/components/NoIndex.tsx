import { Helmet } from "react-helmet-async";

/**
 * Drop into any route component to tell search engines not to index it.
 * Used on admin, auth, and transactional pages that should never appear in SERPs.
 */
export const NoIndex = () => (
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
  </Helmet>
);

export default NoIndex;
