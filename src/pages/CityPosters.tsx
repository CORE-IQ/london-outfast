import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Target, 
  Clock, 
  Users, 
  ArrowRight,
  FileText,
  Eye,
  TrendingUp,
  Calendar
} from "lucide-react";

const CityPosters = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "City Posters London",
      "description": "City poster advertising across London's key cultural and high-footfall areas including Shoreditch, Soho, Camden, Brixton, and Covent Garden. Formats include 4-sheet, 6-sheet, flyposting walls, and vinyl wraps.",
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
        "City Poster Advertising",
        "Street-Level Advertising",
        "Event Promotion Posters",
        "Flyposting Advertising"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/city-posters-london",
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

  const locations = [
    {
      name: "Shoreditch, Hackney, and Dalston",
      description: "trend-driven, creative audiences"
    },
    {
      name: "Soho, Covent Garden, and Leicester Square",
      description: "high footfall entertainment and nightlife zones"
    },
    {
      name: "Camden Town and Kentish Town",
      description: "youth culture, music, and alternative lifestyle hubs"
    },
    {
      name: "Southbank & Waterloo",
      description: "tourist-heavy, cultural venues and attractions"
    },
    {
      name: "Brixton & Peckham",
      description: "diverse, vibrant, community-driven districts"
    },
    {
      name: "Key commuter routes",
      description: "prime placement for daily brand reinforcement"
    }
  ];

  const posterFormats = [
    {
      icon: FileText,
      title: "4-Sheet Posters",
      description: "The classic OOH poster size, ideal for targeted local domination."
    },
    {
      icon: FileText,
      title: "6-Sheet Posters",
      description: "Slightly larger format, perfect for busier high streets and shopping districts."
    },
    {
      icon: Target,
      title: "Flyposting Walls",
      description: "Multiple poster drops on dedicated or shared walls for cultural and event promotion."
    },
    {
      icon: TrendingUp,
      title: "Vinyl Wrap Posters",
      description: "Premium weather-resistant execution for long-term campaigns."
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Local & cultural targeting",
      description: "speak directly to neighbourhood audiences"
    },
    {
      icon: Clock,
      title: "High frequency & repetition",
      description: "daily visibility builds brand recall"
    },
    {
      icon: TrendingUp,
      title: "Flexible campaign sizes",
      description: "run hyper-local or citywide domination"
    },
    {
      icon: Calendar,
      title: "Perfect for events, launches, and cultural campaigns",
      description: "ideal format for time-sensitive promotions"
    }
  ];

  const faqs = [
    {
      question: "How long is a typical city poster campaign?",
      answer: "Standard runs are 1–2 weeks, but can be extended for longer-term presence."
    },
    {
      question: "Can city posters be used for event promotion?",
      answer: "Yes — they are a go-to format for music, theatre, cultural, and nightlife events."
    },
    {
      question: "Are there restrictions on where posters can go?",
      answer: "Yes — placements are curated for visibility and compliance with local advertising regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>City Posters London | 4-Sheet, 6-Sheet & Flyposting Advertising</title>
        <meta 
          name="description" 
          content="City poster advertising across London including Shoreditch, Soho, Camden, Brixton. 4-sheet, 6-sheet, flyposting walls, vinyl wraps. Street-level cultural targeting." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                City Posters London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                City poster advertising in London is a street-level format built for scale, frequency, and cultural relevance. Placed across the capital's busiest neighbourhoods — from Shoreditch and Soho to Camden and Covent Garden — city posters deliver constant brand visibility in the spaces where London's audiences live, work, and socialise.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                Available in classic paper, vinyl, or flyposting-style executions, city posters give you the flexibility to dominate a single area or blanket multiple boroughs for maximum reach.
              </p>
            </div>
          </div>
        </section>

        {/* Where You'll See City Posters */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Where You'll See City Posters in London</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {locations.map((location, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{location.name}</h3>
                    <p className="text-muted-foreground">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Poster Formats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">City Poster Advertising Formats</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posterFormats.map((format, index) => (
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
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Brands Choose City Posters</h2>
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
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your City Poster Campaign?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's most vibrant cultural districts.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your city poster brief <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/50">
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

export default CityPosters;