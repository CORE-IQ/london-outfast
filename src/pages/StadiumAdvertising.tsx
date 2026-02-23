import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, 
  Target, 
  Clock, 
  Users, 
  MapPin,
  ArrowRight,
  Monitor,
  Camera,
  Zap,
  Eye,
  TrendingUp,
  Star
} from "lucide-react";

const StadiumAdvertising = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stadium Advertising London",
      "description": "Stadium advertising in London across Wembley, Emirates, Tottenham Hotspur Stadium, Stamford Bridge, Twickenham, and more. Formats include LED pitchside boards, concourse panels, big screens, and experiential activations.",
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
        "Stadium Advertising",
        "Sports Advertising",
        "Event Advertising",
        "LED Pitchside Advertising",
        "Experiential Activations"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/stadium-advertising-london",
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

  const stadiums = [
    {
      name: "Wembley Stadium",
      description: "England's national stadium & major concert venue (90,000 capacity)"
    },
    {
      name: "Tottenham Hotspur Stadium",
      description: "state-of-the-art multi-use arena hosting NFL & boxing as well as Premier League"
    },
    {
      name: "Emirates Stadium",
      description: "home of Arsenal FC, with strong global TV reach"
    },
    {
      name: "London Stadium",
      description: "former Olympic Stadium, now home to West Ham United & major events"
    },
    {
      name: "Stamford Bridge",
      description: "Chelsea FC's historic home in West London"
    },
    {
      name: "Twickenham Stadium",
      description: "world rugby's HQ and major international fixture venue"
    },
    {
      name: "The Oval",
      description: "iconic cricket ground hosting international and domestic competitions"
    },
    {
      name: "Lord's Cricket Ground",
      description: "\"Home of Cricket\" with a prestige audience"
    },
    {
      name: "Brentford Community Stadium",
      description: "home to Brentford FC & London Irish RFC"
    },
    {
      name: "Selhurst Park",
      description: "Crystal Palace FC's South London fortress"
    },
    {
      name: "The Valley",
      description: "Charlton Athletic's historic ground"
    },
    {
      name: "Plough Lane",
      description: "AFC Wimbledon's fan-first stadium"
    }
  ];

  const advertisingFormats = [
    {
      icon: Zap,
      title: "LED Pitchside Boards",
      description: "Dynamic, high-resolution LED boards with rotating brand slots. Visible in-stadium and in broadcast coverage."
    },
    {
      icon: Monitor,
      title: "Static & Digital Concourse Panels",
      description: "Target fans during arrival, halftime, and post-match. Formats include D6, large-format posters, and branded wayfinding."
    },
    {
      icon: Camera,
      title: "Big Screen Ads",
      description: "Full-screen motion graphics or static creatives displayed before, during, and after the game. Maximum visibility to every seat in the stadium."
    },
    {
      icon: Users,
      title: "Experiential Fan Zone Activations",
      description: "Sampling, demos, and interactive brand experiences in fan gathering areas. Direct engagement with high-energy, brand-receptive audiences."
    },
    {
      icon: Star,
      title: "Branded Hospitality Areas",
      description: "Premium brand association via lounges, boxes, and VIP experiences. Perfect for targeting decision-makers and affluent fan segments."
    },
    {
      icon: TrendingUp,
      title: "Full Stadium Takeovers",
      description: "Wrap key stadium areas with your brand — from exterior façades to seating sections."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Mass reach in one location",
      description: "tens of thousands per event"
    },
    {
      icon: Clock,
      title: "Unrivalled dwell time",
      description: "90+ minutes of audience engagement"
    },
    {
      icon: Camera,
      title: "Global TV & social media exposure",
      description: "extending your reach far beyond the venue"
    },
    {
      icon: Trophy,
      title: "Emotional connection",
      description: "align your brand with unforgettable moments"
    }
  ];

  const faqs = [
    {
      question: "Can stadium advertising be booked for non-sporting events?",
      answer: "Yes — concerts, festivals, and cultural events offer equally strong exposure opportunities."
    },
    {
      question: "Is LED advertising visible on TV broadcasts?",
      answer: "Yes — prime-time broadcast and highlight footage often capture pitchside LED boards."
    },
    {
      question: "How far in advance should I book?",
      answer: "For high-demand fixtures, booking 3–6 months in advance is recommended."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stadium Advertising London | Wembley, Emirates, Tottenham LED Pitchside</title>
        <meta 
          name="description" 
          content="Stadium advertising in London across Wembley, Emirates, Tottenham Hotspur Stadium, Stamford Bridge. LED pitchside boards, big screens, concourse panels. Get quote today." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Stadium Advertising London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stadium advertising in London gives brands access to some of the most passionate, high-energy audiences in the world. Whether it's Premier League football, international rugby, world-class concerts, or cultural events, London's stadiums deliver tens of thousands of engaged fans in a single day — and millions more via broadcast and social amplification.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                From LED pitchside boards to full concourse branding, stadium environments create unrivalled visibility in a moment of pure audience focus.
              </p>
            </div>
          </div>
        </section>

        {/* Where We Advertise */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Where We Advertise</h2>
            <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              We plan, book, and deliver campaigns across London's most iconic venues, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {stadiums.map((stadium, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{stadium.name}</h3>
                    <p className="text-muted-foreground">{stadium.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advertising Formats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Stadium Advertising Formats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {advertisingFormats.map((format, index) => (
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Brands Choose Stadium Advertising</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your Stadium Campaign?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's most iconic sports venues.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your stadium brief <ArrowRight className="ml-2 h-5 w-5" />
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

export default StadiumAdvertising;