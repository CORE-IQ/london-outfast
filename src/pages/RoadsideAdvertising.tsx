import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, TrendingUp, Clock, CheckCircle } from "lucide-react";

const RoadsideAdvertising = () => {
  useEffect(() => {
    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What roadside formats are available in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 48 Sheet, 96 Sheet, Digital 48 Sheet (D48), Mega 6, and other premium roadside billboards. All are positioned for maximum visibility across major commuter routes and high-traffic locations."
          }
        },
        {
          "@type": "Question",
          "name": "How much does roadside billboard advertising cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs depend on format, location, and campaign length. We provide transparent rate checks showing the exact media owner cost plus our commission, so you can see exactly where your budget goes."
          }
        },
        {
          "@type": "Question",
          "name": "Can we target specific boroughs or roads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use Experian Mosaic, Route, and location analyst tools to pinpoint the highest-value locations based on your audience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle creative and installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide full artwork management, production, and installation according to media owner specifications."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Add Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AdvertisingService",
      "name": "Roadside Advertising London",
      "serviceType": "Billboard and Roadside Advertising",
      "category": "Out-of-Home Advertising",
      "provider": {
        "@type": "Organization",
        "name": "Media Buying London",
        "url": "https://mediabuyinglondon.co.uk",
        "logo": "https://mediabuyinglondon.co.uk/favicon.png"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater London"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Brands, agencies and in-house teams"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roadside Formats",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "48 Sheet Billboard" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "96 Sheet Billboard" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital 48 Sheet" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mega 6" } }
        ]
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(serviceScript);

    // Add Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mediabuyinglondon.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "OOH", "item": "https://mediabuyinglondon.co.uk/ooh" },
        { "@type": "ListItem", "position": 3, "name": "Roadside Advertising", "item": "https://mediabuyinglondon.co.uk/ooh/roadside-billboards" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Clean up scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('roadside') || script.textContent?.includes('Roadside')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Roadside Advertising London & UK | 48/96-Sheet, D48 & Street Furniture</title>
        <meta name="description" content="Plan and buy roadside advertising across London & the UK. 48/96-sheet, D48, lamp post banners, phone boxes, street-level ambient. Transparent rates, fast delivery." />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent leading-tight px-2">
              Roadside Advertising in London & Across the UK
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              Roadside advertising is the backbone of OOH: 24/7 visibility along high-traffic routes, commuter corridors and local high streets. We plan and buy roadside at scale—combining Experian Mosaic, Route and location analytics with rate-driven negotiations—so you get the right sites, the right audience, and transparent pricing (the rate you pay = the rate we pay).
            </p>
          </div>

          {/* Roadside Formats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Roadside Formats</h2>
            
            {/* Large-format billboards */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Large-format billboards
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">48-Sheet Billboard Advertising</h4>
                    <p className="text-sm text-muted-foreground">6m x 3m; the UK's classic roadside workhorse.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">96-Sheet Billboard Advertising</h4>
                    <p className="text-sm text-muted-foreground">12m x 3m; maximum dominance on major routes.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Digital 48-Sheet (D48) Advertising</h4>
                    <p className="text-sm text-muted-foreground">Dynamic, dayparted, fast to deploy.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Mega 6 Roadside Advertising</h4>
                    <p className="text-sm text-muted-foreground">Premium, high-impact digital roadside.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Street furniture & local impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Street furniture & local impact
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Lamp Post Banner Advertising</h4>
                    <p className="text-sm text-muted-foreground">Repeat-frequency along high streets and event routes.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Phone Box Panels (incl. Digital)</h4>
                    <p className="text-sm text-muted-foreground">Pinpoint local coverage at pavement level.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/full-bus-stop-takeover" className="text-primary hover:underline">
                        Full Bus Stop Takeover
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Large-format shelter dominations for unmissable presence.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/6-sheet-bus-shelter" className="text-primary hover:underline">
                        6-Sheet Bus Shelter (Static)
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Classic D6 poster at roadside.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/digital-6-sheet-bus-shelter" className="text-primary hover:underline">
                        Digital 6-Sheet Bus Shelter (Adshel Live)
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Real-time, context-aware creative.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Street-level ambient & banners */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Street-level ambient & banners
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Chalk Stencils & Clean Graffiti</h4>
                    <p className="text-sm text-muted-foreground">Eco-friendly pavement/streetscape moments.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Flyposting & Wildposting</h4>
                    <p className="text-sm text-muted-foreground">Cultural, urban, high-frequency placement.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/street-pole-banners" className="text-primary hover:underline">
                        Street Pole Banners
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Community-level messaging along key corridors.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/street-liner-banners" className="text-primary hover:underline">
                        Street Liner Banners
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Spanning busy junctions and approaches.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to="/outdoor-media/pedestrian-crossing-panels" className="text-primary hover:underline">
                        Pedestrian Crossing Panels
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">Captive dwell at crossings/lights.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                <strong>Note on scope:</strong> We've excluded transport-vehicle ads (bus rears/supersides, taxi, tube/rail) from this page—they'll live in their own environment pages to avoid cannibalisation.
              </p>
            </div>
          </section>

          {/* Why Roadside Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Roadside Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Scale & frequency</h3>
                  <p className="text-sm text-muted-foreground">Always-on coverage across commuter and local journeys.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Targeted by place</h3>
                  <p className="text-sm text-muted-foreground">Boroughs, corridors, retail zones, school runs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Digital flexibility</h3>
                  <p className="text-sm text-muted-foreground">Switch creative by daypart, weather or trigger.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fast to live</h3>
                  <p className="text-sm text-muted-foreground">Paper or digital, we move quickly.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                <strong>Transparent commercials:</strong> media owner rate shown; our commission itemised.
              </p>
            </div>
          </section>

          {/* Planning Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Planning Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Brief</h3>
                  <p className="text-sm text-muted-foreground">Audience, objectives, timing, budget.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Location analysis</h3>
                  <p className="text-sm text-muted-foreground">Route/Mosaic + local movement patterns.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Rate check & booking</h3>
                  <p className="text-sm text-muted-foreground">Best market positions, no mark-ups.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="font-semibold mb-2">Creative & delivery</h3>
                  <p className="text-sm text-muted-foreground">Install/flight, proofing, reporting.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQs (Roadside)</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How much does roadside cost?</h3>
                  <p className="text-muted-foreground">Rates vary by size, location and duration. Digital typically carries a premium; static 48-sheets offer strong CPMs. Ask for a transparent proposal.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can you run local and national?</h3>
                  <p className="text-muted-foreground">Yes—anything from a single borough to nationwide roadside networks.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer creative/production?</h3>
                  <p className="text-muted-foreground">Yes—full creative and print/production, including copy testing for distance/readability.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to build a roadside plan?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/brief">
                  Submit your brief
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/outdoor-media">
                  See formats
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default RoadsideAdvertising;