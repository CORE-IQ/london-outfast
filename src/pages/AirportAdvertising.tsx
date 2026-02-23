import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Plane,
  ArrowRight,
  CheckCircle,
  Monitor,
  Image,
  ShoppingBag,
  Luggage,
  Users
} from 'lucide-react';

const AirportAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Airport Advertising London",
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
      "description": "Airport advertising in London targets high-value business travellers, tourists, and affluent frequent flyers. From digital screens to large-format banners, we deliver your brand in front of millions passing through London's major airports every month.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Airport Advertising Formats",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Arrival & Departure Screens" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Large Format Banners & Wraps" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airside Retail Displays" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baggage Reclaim Panels" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jet Bridge Branding" } }
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
          "name": "Which airports can I advertise in through you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We place campaigns in Heathrow, Gatwick, London City, Luton, and Stansted — plus regional UK airports."
          }
        },
        {
          "@type": "Question",
          "name": "Can I target only departing or arriving passengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — campaigns can be arrival-only, departure-only, or full terminal coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How long do airport campaigns run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically booked in 2–4 week blocks, with short-term activations available."
          }
        },
        {
          "@type": "Question",
          "name": "Are production costs included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — production is quoted separately to maintain transparency."
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
      name: "Digital Arrival & Departure Screens",
      description: "Target passengers at key journey points.",
      icon: Monitor
    },
    {
      name: "Large Format Banners & Wraps", 
      description: "High-impact visuals across terminal spaces.",
      icon: Image
    },
    {
      name: "Airside Retail Displays",
      description: "Engage passengers in premium shopping zones.",
      icon: ShoppingBag
    },
    {
      name: "Baggage Reclaim Panels",
      description: "Capture attention as passengers wait for luggage.",
      icon: Luggage
    },
    {
      name: "Jet Bridge Branding",
      description: "Immersive messaging at the point of boarding.",
      icon: Users
    }
  ];

  const benefits = [
    "Affluent audience — Frequent flyers and business decision-makers.",
    "Extended dwell time — Passengers spend 60–120 minutes airside before boarding.",
    "Multiple touchpoints — From car parks to departure gates.",
    "Global reach — Campaigns reach domestic, European, and intercontinental travellers.",
    "Prestige positioning — Association with premium, trusted environments."
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Smart Quote Builder",
      description: "Search availability, configure formats, and view real-time pricing."
    },
    {
      step: "2", 
      title: "Send Your Brief",
      description: "Share objectives, audience, and creative assets."
    },
    {
      step: "3",
      title: "Media Owner Partnerships", 
      description: "We access every major UK airport advertising concession."
    },
    {
      step: "4",
      title: "Full Campaign Delivery",
      description: "From creative production to transparent invoicing."
    }
  ];

  const whyChooseUs = [
    "Unbeatable rate access via direct media owner relationships.",
    "Audience intelligence using Experian Mosaic and location analytics.",
    "Rapid campaign activation for seasonal or last-minute opportunities.",
    "Transparent commercial model — you pay what we pay, plus agreed commission."
  ];

  const faqs = [
    {
      question: "Which airports can I advertise in through you?",
      answer: "We place campaigns in Heathrow, Gatwick, London City, Luton, and Stansted — plus regional UK airports."
    },
    {
      question: "Can I target only departing or arriving passengers?",
      answer: "Yes — campaigns can be arrival-only, departure-only, or full terminal coverage."
    },
    {
      question: "How long do airport campaigns run?",
      answer: "Typically booked in 2–4 week blocks, with short-term activations available."
    },
    {
      question: "Are production costs included?",
      answer: "No — production is quoted separately to maintain transparency."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Airport Advertising London | High-Value Business Travellers</title>
        <meta 
          name="description" 
          content="Airport advertising in London targets high-value business travellers, tourists, and affluent frequent flyers. From digital screens to large-format banners, we deliver your brand in front of millions passing through London's major airports every month." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Plane className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Airport Advertising London
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight px-2">
                Target high-value business travellers and affluent frequent flyers
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                London's airports are some of the busiest travel hubs in the world, making airport advertising a prime channel for brands looking to reach international and domestic audiences. High-impact placements deliver extended dwell times and unmatched visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
                >
                  Get Airport Quote
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/brief')}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 border-red-600/50 text-red-400 hover:bg-red-600/10 w-full sm:w-auto"
                >
                  Plan Campaign
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Airport Advertising Works */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Airport Advertising Works in London</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With Heathrow, Gatwick, London City, Luton, and Stansted serving more than 180 million passengers a year, London airport advertising offers unmatched access to decision-makers and spend-ready travellers.
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

        {/* Airport Advertising Formats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Airport Advertising Formats</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From digital screens to jet bridge branding, reach passengers at every stage of their journey.
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
                  From brief to boarding gates, we streamline airport advertising campaigns.
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
                  Direct relationships, expert targeting, and transparent pricing for airport campaigns.
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
                  Everything you need to know about airport advertising in London.
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
                Put your brand in front of millions of high-value passengers
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to reach affluent travellers at London's busiest airports?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6"
                >
                  Get Your Airport Advertising Quote
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

export default AirportAdvertising;