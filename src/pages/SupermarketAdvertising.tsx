import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Target, 
  Clock, 
  Users, 
  MapPin,
  ArrowRight,
  Monitor,
  Navigation,
  ShoppingBag,
  Zap,
  Eye,
  TrendingUp
} from "lucide-react";

const SupermarketAdvertising = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Supermarket Advertising London",
      "description": "Supermarket advertising in London across Tesco, Asda, Sainsbury's, and Morrisons with formats including Digital 6-Sheets, trolleys, aisle-end panels, and experiential stands.",
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
        "Supermarket Advertising",
        "Retail Advertising",
        "Point of Purchase Advertising",
        "Digital 6-Sheet Advertising"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/supermarket-advertising",
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

  const supermarketChains = [
    {
      name: "Tesco",
      description: "from Express stores in commuter zones to flagship Extra locations"
    },
    {
      name: "Asda",
      description: "reaching value-driven, family-focused shoppers"
    },
    {
      name: "Sainsbury's",
      description: "perfect for mid-to-high-income households"
    },
    {
      name: "Morrisons",
      description: "strong regional coverage in key London boroughs"
    }
  ];

  const advertisingFormats = [
    {
      icon: Monitor,
      title: "Digital 6-Sheet Screens (Entrances & Checkouts)",
      description: "High-definition screens in premium positions — entrances, checkouts, and key aisle intersections. Perfect for brand launches, limited-time offers, and high-impact storytelling. Daypart targeting available for morning, afternoon, and evening shopping peaks."
    },
    {
      icon: ShoppingCart,
      title: "Trolley & Basket Advertising",
      description: "Brand panels on every trolley or handheld basket for constant shopper interaction. Repeated exposure throughout the entire store journey."
    },
    {
      icon: Target,
      title: "Aisle-End Panels",
      description: "Positioned at category decision points — ideal for FMCG, household goods, and impulse buys. Strong visibility from multiple store angles."
    },
    {
      icon: Navigation,
      title: "Floor Vinyls & Directional Graphics",
      description: "Creative placements on store walkways guiding shoppers to your product. Drives footfall to specific aisles or promotional stands."
    },
    {
      icon: Eye,
      title: "Car Park Billboards & Totems",
      description: "Captures shoppers before entry and post-purchase. 6-sheet, D6, and large-format roadside panels available."
    },
    {
      icon: Users,
      title: "Sampling & Experiential Stands",
      description: "Live brand engagement at high-traffic store entrances. Instant trial, feedback, and social media amplification."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Point-of-purchase dominance",
      description: "influence decisions when wallets are open"
    },
    {
      icon: Clock,
      title: "High frequency",
      description: "repeat visits from loyal shoppers (weekly or more)"
    },
    {
      icon: MapPin,
      title: "Demographic precision",
      description: "target by postcode, chain, or store format"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "single-store campaigns to London-wide supermarket takeovers"
    }
  ];

  const faqs = [
    {
      question: "Can I advertise in multiple supermarket chains at once?",
      answer: "Yes — we plan and execute cross-chain campaigns across Tesco, Asda, Sainsbury's, and Morrisons for maximum London coverage."
    },
    {
      question: "Are digital formats available in every store?",
      answer: "Most large-format locations have Digital 6-Sheet capability, especially at main entrances and checkouts. Smaller stores may have static formats only."
    },
    {
      question: "How quickly can my supermarket campaign launch?",
      answer: "Depending on availability, campaigns can go live in 7–14 days."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Supermarket Advertising London | Tesco, Asda, Sainsbury's, Morrisons OOH</title>
        <meta 
          name="description" 
          content="Supermarket advertising in London across Tesco, Asda, Sainsbury's, and Morrisons. Digital 6-Sheets, trolley advertising, aisle-end panels. Point-of-purchase dominance." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Supermarket Advertising London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Supermarket advertising is one of the most powerful, conversion-ready channels in London's OOH landscape. It puts your brand directly in front of active shoppers, decision-makers, and purchase influencers at the exact moment they're deciding what to buy.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                From Digital 6-Sheet screens at main entrances to in-aisle floor vinyls, supermarket environments combine national chain trust with hyper-local postcode targeting — ensuring your message hits the right audience, in the right place, at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* Where We Advertise */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Where We Advertise</h2>
            <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              We deliver supermarket advertising across London's busiest retail chains:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {supermarketChains.map((chain, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{chain.name}</h3>
                    <p className="text-muted-foreground">{chain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advertising Formats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Supermarket Advertising Formats</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Brands Choose Supermarket Advertising</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your Supermarket Campaign?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's major supermarket chains.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your supermarket brief <ArrowRight className="ml-2 h-5 w-5" />
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

export default SupermarketAdvertising;