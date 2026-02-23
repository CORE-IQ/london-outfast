import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { 
  Bus, 
  Target, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Phone,
  ChevronRight
} from 'lucide-react';

const BusAdvertising = () => {
  useEffect(() => {
    // Inject FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does bus advertising cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing varies by format (mega rear, superside, streetliner, rear panel, interior), route targeting, and duration. We provide transparent proposals showing media owner rates and our commission separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can we target specific boroughs or routes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We plan by borough, route and daypart using audience, mobility and route data to match coverage to your objectives."
          }
        },
        {
          "@type": "Question",
          "name": "What lead times should we allow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Availability and pricing can be confirmed quickly; production and fitting typically require 5–10 working days depending on format and fleet."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle creative and production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage artwork specs, print and fitting to operator guidelines, including copy checks for readability and compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How is performance reported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide proof of posting and post-campaign summaries. Where required, we can model reach and frequency using industry datasets."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Inject Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AdvertisingService",
      "name": "Bus Advertising in London",
      "serviceType": "Bus and Coach Advertising",
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
        "@type": "Audience",
        "audienceType": "Business and Marketing Professionals"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bus Advertising Formats",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bus Mega Rear",
              "description": "Dominant rear coverage, highly visible to all following traffic"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bus Streetliner",
              "description": "Full-length side ads creating mobile billboards up to 12m long"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bus Superside",
              "description": "Large format side panels with excellent coverage across the TfL network"
            }
          }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    return () => {
      const existingFaqScript = document.querySelector('script[type="application/ld+json"]');
      if (existingFaqScript && existingFaqScript.innerHTML.includes('FAQPage')) {
        document.head.removeChild(existingFaqScript);
      }
      const existingServiceScript = document.querySelector('script[type="application/ld+json"]');
      if (existingServiceScript && existingServiceScript.innerHTML.includes('AdvertisingService')) {
        document.head.removeChild(existingServiceScript);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Bus Advertising London | TfL OOH Campaign Planning</title>
        <meta name="description" content="Buy and plan bus advertising in London. Mega rears, streetliners, supersides & interiors. Audience-driven planning with transparent, unmarked rates." />
        <meta name="keywords" content="bus advertising london, TfL bus ads, mega rear, streetliner, bus campaign planning, london bus advertising" />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <div className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-black">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 sm:mb-6 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Bus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                London Bus Advertising
              </Badge>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-red-500 leading-tight px-2">
                Bus Advertising London
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-2">
                With over <strong className="text-red-400">6.8 million daily public transport users</strong> and <strong className="text-red-400">8,600 buses</strong> operating on London's streets, bus advertising remains one of the most visible and versatile OOH formats in the capital. From mega rears dominating commuter traffic to full-length streetliners gliding through Oxford Street, bus ads offer unmatched reach, frequency, and city-wide coverage.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-2">
                At Media Buying London, we plan, price-check, and deliver bus campaigns using Experian Mosaic audience profiling, Route travel data, and real-time rate intelligence — so you get maximum impact at transparent, unmarked rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button asChild size="lg" className="px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                  <Link to="/brief">
                    Start Your Bus Campaign
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg border-red-600/50 text-red-400 hover:bg-red-600/10 w-full sm:w-auto">
                  <Link to="/brief">
                    Plan Campaign
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
          
          {/* Why Bus Advertising Works */}
          <section>
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="outline" className="mb-3 sm:mb-4">
                <Target className="w-4 h-4 mr-2" />
                Advantages
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">Why Bus Advertising Works</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: MapPin,
                  title: "City-wide mobility",
                  description: "Ads travel through every borough, reaching both pedestrians and drivers."
                },
                {
                  icon: TrendingUp,
                  title: "High-frequency exposure",
                  description: "Multiple daily impressions as buses loop through key routes."
                },
                {
                  icon: Users,
                  title: "Audience diversity",
                  description: "From central shoppers to suburban commuters, all within one buy."
                },
                {
                  icon: Bus,
                  title: "Premium creative canvas",
                  description: "Large, high-impact formats for brand storytelling."
                },
                {
                  icon: Target,
                  title: "Flexible deployment",
                  description: "Target by route, borough, or key event."
                }
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bus Advertising Formats */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Bus className="w-4 h-4 mr-2" />
                Formats
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bus Advertising Formats</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Exterior Formats */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bus className="w-5 h-5 text-primary" />
                    </div>
                    Exterior Formats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Bus Mega Rear",
                      description: "Dominant rear coverage, highly visible to all following traffic. (Full rear panel including windows)"
                    },
                    {
                      name: "Bus Rear Panel",
                      description: "Cost-effective rear ads visible at traffic lights and stops. (Approx. 1.7m x 1.2m)"
                    },
                    {
                      name: "Bus Streetliner",
                      description: "Full-length side ads creating mobile billboards up to 12m long."
                    },
                    {
                      name: "Bus Superside",
                      description: "Large format side panels with excellent coverage across the TfL network. (Approx. 12.2m x 2.4m)"
                    },
                    {
                      name: "Bus T-Side",
                      description: "Compact, cost-effective side ads for route targeting."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Interior Formats */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    Interior Formats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Bus Interior Panels",
                      description: "Headliners and seatback ads for captive passenger audiences."
                    },
                    {
                      name: "Grab Handle & Ticket Panel Ads",
                      description: "Additional touchpoints inside the bus environment."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Campaign Planning Approach */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Target className="w-4 h-4 mr-2" />
                Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Campaign Planning Approach</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "1",
                  title: "Audience Mapping",
                  description: "Identify the right mix of boroughs, routes, and times using Route data."
                },
                {
                  step: "2",
                  title: "Format Selection",
                  description: "Match creative goals to the right exterior/interior mix."
                },
                {
                  step: "3",
                  title: "Rate Checking",
                  description: "Benchmark prices against market averages and pass savings on to you."
                },
                {
                  step: "4",
                  title: "Creative Deployment",
                  description: "Manage artwork, printing, and fitting to TfL-approved specs."
                },
                {
                  step: "5",
                  title: "Performance Reporting",
                  description: "Post-campaign analysis and proof of posting (POP) provided."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Audience Targeting & Commercial Advantage */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Audience Targeting Examples */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  Audience Targeting Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    segment: "Shoppers",
                    routes: "Routes through Oxford Street, Westfield Stratford, Westfield White City."
                  },
                  {
                    segment: "Affluent Commuters",
                    routes: "Canary Wharf, Chelsea, Hampstead."
                  },
                  {
                    segment: "Tourists",
                    routes: "Trafalgar Square, South Bank, Tower Hill."
                  },
                  {
                    segment: "Students & Youth Markets",
                    routes: "Camden, Shoreditch, Brixton."
                  }
                ].map((target, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{target.segment}</h4>
                      <p className="text-sm text-muted-foreground">{target.routes}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* The Media Buying London Difference */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  The Media Buying London Difference
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    point: "We're rate-driven",
                    description: "The price you see is the price we pay, with commission shown."
                  },
                  {
                    point: "We're audience-first",
                    description: "No special deals pushing you towards the wrong inventory."
                  },
                  {
                    point: "We move fast",
                    description: "Lock in high-demand mega rears and premium routes within hours."
                  },
                  {
                    point: "We white-label for agencies",
                    description: "Seamless supply to your clients under your brand."
                  }
                ].map((diff, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{diff.point}</h4>
                      <p className="text-sm text-muted-foreground">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">FAQs: Bus Advertising in London</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How much does bus advertising cost?",
                  answer: "Mega rears start from ~£600–£900 per 2 weeks; full wraps and streetliners carry a higher premium."
                },
                {
                  question: "How long does it take to book?",
                  answer: "We can confirm availability and pricing within hours; production & fitting typically 5–10 working days."
                },
                {
                  question: "Can I target specific boroughs?",
                  answer: "Yes — we can plan route-based buys focused on your audience's geography."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="border-border/50 bg-gradient-to-br from-muted/30 to-muted/50">
              <CardContent className="py-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Start your London bus advertising campaign today
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Submit your brief or call us to check live route availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="px-8 py-6 text-lg">
                    <Link to="/brief">
                      Submit Your Brief
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                    <a href="tel:+442045243019">
                      <Phone className="w-5 h-5 mr-2" />
                      Call +44 204 524 3019
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </>
  );
};

export default BusAdvertising;