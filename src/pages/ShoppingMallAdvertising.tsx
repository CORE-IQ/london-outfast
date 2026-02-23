import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Target, 
  Clock, 
  Users, 
  Calendar,
  ArrowRight,
  MapPin,
  Zap,
  Eye,
  TrendingUp,
  Gift
} from "lucide-react";

const ShoppingMallAdvertising = () => {
  useEffect(() => {
    // Inject FAQ Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which shopping malls can I advertise in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Major locations include Westfield London, Westfield Stratford City, Brent Cross, Canary Wharf, and regional shopping centres across London's boroughs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I run both digital and static formats in the same campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — many brands combine static and digital placements for maximum reach and recall."
          }
        },
        {
          "@type": "Question",
          "name": "Are experiential activations allowed inside shopping malls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — subject to the mall's event policy, we can arrange pop-ups, sampling stands, and brand experiences."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need separate permissions for each mall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle all media owner negotiations and permissions on your behalf."
          }
        },
        {
          "@type": "Question",
          "name": "Can I target specific audience types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — using Experian Mosaic and Route data, we can match your campaign to malls with the highest concentration of your target audience."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const formatDetails = [
    {
      icon: Zap,
      title: "Digital Screens (D6, D48, LFD)",
      description: "Dynamic messaging with real-time updates and daypart targeting"
    },
    {
      icon: Eye,
      title: "Static Posters",
      description: "6-sheet, 4-sheet, and bespoke formats"
    },
    {
      icon: TrendingUp,
      title: "Atrium & Escalator Wraps",
      description: "Large-format branding in premium, high-visibility locations"
    },
    {
      icon: MapPin,
      title: "Lift & Door Vinyls",
      description: "Perfect for immersive, brand-takeover experiences"
    },
    {
      icon: Users,
      title: "Experiential Zones",
      description: "Pop-up stands, sampling, and live activations"
    },
    {
      icon: Gift,
      title: "Full Centre Takeovers",
      description: "Transform the entire mall environment for maximum brand presence"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Target Purchase-Ready Audiences",
      description: "Reach consumers moments before purchase decisions"
    },
    {
      icon: TrendingUp,
      title: "Premium Environment",
      description: "Align your brand with high-value retail destinations"
    },
    {
      icon: Clock,
      title: "High Dwell Time",
      description: "Extended audience engagement compared to roadside formats"
    },
    {
      icon: Eye,
      title: "Multiple Touchpoints",
      description: "Static, digital, experiential, and environmental options"
    },
    {
      icon: Calendar,
      title: "Seasonal & Event Opportunities",
      description: "Black Friday, Christmas, and school holidays drive peak exposure"
    }
  ];

  const faqs = [
    {
      question: "Which shopping malls can I advertise in London?",
      answer: "Major locations include Westfield London, Westfield Stratford City, Brent Cross, Canary Wharf, and regional shopping centres across London's boroughs."
    },
    {
      question: "Can I run both digital and static formats in the same campaign?",
      answer: "Yes — many brands combine static and digital placements for maximum reach and recall."
    },
    {
      question: "Are experiential activations allowed inside shopping malls?",
      answer: "Yes — subject to the mall's event policy, we can arrange pop-ups, sampling stands, and brand experiences."
    },
    {
      question: "Do I need separate permissions for each mall?",
      answer: "We handle all media owner negotiations and permissions on your behalf."
    },
    {
      question: "Can I target specific audience types?",
      answer: "Yes — using Experian Mosaic and Route data, we can match your campaign to malls with the highest concentration of your target audience."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shopping Mall Advertising London | Premium Retail OOH Media</title>
        <meta 
          name="description" 
          content="Shopping mall advertising in London's premium retail destinations. Target purchase-ready audiences at Westfield, Brent Cross, Canary Wharf, and more. Get quote today." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Shopping Mall Advertising London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Shopping mall advertising places your brand directly in front of purchase-ready audiences in London's busiest retail environments. With high dwell times, premium retail settings, and footfall reaching tens of millions per year, malls provide one of the most valuable OOH environments for consumer engagement.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                In London, you can target audiences in iconic retail destinations such as Westfield London, Westfield Stratford City, Brent Cross, and Canary Wharf, as well as high-footfall shopping centres across all 32 boroughs. Whether your goal is brand awareness, product launches, or retail sales uplift, mall advertising delivers high-impact visibility at the point of purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Format Details */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Format Details</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {formatDetails.map((format, index) => (
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Shopping Mall Advertising?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Launch Your Shopping Mall Campaign?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's premium retail environments.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your shopping mall brief <ArrowRight className="ml-2 h-5 w-5" />
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

export default ShoppingMallAdvertising;