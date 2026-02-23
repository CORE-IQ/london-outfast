import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Phone,
  Recycle,
  Armchair,
  Navigation,
  Eye,
  TrendingUp,
  Leaf
} from "lucide-react";

const StreetFurniture = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Street Furniture Advertising London",
      "description": "Street furniture advertising in London, including phone kiosks, recycling bins, benches, and information panels. Ideal for community-level campaigns or citywide reach.",
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
        "Street Furniture Advertising",
        "Phone Kiosk Advertising",
        "Bench Advertising",
        "Recycling Bin Advertising"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/street-furniture",
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

  const furnitureFormats = [
    {
      icon: Phone,
      title: "Phone Kiosk Advertising",
      description: "Traditional and modern phone kiosks across key London boroughs. Options for vinyl wraps, posters, and digital panels."
    },
    {
      icon: Recycle,
      title: "Recycling Bin Advertising",
      description: "Eco-friendly branding opportunity on street-level recycling points. High dwell time in community and retail areas."
    },
    {
      icon: Armchair,
      title: "Bench Advertising",
      description: "Branded panels on public seating in transport hubs, parks, and shopping districts. Continuous exposure to passing pedestrians and seated audiences."
    },
    {
      icon: Navigation,
      title: "Information Panel & Wayfinding Signs",
      description: "Ads positioned on street maps, tourist guides, and local information boards. Great for local business visibility and event promotion."
    },
    {
      icon: Building,
      title: "Bus Shelter Side Panels (Non-6 Sheet)",
      description: "Additional exposure on side panels of shelters beyond main poster inventory."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Always-on visibility",
      description: "embedded in the urban environment 24/7"
    },
    {
      icon: MapPin,
      title: "Local or citywide coverage",
      description: "target specific boroughs or blanket the capital"
    },
    {
      icon: DollarSign,
      title: "Cost-effective",
      description: "compared to large-format sites, offers strong frequency at lower cost"
    },
    {
      icon: Leaf,
      title: "Sustainably aligned",
      description: "many formats are part of eco-friendly infrastructure"
    }
  ];

  const faqs = [
    {
      question: "Are street furniture sites digital or static?",
      answer: "Both — many modern units now feature digital displays, but static panels remain widely available."
    },
    {
      question: "Can we choose exact locations?",
      answer: "Yes — location lists are available to ensure your placements align with your audience strategy."
    },
    {
      question: "Are there restrictions on creative?",
      answer: "Content must comply with ASA and council regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Street Furniture Advertising London | Phone Kiosks, Benches, Recycling Bins</title>
        <meta 
          name="description" 
          content="Street furniture advertising in London including phone kiosks, recycling bins, benches, information panels. Community-level targeting or citywide coverage. Get quote today." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Street Furniture Advertising London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Street furniture advertising transforms everyday urban fixtures into brand touchpoints. From phone kiosks and recycling bins to benches, information panels, and wayfinding signs, these high-visibility placements integrate seamlessly into the daily lives of Londoners.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                Perfect for community-level targeting or citywide coverage, street furniture ads place your message where it's impossible to ignore — at street level, in the heart of public spaces, and in front of pedestrians, commuters, and drivers alike.
              </p>
            </div>
          </div>
        </section>

        {/* Furniture Formats */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Street Furniture Formats in London</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {furnitureFormats.map((format, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <format.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{format.title}</h3>
                    <p className="text-muted-foreground">{format.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Street Furniture Advertising Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your Street Furniture Campaign?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's street-level advertising opportunities.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your street furniture brief <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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

export default StreetFurniture;