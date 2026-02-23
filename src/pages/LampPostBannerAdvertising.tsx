import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin,
  ArrowRight,
  CheckCircle,
  Ruler,
  Users,
  Calendar,
  Eye,
  Lightbulb
} from 'lucide-react';

const LampPostBannerAdvertising = () => {
  const navigate = useNavigate();

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
          "name": "Can I book lamp post banners in just one borough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — campaigns can be hyper-local, targeting a single street, borough, or multiple boroughs city-wide."
          }
        },
        {
          "@type": "Question",
          "name": "How long do lamp post banner campaigns run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Campaigns typically run from 2 weeks to several months, depending on your objectives."
          }
        },
        {
          "@type": "Question",
          "name": "Can lamp post banners be illuminated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — some locations allow for banner illumination for enhanced night-time visibility."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle installation and removal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we manage the full process, including production, installation, and removal."
          }
        },
        {
          "@type": "Question",
          "name": "Are there restrictions on creative content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — all artwork must comply with local authority guidelines and planning permissions."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      if (faqScript.parentNode) {
        faqScript.parentNode.removeChild(faqScript);
      }
    };
  }, []);

  const formatDetails = [
    {
      name: "Banner Size",
      description: "Typically 1m x 1.5m or 2m x 3m (custom sizes available)",
      icon: Ruler
    },
    {
      name: "Locations", 
      description: "High streets, retail districts, arterial roads, event venues",
      icon: MapPin
    },
    {
      name: "Audience",
      description: "Pedestrians, commuters, local shoppers, tourists",
      icon: Users
    },
    {
      name: "Placement",
      description: "Single or double-sided for maximum visibility",
      icon: Eye
    },
    {
      name: "Availability",
      description: "Long-term brand placement or short-term event promotion",
      icon: Calendar
    }
  ];

  const benefits = [
    "Localised Targeting: Ideal for borough-specific campaigns and community messaging",
    "Event & Seasonal Promotion: Perfect for festivals, markets, and seasonal retail periods",
    "High Repeat Impressions: Daily visibility for both vehicles and footfall",
    "Cost-Effective: Lower CPM compared to large-format OOH options",
    "Custom Branding: Multiple sizes, shapes, and print finishes available"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Smart Quote Builder",
      description: "Search formats, configure your campaign, and get real-time pricing."
    },
    {
      step: "2", 
      title: "Send Your Brief",
      description: "Share your target areas, objectives, and creative requirements."
    },
    {
      step: "3",
      title: "Location Planning", 
      description: "We identify the best lamp post locations for your campaign objectives."
    },
    {
      step: "4",
      title: "Full Campaign Delivery",
      description: "From production to installation and removal — we handle everything."
    }
  ];

  const whyChooseUs = [
    "Hyper-local targeting using borough and street-level location data.",
    "Direct relationships with all 32 London borough councils and authorities.",
    "Transparent pricing — you pay what we pay, plus our agreed commission.",
    "Full service delivery including planning permissions and installation."
  ];

  const faqs = [
    {
      question: "Can I book lamp post banners in just one borough?",
      answer: "Yes — campaigns can be hyper-local, targeting a single street, borough, or multiple boroughs city-wide."
    },
    {
      question: "How long do lamp post banner campaigns run?",
      answer: "Campaigns typically run from 2 weeks to several months, depending on your objectives."
    },
    {
      question: "Can lamp post banners be illuminated?",
      answer: "Yes — some locations allow for banner illumination for enhanced night-time visibility."
    },
    {
      question: "Do you handle installation and removal?",
      answer: "Yes — we manage the full process, including production, installation, and removal."
    },
    {
      question: "Are there restrictions on creative content?",
      answer: "Yes — all artwork must comply with local authority guidelines and planning permissions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lamp Post Banner Advertising London | High-Visibility Street Level</title>
        <meta 
          name="description" 
          content="Lamp post banner advertising offers high-visibility, street-level exposure across London's busiest roads, shopping districts, and community areas. Perfect for local events, seasonal campaigns, and brand awareness." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <MapPin className="w-4 h-4 mr-2" />
                Lamp Post Banner Advertising London
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6 leading-tight">
                High-visibility, street-level exposure across London
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Lamp post banner advertising offers high-visibility, street-level exposure across London's busiest roads, shopping districts, and community areas. Perfect for local events, seasonal campaigns, and brand awareness, these banners deliver repeated impressions to both commuter and retail audiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white"
                >
                  Get Banner Quote
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

        {/* Borough Coverage */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">London-Wide Coverage</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With options across all 32 London boroughs, lamp post banners are a flexible, cost-effective way to target specific areas or run large-scale city-wide campaigns.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">32</CardTitle>
                    <CardDescription>London Boroughs</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">Street Level</CardTitle>
                    <CardDescription>Eye-Line Positioning</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">Day & Night</CardTitle>
                    <CardDescription>Illumination Options</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Format Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Format Details</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Strategic placement at high-footfall locations with maximum visibility for pedestrians and drivers.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formatDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{detail.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {detail.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Lamp Post Banner Advertising */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Lamp Post Banner Advertising?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Perfect for local businesses, events, and seasonal campaigns across London's communities.
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

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works — Your 4 Routes with Us</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From location planning to installation across London's lamp post network.
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
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Media Buying London</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Local authority relationships, transparent pricing, and full-service campaign management.
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about lamp post banner advertising in London.
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
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reach London communities with lamp post banner advertising
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to deliver street-level visibility across all 32 London boroughs?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/quote')}
                  className="text-lg px-8 py-6"
                >
                  Search Formats
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6"
                >
                  Configure Campaign
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LampPostBannerAdvertising;