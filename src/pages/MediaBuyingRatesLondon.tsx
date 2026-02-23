import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MediaBuyingRatesLondon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Media Buying Rates London – What You Need to Know | Media Buying London</title>
        <meta name="description" content="A practical guide to media buying rates in London across OOH, digital and cinema; how agencies charge; and how Media Buying London's client-portal transparent invoicing proves real market value." />
        <meta name="keywords" content="media buying rates london, ooh advertising london, billboard rates london, digital advertising costs london, agency commission media buying" />
        {/* Canonical managed by SchemaManager */}
        
        {/* Open Graph */}
        <meta property="og:title" content="Media Buying Rates London – What You Need to Know" />
        <meta property="og:description" content="A practical guide to media buying rates in London across OOH, digital and cinema; how agencies charge; and how Media Buying London's client-portal transparent invoicing proves real market value." />
        <meta property="og:url" content="https://mediabuyinglondon.co.uk/media-buying-rates-london" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Media Buying Rates London – What You Need to Know" />
        <meta name="twitter:description" content="A practical guide to media buying rates in London across OOH, digital and cinema; how agencies charge; and how Media Buying London's client-portal transparent invoicing proves real market value." />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mediabuyinglondon.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://mediabuyinglondon.co.uk/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Media Buying Rates London",
                "item": "https://mediabuyinglondon.co.uk/media-buying-rates-london"
              }
            ]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are typical media buying rates in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rates vary by media type, placement and season. Indicative ranges include: roadside 48-sheet £350–£750 per 2 weeks, D48 £900–£2,500 per 2 weeks, bus superside £350–£700 per 2 weeks, London Underground 6-sheet £450–£850 per 2 weeks, pDOOH £6–£18 CPM, cinema £1,000–£2,500 per week. All rates are negotiable and subject to availability."
                }
              },
              {
                "@type": "Question",
                "name": "How do agencies in London charge for media buying?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most agencies charge a commission on media spend, typically 10–20%, or a flat/hourly fee. Media Buying London operates with transparent invoicing—clients see the true media owner cost plus our commission."
                }
              },
              {
                "@type": "Question",
                "name": "Can I negotiate media buying rates in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Negotiation is essential—volume, timing flexibility and multi-format packages can unlock better pricing. We negotiate directly with all major media owners across London."
                }
              },
              {
                "@type": "Question",
                "name": "What is transparent invoicing and how does the client portal work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For every booking we upload the original media owner invoice to your secure client portal. You see the exact net cost charged by the media owner, our commission side-by-side, and a clear reconciliation against your purchase order. No hidden markups—the rate you pay is the rate we pay."
                }
              },
              {
                "@type": "Question",
                "name": "Which data sources do you use to plan and price campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use Route audience data, Experian Mosaic segmentation and location analytics to match placements to your audience and reduce waste—improving effective CPM and outcome metrics."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can a London media campaign go live?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OOH campaigns can launch in as little as 7–14 days subject to availability; digital and pDOOH can go live faster. Peak seasons like Christmas require earlier booking to secure inventory and rates."
                }
              }
            ]
          })}
        </script>

        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Media Buying Rates London",
            "description": "A practical guide to media buying rates in London across OOH, digital and cinema; how agencies charge; and how Media Buying London's client-portal transparent invoicing proves real market value.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mediabuyinglondon.co.uk/media-buying-rates-london"
            },
            "url": "https://mediabuyinglondon.co.uk/media-buying-rates-london",
            "datePublished": "2025-08-15",
            "dateModified": "2025-08-15",
            "author": {
              "@type": "Organization",
              "name": "Media Buying London",
              "url": "https://mediabuyinglondon.co.uk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Media Buying London",
              "url": "https://mediabuyinglondon.co.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mediabuyinglondon.co.uk/favicon.png",
                "width": 256,
                "height": 256
              }
            },
            "keywords": ["media buying rates london", "ooh advertising london", "billboard rates london", "digital advertising costs london", "agency commission media buying"],
            "articleSection": ["Rates by Media Type", "How Agencies Charge", "Transparent Invoicing", "Negotiation & Seasonality", "Reduce CPM"],
            "isAccessibleForFree": "True"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border/5">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Media Buying Rates London</span>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Media Buying Rates London – What You Need to Know
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              When it comes to media buying rates in London, the reality is simple: the city is one of the most competitive advertising markets in the world, and rates are driven by media type, placement, demand, and your ability to negotiate.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-4">
              At Media Buying London, we've built our reputation on cutting through inflated rate cards to secure the most competitive prices available – backed by transparent invoicing and data-driven planning.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                How Media Buying Rates Are Calculated in London
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Media Type</strong> – Rates vary across Out-of-Home (OOH), broadcast, print, and digital.</li>
                <li><strong>Placement & Format</strong> – Prime roadside D48 billboards price differently to bus shelters or concourse screens.</li>
                <li><strong>Volume & Duration</strong> – Larger/longer bookings unlock stronger discounts.</li>
                <li><strong>Seasonality</strong> – Demand spikes (Christmas, summer, major events) increase rates.</li>
                <li><strong>Targeting & Data</strong> – Using Experian Mosaic, Route, and location analytics reduces waste and improves ROI.</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Example Media Buying Rates in London (Indicative)
              </h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Roadside 48 Sheet:</strong> £350–£750 per 2 weeks</li>
                    <li><strong>Digital 48 Sheet (D48):</strong> £900–£2,500 per 2 weeks</li>
                    <li><strong>Bus Superside:</strong> £350–£700 per 2 weeks</li>
                    <li><strong>London Underground 6 Sheet:</strong> £450–£850 per 2 weeks</li>
                    <li><strong>Programmatic DOOH (pDOOH):</strong> £6–£18 CPM</li>
                    <li><strong>Cinema:</strong> £1,000–£2,500 per week</li>
                    <li><strong>Retail / Mall Screens:</strong> £500–£1,200 per 2 weeks</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Rates are negotiable and subject to availability.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                How Agencies Charge for Media Buying in London
              </h2>
              <p className="text-muted-foreground mb-4">
                Most agencies operate on one of two models:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                <li>Commission on media spend (typically 10–20%).</li>
                <li>Flat/hourly fees (often £150–£199 per hour).</li>
              </ol>
              <p className="text-muted-foreground mb-4">
                At Media Buying London, we do things differently:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transparent invoicing – you see exactly what we pay media owners.</li>
                <li>• Rate matching & beating – if we can't beat a quote, we'll tell you.</li>
                <li>• No "special deals" bias – we're audience-first, not tied to any owner.</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Transparent Invoicing — The Media Buying London Difference
              </h2>
              <p className="text-muted-foreground mb-6">
                In the world of media buying rates London, very few agencies will show you what they pay media owners. We do.
              </p>
              <p className="text-muted-foreground mb-4">
                Every booking comes with full cost visibility:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Original media owner invoices are uploaded to your secure client portal the moment we receive them.</li>
                <li>• Side-by-side comparison shows the media owner's net cost and our commission in plain numbers.</li>
                <li>• Exact rate matching – if you've been quoted elsewhere, we'll match or beat it and prove it.</li>
                <li>• No hidden mark-ups – the rate you pay is the rate we pay.</li>
              </ul>
              
              <Card className="mb-6 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    <strong>Why it matters:</strong> London's competitive market can hide layers of middle-man margin. We cut through that with direct relationships across all major media owners while staying loyal to your outcome, not theirs. You see exactly where your money goes, so you know you're getting real market value, not padded numbers.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Net benefit to you:</strong>
                  </p>
                  <ul className="space-y-1 text-muted-foreground mt-2">
                    <li>• Confidence that you're paying the true market rate.</li>
                    <li>• Budget accountability with proof in hand.</li>
                    <li>• A partner focused on results, not excuses.</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Why We Consistently Beat Market Rates
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Direct relationships with every major London media owner.</li>
                <li>• Data-led planning powered by Route, Experian Mosaic and location analysis.</li>
                <li>• Speed – quotes and bookings in hours, not days.</li>
                <li>• White-label capability for agencies without margin stacking.</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Tips for Getting the Best Media Buying Rates in London
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Be flexible on dates and locations to unlock value inventory.</li>
                <li>• Bundle formats (roadside, transport, retail) for negotiated discounts.</li>
                <li>• Book early for peak periods.</li>
                <li>• Use audience tools to remove wastage and tighten targeting.</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Talk?
              </h2>
              <p className="text-muted-foreground mb-6">
                We can quote your London media plan today – from a single shelter to a city-wide OOH rollout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/brief">Send a brief</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ooh">Explore formats in the OOH Hub</Link>
                </Button>
              </div>
            </section>

            <Separator className="my-8 sm:my-12" />

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                FAQ – Media Buying Rates London
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    What is the average commission rate for media buying in London?
                  </h3>
                  <p className="text-muted-foreground">
                    Typically 10–20% of media spend; some agencies charge flat fees.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Can I negotiate media rates in London?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. Negotiation is essential – especially for bulk or multi-format campaigns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Which media type is cheapest in London?
                  </h3>
                  <p className="text-muted-foreground">
                    Street-level formats such as bus rears and local 6-sheets are often most cost-effective.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Do London media rates change seasonally?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes. Prices rise during peak retail and event periods.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default MediaBuyingRatesLondon;