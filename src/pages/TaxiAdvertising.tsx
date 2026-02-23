import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Car,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Users,
  MapPin,
  Monitor,
  Receipt,
  Palette
} from 'lucide-react';

const TaxiAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Taxi Advertising London",
      "provider": {
        "@type": "Organization",
        "name": "Media Buying London",
        "url": "https://mediabuyinglondon.co.uk",
        "logo": "https://mediabuyinglondon.co.uk/favicon.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": "London, UK"
      },
      "description": "Taxi advertising in London delivers premium mobile brand exposure across all 32 boroughs, reaching millions of residents, commuters, and tourists every week. From full taxi wraps to tip seats and digital roof screens, we connect your brand with high-value audiences on the move.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Taxi Advertising Formats",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Livery Wraps"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Superside Panels"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tip Seat Panels"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Roof Screens"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Taxi Receipt Ads"
            }
          }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // Inject FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does taxi advertising cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary by format, duration, and coverage. Full wraps typically start from £2,500 per taxi for a 4-week period."
          }
        },
        {
          "@type": "Question",
          "name": "Can I target specific London areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — campaigns can be borough-specific or cover the entire city."
          }
        },
        {
          "@type": "Question",
          "name": "How long can I book taxi advertising for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most campaigns run in 4-week blocks, but we can arrange custom durations."
          }
        },
        {
          "@type": "Question",
          "name": "Are production costs included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Production is quoted separately, ensuring transparency."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      if (serviceScript.parentNode) {
        serviceScript.parentNode.removeChild(serviceScript);
      }
      if (faqScript.parentNode) {
        faqScript.parentNode.removeChild(faqScript);
      }
    };
  }, []);

  const formats = [
    {
      name: "Full Livery Wraps",
      description: "Complete exterior branding for maximum impact.",
      icon: Palette
    },
    {
      name: "Superside Panels", 
      description: "Large exterior panels ideal for cost-effective reach.",
      icon: Target
    },
    {
      name: "Tip Seat Panels",
      description: "Passenger-facing ads inside the cab.",
      icon: Users
    },
    {
      name: "Digital Roof Screens",
      description: "Dynamic content with time-of-day or location triggers.",
      icon: Monitor
    },
    {
      name: "Taxi Receipt Ads",
      description: "Take-away messaging on every printed receipt.",
      icon: Receipt
    }
  ];

  const benefits = [
    "City-wide coverage — Taxis operate across all 32 boroughs and key suburban routes.",
    "Premium audience targeting — Frequented by business travellers, tourists, and affluent locals.",
    "Mobile visibility — Your campaign moves with the flow of the city, maximising impressions.",
    "Extended dwell time — Interior formats hold attention for 10–40 minutes per journey.",
    "Iconic format — Black cabs are an established part of London's visual identity."
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Smart Quote Builder",
      description: "Get instant format availability and pricing."
    },
    {
      step: "2", 
      title: "Send Us Your Brief",
      description: "Share your audience, objectives, and budget."
    },
    {
      step: "3",
      title: "Media Owner Matching", 
      description: "We source the best locations and rates from all UK taxi operators."
    },
    {
      step: "4",
      title: "Full Campaign Delivery",
      description: "From creative production to transparent invoicing (you pay what we pay)."
    }
  ];

  const whyChooseUs = [
    "Audience-first planning — Using Experian Mosaic, Route, and location analytics.",
    "Rate-driven approach — No hidden mark-ups; transparent commission only.",
    "Fast turnaround — We move from brief to booking faster than anyone else.",
    "White-label service — Agencies can resell our campaigns under their own brand."
  ];

  const faqs = [
    {
      question: "How much does taxi advertising cost in London?",
      answer: "Costs vary by format, duration, and coverage. Full wraps typically start from £2,500 per taxi for a 4-week period."
    },
    {
      question: "Can I target specific London areas?",
      answer: "Yes — campaigns can be borough-specific or cover the entire city."
    },
    {
      question: "How long can I book taxi advertising for?",
      answer: "Most campaigns run in 4-week blocks, but we can arrange custom durations."
    },
    {
      question: "Are production costs included?",
      answer: "Production is quoted separately, ensuring transparency."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Taxi Advertising London | Premium Mobile Brand Exposure</title>
        <meta 
          name="description" 
          content="Taxi advertising in London delivers premium mobile brand exposure across all 32 boroughs, reaching millions of residents, commuters, and tourists every week. From full taxi wraps to tip seats and digital roof screens, we connect your brand with high-value audiences on the move." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Taxi Advertising London
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight px-2">
                Premium mobile brand exposure across all 32 boroughs
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                London taxi advertising offers a high-visibility, mobile platform to put your brand in front of millions. These iconic black cabs move through every borough, from the busiest commercial districts to local high streets, carrying your message directly to the heart of the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white"
                >
                  Get Taxi Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6 border-red-600/50 text-red-400 hover:bg-red-600/10"
                >
                  Plan Campaign
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Taxi Advertising Works */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Taxi Advertising Works in London</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  London's taxi network gives brands constant presence and unparalleled reach across the city.
                </p>
              </div>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Taxi Advertising Formats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Taxi Advertising Formats</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From full wraps to digital screens, choose the format that best suits your campaign objectives.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formats.map((format, index) => {
                  const IconComponent = format.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{format.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {format.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works — Your 4 Routes with Us</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From brief to booking, we streamline the entire process.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((item, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{item.step}</span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Media Buying London</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Transparent rates, expert planning, and fastest turnaround in the industry.
                </p>
              </div>
              <div className="grid gap-6">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about taxi advertising in London.
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get your taxi advertising campaign live in days, not weeks
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to put your brand on London's most iconic mobile advertising platform?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6"
                >
                  Get a Quote Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6"
                >
                  Send Your Brief
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TaxiAdvertising;