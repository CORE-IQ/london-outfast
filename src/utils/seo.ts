import { supabase } from "@/integrations/supabase/client";

export const generateSitemapUrls = async () => {
  const baseUrl = "https://mediabuyinglondon.co.uk";
  
  // Fetch media formats from database
  const { data: mediaFormats } = await supabase
    .from('media_formats')
    .select('format_slug')
    .eq('is_active', true);

  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/quote`,
    `${baseUrl}/outdoor-media`,
    `${baseUrl}/ooh-advertising-london`,
    ...(mediaFormats || []).map(format => `${baseUrl}/outdoor-media/${format.format_slug}`)
  ];
  return urls;
};

export const getSEODataForPage = async (pageSlug: string) => {
  try {
    const { data, error } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('page_slug', pageSlug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching SEO data:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
};

export const generateStructuredData = (format?: any, seoData?: any) => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Media Buying London",
    "alternateName": "MBL",
    "url": "https://mediabuyinglondon.co.uk"
  };

  // Core business entities: Organization + LocalBusiness represented as AdvertisingAgency
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "AdvertisingAgency"],
    "name": "Media Buying London",
    "url": "https://mediabuyinglondon.co.uk",
    "areaServed": "London, UK",
    "description": "Media Buying London is a specialist OOH media buying agency offering same-day quotes and unbeatable rates across Tube, roadside, bus, and borough-targeted advertising.",
    "knowsAbout": [
      "Out-of-home advertising London",
      "Media planning services",
      "Tube advertising London",
      "Digital OOH"
    ]
  } as const;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AdvertisingAgency"],
    "name": "Media Buying London",
    "url": "https://mediabuyinglondon.co.uk",
    "areaServed": "London, UK",
    "description": "Media Buying London is a specialist OOH media buying agency offering same-day quotes and unbeatable rates across Tube, roadside, bus, and borough-targeted advertising.",
    "knowsAbout": [
      "Out-of-home advertising London",
      "Media planning services",
      "Tube advertising London",
      "Digital OOH"
    ]
  } as const;

  const nodes: any[] = [websiteData, organizationData, localBusinessData];

  // If a specific format is present, include a Service node scoped to that format
  if (format) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${format.name} in London | Media Buying London`,
      "description": format.metaDescription || `${format.name} advertising in London`,
      "areaServed": "London, UK",
      "provider": {
        "@type": "AdvertisingAgency",
        "name": "Media Buying London",
        "url": "https://mediabuyinglondon.co.uk"
      }
    });
  }

  // If CMS provides additional schema, append it (do not replace base nodes)
  if (seoData?.schema_markup) {
    nodes.push(seoData.schema_markup);
  }

  return nodes;
};

export const updateMetaTags = (title: string, description: string, url?: string, seoData?: any) => {
  document.title = title;
  
  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Update meta keywords if available
  if (seoData?.keywords && seoData.keywords.length > 0) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords.join(', '));
  }

  // NOTE: Canonical URLs are managed exclusively by SchemaManager via react-helmet-async.
  // Do NOT manipulate <link rel="canonical"> here.

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]') || createMetaTag('property', 'og:title');
  ogTitle.setAttribute('content', seoData?.og_title || title);

  const ogDesc = document.querySelector('meta[property="og:description"]') || createMetaTag('property', 'og:description');
  ogDesc.setAttribute('content', seoData?.og_description || description);

  const ogUrl = document.querySelector('meta[property="og:url"]') || createMetaTag('property', 'og:url');
  ogUrl.setAttribute('content', url || window.location.href);

  if (seoData?.og_image) {
    const ogImage = document.querySelector('meta[property="og:image"]') || createMetaTag('property', 'og:image');
    ogImage.setAttribute('content', seoData.og_image);
  }

  // Update Twitter Card tags
  const twitterCard = document.querySelector('meta[name="twitter:card"]') || createMetaTag('name', 'twitter:card');
  twitterCard.setAttribute('content', 'summary_large_image');

  const twitterTitle = document.querySelector('meta[name="twitter:title"]') || createMetaTag('name', 'twitter:title');
  twitterTitle.setAttribute('content', seoData?.twitter_title || title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]') || createMetaTag('name', 'twitter:description');
  twitterDesc.setAttribute('content', seoData?.twitter_description || description);

  if (seoData?.twitter_image) {
    const twitterImage = document.querySelector('meta[name="twitter:image"]') || createMetaTag('name', 'twitter:image');
    twitterImage.setAttribute('content', seoData.twitter_image);
  }
};

const createMetaTag = (attrName: string, attrValue: string) => {
  const meta = document.createElement('meta');
  meta.setAttribute(attrName, attrValue);
  document.head.appendChild(meta);
  return meta;
};
