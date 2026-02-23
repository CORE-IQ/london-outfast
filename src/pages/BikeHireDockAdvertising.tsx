import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target,
  ArrowRight,
  CheckCircle,
  Bike,
  MapPin,
  Users,
  Clock,
  Leaf,
  Monitor,
  Palette
} from 'lucide-react';

const BikeHireDockAdvertising = () => {
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
          "name": "How many bike hire docks are there in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are over 800 docking stations across all 32 boroughs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I target specific London boroughs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — campaigns can be customised to target boroughs, districts, or even individual docking locations."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum booking period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 2 weeks, although short-term activations can be arranged for events and product launches."
          }
        },
        {
          "@type": "Question",
          "name": "Is creative rotation possible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — digital-enabled locations allow for multiple creatives and daypart scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we provide full production, installation, and removal services as part of your campaign."
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
      name: "Panel Size",
      description: "Varies by dock design (typically 1.2m x 0.9m)",
      icon: Target
    },
    {
      name: "Locations", 
      description: "High-footfall streets, commuter hotspots, retail zones, tourist destinations",
      icon: MapPin
    },
    {
      name: "Audience",
      description: "Commuters, leisure cyclists, pedestrians, local residents",
      icon: Users
    },
    {
      name: "Dwell Time",
      description: "Extended — panels remain visible while users hire, dock, and return bikes",
      icon: Clock
    },
    {
      name: "Availability",
      description: "Static printed vinyls or digital options in select locations",
      icon: Monitor
    }
  ];

  const benefits = [
    "Eco-Aligned Messaging: Perfect for brands with sustainability credentials",
    "High-Dwell Locations: Capture attention during rental and return process",
    "City-Wide Network: Blanket coverage or targeted borough campaigns",
    "Hyper-Local Targeting: Perfect for local businesses or borough-specific activations",
    "Commuter & Tourist Engagement: Reaches both local residents and visitors exploring the city"
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
      description: "Share your audience, objectives, and creative requirements."
    },
    {
      step: "3",
      title: "Location Selection", 
      description: "We identify the best dock locations based on your target audience."
    },
    {
      step: "4",
      title: "Full Campaign Delivery",
      description: "From production to installation and removal — we handle everything."
    }
  ];

  const whyChooseUs = [
    "Borough-specific targeting using location analytics and footfall data.",
    "Direct relationships with Transport for London and cycle hire operators.",
    "Transparent pricing — you pay what we pay, plus our agreed commission.",
    "Full production and installation service included in every campaign."
  ];

  const faqs = [
    {
      question: "How many bike hire docks are there in London?",
      answer: "There are over 800 docking stations across all 32 boroughs."
    },
    {
      question: "Can I target specific London boroughs?",
      answer: "Yes — campaigns can be customised to target boroughs, districts, or even individual docking locations."
    },
    {
      question: "What's the minimum booking period?",
      answer: "Typically 2 weeks, although short-term activations can be arranged for events and product launches."
    },
    {
      question: "Is creative rotation possible?",
      answer: "Yes — digital-enabled locations allow for multiple creatives and daypart scheduling."
    },
    {
      question: "Do you manage installation?",
      answer: "Yes — we provide full production, installation, and removal services as part of your campaign."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bike Hire Dock Advertising London | Eco-Conscious Urban Targeting</title>
        <meta 
          name="description" 
          content="Bike hire dock advertising offers a unique way to reach London's active, eco-conscious audience. Positioned at Santander Cycles docking stations across all 32 boroughs for high-frequency, hyper-local brand exposure." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Bike className="w-4 h-4 mr-2" />
                Bike Hire Dock Advertising London
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6 leading-tight">
                Reach London's active, eco-conscious audience
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Bike hire dock advertising offers a unique way to reach London's active, eco-conscious audience. Positioned at Santander Cycles docking stations across all 32 London boroughs, these panels deliver high-frequency, hyper-local brand exposure in busy urban areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white"
                >
                  Get Dock Quote
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

        {/* Network Stats */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">London's Bike Hire Network</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With over 800 docking stations and 13,000 bicycles across all 32 London boroughs, this format delivers high-frequency exposure in the city's busiest areas.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">800+</CardTitle>
                    <CardDescription>Docking Stations</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Bike className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">13,000</CardTitle>
                    <CardDescription>Bicycles</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold">32</CardTitle>
                    <CardDescription>London Boroughs</CardDescription>
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
                  Strategic placement at high-footfall locations with extended dwell times during bike rental and return processes.
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

        {/* Why Choose Bike Hire Dock Advertising */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Bike Hire Dock Advertising?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Perfect for brands targeting eco-conscious consumers and local communities across London.
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
                  From borough targeting to campaign activation across London's bike hire network.
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
                  Expert local targeting, transparent pricing, and full-service campaign management.
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
                  Everything you need to know about bike hire dock advertising in London.
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
                Target London's eco-conscious audience with bike hire dock advertising
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to reach active Londoners at over 800 docking stations across the city?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/brief')}
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

export default BikeHireDockAdvertising;