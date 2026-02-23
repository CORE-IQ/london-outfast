import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { updateMetaTags } from '@/utils/seo';

const PAGE_TITLE = 'OOH Advertising London | Targeted Outdoor & Digital Campaigns';
const META_DESCRIPTION = 'Reach millions with high-impact OOH Ads in London. Do it fast, data-led, and wherever your audience gathers. Same-day quotes and unbeatable rates.';

const OOHAdvertisingLondon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const origin = window.location.origin;
    const url = `${origin}/ooh-advertising-london`;
    const seoData = {
      og_title: PAGE_TITLE,
      og_description: META_DESCRIPTION,
      twitter_title: PAGE_TITLE,
      twitter_description: META_DESCRIPTION,
      keywords: [
        'ooh advertising london',
        'outdoor advertising london',
        'digital ooh london',
        'tube advertising',
        'billboard advertising london',
        'bus advertising london',
        'taxi advertising london'
      ],
      canonical_url: '/ooh-advertising-london',
    } as const;

    updateMetaTags(PAGE_TITLE, META_DESCRIPTION, url, seoData);

    const faqItems = [
      {
        question: "What formats does OOH advertising in London include?",
        answer: "Posters, digital screens, Tube advertising, bus sides, taxi liveries, landmark screens."
      },
      {
        question: "How much does OOH advertising cost?",
        answer: "From £18 for a small Tube panel to several thousand pounds for buses or digital billboards."
      },
      {
        question: "Can I target specific areas of London?",
        answer: "Yes. We offer borough-level targeting and zone-specific planning."
      },
      {
        question: "How long do campaigns typically last?",
        answer: "Two-week minimum campaigns are standard; brand awareness campaigns often run longer."
      },
      {
        question: "What's the benefit of digital (DOOH) vs static OOH?",
        answer: "DOOH offers creative flexibility, real-time updates, and dynamic targeting."
      }
    ];

    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    let faqScript = document.getElementById("ooh-faq-ld-json") as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = "ooh-faq-ld-json";
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(schemaMarkup);
  }, []);

  const formats = [
    {
      title: "Tube & Rail",
      description: "Corridor posters, car panels, station dominations with huge dwell time and captive commuter audiences."
    },
    {
      title: "Digital Street Furniture & Billboards",
      description: "High-impact digital displays on streets and kiosks with flexible creative rotation and real-time updates."
    },
    {
      title: "Taxi & Transit Advertising",
      description: "Mobile wraps that follow commuters across the city, delivering targeted exposure across multiple boroughs."
    },
    {
      title: "Iconic Landmark Sites",
      description: "Piccadilly Lights, flagship screens at major junctions for maximum brand visibility and prestige."
    }
  ];

  const pricingData = [
    { format: "Tube Car Panels (per panel)", price: "From £18" },
    { format: "Tube Posters", price: "From £750" },
    { format: "Bus Supersides (10 units)", price: "£4,000" },
    { format: "Taxi Wraps (5–10 cabs)", price: "From £3,000" },
    { format: "Traditional Billboards", price: "£250–£520 (6–48 sheets)" },
    { format: "Digital Billboards", price: "£1,000+ per week" }
  ];

  const benefits = [
    {
      title: "Local Expertise",
      description: "Direct access to London's best media channels with insider knowledge and established relationships."
    },
    {
      title: "Fast Turnarounds",
      description: "DOOH campaigns often live within 48–72 hours. No delays, no bureaucracy."
    },
    {
      title: "Data-Driven Planning",
      description: "Borough-level targeting (e.g., Hackney, Soho, Camden) with precision audience matching."
    },
    {
      title: "Creative Support",
      description: "Premium creative support optimised for each format to maximise memorability and impact."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <div className="min-h-screen">
        <header className="relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              OOH Advertising London — Real-World Reach with Real-World Impact
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              London is a media powerhouse—4 million daily Tube journeys, over 9 million residents, millions of tourists, and unmatched footfall 
              across key zones. OOH dominates as a high-visibility medium that can't be skipped, swiped, or ignored.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The UK OOH & DOOH sector hit a record £1.4 billion in revenue in 2024, with 66% from digital formats. 
              London accounts for 25% to 50% of UK OOH spend, making it the most powerful OOH market in the country.
            </p>
          </div>
        </header>

        <main>
          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Why OOH Works Section */}
          <section aria-labelledby="why-ooh-works" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 id="why-ooh-works" className="text-3xl md:text-4xl font-bold tracking-tight">
                Why OOH Advertising Works in London
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                London is one of the most visible advertising markets in the world. With dense footfall, high-income commuters, 
                and massive transit audience volumes, the impact of OOH is undeniable:
              </p>
              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                <ul className="grid gap-4 text-sm md:text-base">
                  <li className="leading-relaxed">
                    <span className="font-semibold">Record Revenue</span> — The UK's OOH revenue hit a record £1.4 billion in 2024, with 66% from DOOH (Digital OOH).
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Unmatched Reach</span> — A staggering 98% of the UK population sees OOH ads weekly—unmatched reach across all media.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">London Dominance</span> — London alone commands 25–50% of UK OOH spend, owning half of the nation's ad panels (~225,000).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Featured Formats */}
          <section aria-labelledby="featured-formats" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 id="featured-formats" className="text-3xl md:text-4xl font-bold tracking-tight">
                Top-Performing Formats for London Campaigns
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {formats.map((format, index) => (
                  <div key={index} className="rounded-xl border border-border bg-muted/30 p-6">
                    <h3 className="font-semibold text-lg mb-2">{format.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Pricing Guide */}
          <section aria-labelledby="pricing-guide" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 id="pricing-guide" className="text-3xl md:text-4xl font-bold tracking-tight">
                Quick Media Pricing Guide
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Approximate pricing for 2-week campaigns. All prices are estimates and vary by location, timing, and availability.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-3 font-semibold">Format</th>
                      <th className="text-left p-3 font-semibold">Price (Estimated)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="border-b border-border/30">
                        <td className="p-3">{item.format}</td>
                        <td className="p-3 font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Why Choose Us */}
          <section aria-labelledby="why-choose-us" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 id="why-choose-us" className="text-3xl md:text-4xl font-bold tracking-tight">
                Why Choose Us for London OOH
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="rounded-xl border border-border bg-muted/30 p-6">
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Programmatic Innovation */}
          <section aria-labelledby="innovation" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <h2 id="innovation" className="text-3xl md:text-4xl font-bold tracking-tight">
                Programmatic OOH + Innovation
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Digital OOH now represents more than 64% of UK OOH revenue—and programmatic buying is surging at a ~12% CAGR. 
                Mobile-enabled screens support dynamic creative tailored to time-of-day, weather, or local activity—perfect for eye-catching campaigns.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                <ul className="grid gap-4 md:grid-cols-3 text-sm md:text-base">
                  <li className="leading-relaxed">
                    <span className="font-semibold">Hyper-Targeted Coverage</span> — Target zones like Soho, Shoreditch, or Camden precisely with borough-level planning.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Creative Excellence</span> — Dynamic DOOH reacts to time of day, weather, or local events for maximum relevance.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Programmatic Scale</span> — Real-time trading optimises reach across digital screens in high-traffic areas.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="px-4"><div aria-hidden className="max-w-5xl mx-auto text-center text-2xl select-none">⸻</div></div>

          {/* Get Started */}
          <section aria-labelledby="get-started" className="px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <h2 id="get-started" className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Make a Statement Across London?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Need help crafting your campaign? We'll match your objectives with impactful OOH formats—Tube, taxis, digital panels—and 
                you'll get real-time insight and performance data. Ready to stand out across London's busiest corridors?
              </p>

              {/* CTA Cluster */}
              <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
                <Button
                  size="lg"
                  className="px-6"
                  onClick={() => navigate("/brief")}
                  aria-label="Get same-day quote for OOH advertising"
                >
                  Get Same-Day Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6"
                  onClick={() => navigate("/brief")}
                  aria-label="Configure your OOH campaign"
                >
                  Configure Campaign
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-6"
                  onClick={() => navigate("/outdoor-media")}
                  aria-label="Explore OOH formats"
                >
                  Explore Formats
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-6"
                  onClick={() => navigate("/brief")}
                  aria-label="Submit brief to OOH specialist"
                >
                  Submit Your Brief
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Same-day quotes. Borough-level targeting. London's best OOH rates.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default OOHAdvertisingLondon;