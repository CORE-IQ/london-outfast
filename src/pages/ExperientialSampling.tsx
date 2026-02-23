import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  MapPin, 
  Target, 
  TrendingUp, 
  ArrowRight,
  Train,
  ShoppingBag,
  Building,
  TreePine,
  Clock,
  Camera,
  Zap,
  Share2
} from "lucide-react";

const ExperientialSampling = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Experiential & Sampling Activations London",
      "description": "We create experiential marketing and product sampling activations across London, from commuter hubs to retail centres, delivering high-engagement brand experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Media Buying London",
        "url": "https://mediabuyinglondon.co.uk"
      },
      "areaServed": {
        "@type": "City",
        "name": "London"
      },
      "serviceType": [
        "Experiential Marketing",
        "Product Sampling",
        "Brand Activation",
        "Pop-Up Event Marketing"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/experiential-sampling-london",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const activationHotspots = [
    {
      icon: Train,
      title: "Transport & Commuter Hubs",
      description: "Waterloo, King's Cross, Liverpool Street, London Bridge. Capture high-footfall, time-rich audiences."
    },
    {
      icon: ShoppingBag,
      title: "Retail & Shopping Malls",
      description: "Westfield London, Westfield Stratford, Brent Cross, Bluewater. Perfect for trial, purchase, and impulse sales."
    },
    {
      icon: Building,
      title: "Cultural & Event Spaces",
      description: "Southbank, Trafalgar Square, Covent Garden, Camden Market. Ideal for festival tie-ins, seasonal campaigns, and experiential launches."
    },
    {
      icon: TreePine,
      title: "Outdoor Lifestyle & Parks",
      description: "Hyde Park, Greenwich Park, Victoria Park. Great for family-friendly and wellness brands."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Tangible brand connection",
      description: "face-to-face engagement builds trust and recall"
    },
    {
      icon: Target,
      title: "Trial-to-purchase conversion",
      description: "sampling accelerates product adoption"
    },
    {
      icon: Camera,
      title: "Social content goldmine",
      description: "attendees become your content creators"
    },
    {
      icon: TrendingUp,
      title: "Customisable formats",
      description: "from small pop-ups to multi-day immersive builds"
    }
  ];

  const enhancements = [
    {
      icon: Share2,
      title: "Live social media walls to amplify engagement"
    },
    {
      icon: Users,
      title: "Data capture integrations for ongoing CRM marketing"
    },
    {
      icon: Target,
      title: "Themed giveaways aligned to brand objectives"
    },
    {
      icon: Zap,
      title: "Cross-format synergy with OOH, projection mapping, and street-level ads"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "Ideally 4–6 weeks before your event date to secure prime locations and handle permits."
    },
    {
      question: "Can you handle staffing and logistics?",
      answer: "Yes — we provide end-to-end activation management, from site booking to staff training."
    },
    {
      question: "Can we integrate with digital campaigns?",
      answer: "Absolutely — we often sync experiential activations with live social ads and DOOH for maximum amplification."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experiential & Sampling Activations London | Pop-Up Events & Brand Experiences</title>
        <meta 
          name="description" 
          content="Experiential marketing and product sampling activations across London. Pop-up events, brand experiences at transport hubs, shopping centres. Get quote today." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
                Experiential & Sampling Activations London
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                Bring your brand off the screen and into the real world. Experiential and sampling activations in London turn everyday spaces into live, interactive brand experiences — where consumers don't just see your campaign, they taste it, touch it, try it, and share it.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 px-2">
                From busy commuter hubs to iconic cultural locations, our activations stop people in their tracks and create moments they'll remember — and post about — long after the event.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Experiential & Sampling Activations */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Are Experiential & Sampling Activations?</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                These are hands-on, face-to-face marketing experiences designed to connect with your audience on a personal level. Whether it's giving away samples, building interactive installations, or creating live performances, the aim is simple: deep brand engagement that drives immediate and long-term impact.
              </p>
            </div>
          </div>
        </section>

        {/* London Activation Hotspots */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center px-2">London Activation Hotspots</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {activationHotspots.map((hotspot, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <hotspot.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{hotspot.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{hotspot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center px-2">Why Brands Choose Experiential & Sampling in London</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 px-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base px-2">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Enhancements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Campaign Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {enhancements.map((enhancement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <enhancement.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-foreground">{enhancement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 px-2">Ready to Create Your Brand Experience?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
              Get expert advice and competitive pricing for London's most engaging experiential activations.
            </p>
            <div className="px-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto" asChild>
                <Link to="/brief">
                  Send us your experiential brief <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExperientialSampling;