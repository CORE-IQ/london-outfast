import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Building, 
  Camera, 
  TrendingUp, 
  ArrowRight,
  Monitor,
  Target,
  Share2,
  Layers,
  Star,
  Users,
  MapPin
} from "lucide-react";

const ProjectionMappingAdvertising = () => {
  useEffect(() => {
    // Inject Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Projection Mapping Advertising London",
      "description": "Projection mapping advertising in London transforms iconic buildings and landmarks into dynamic brand canvases using high-powered projectors and 3D animation.",
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
        "Projection Mapping",
        "3D Building Projection",
        "Landmark Projection Advertising",
        "Experiential Outdoor Advertising"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://mediabuyinglondon.co.uk/ooh/projection-mapping-advertising",
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

  const projectionFeatures = [
    {
      icon: Zap,
      title: "Dynamic",
      description: "your creative is in constant motion"
    },
    {
      icon: Share2,
      title: "Shareable",
      description: "built for social media virality"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "from single-building takeovers to multi-site city rollouts"
    }
  ];

  const projectionOpportunities = [
    {
      icon: Building,
      title: "Iconic Landmark Takeovers",
      description: "Tower of London, The Shard, Tate Modern, Natural History Museum. Best for major brand statements and global PR coverage."
    },
    {
      icon: Star,
      title: "Cultural & Event Venue Activations",
      description: "Royal Albert Hall, O2 Arena, Somerset House. Tied to music events, exhibitions, and cultural festivals."
    },
    {
      icon: Users,
      title: "Experiential Pop-Ups",
      description: "Temporary structures, retail pop-ups, and product launch events. Combine with live performances or sampling for maximum impact."
    },
    {
      icon: Layers,
      title: "Multi-Building City Projections",
      description: "Synchronous displays across several London locations for simultaneous brand dominance."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Guaranteed attention",
      description: "turns passive audiences into active participants"
    },
    {
      icon: Monitor,
      title: "Flexible storytelling",
      description: "update or adapt content live during an event"
    },
    {
      icon: Star,
      title: "Premium positioning",
      description: "associated with innovation and prestige"
    },
    {
      icon: Share2,
      title: "PR & social reach",
      description: "campaigns often go viral, multiplying ROI"
    }
  ];

  const faqs = [
    {
      question: "Do we need permission for projection mapping in London?",
      answer: "Yes — permissions vary depending on location and council jurisdiction. We handle all logistics and permits."
    },
    {
      question: "Can projection mapping be combined with other OOH formats?",
      answer: "Absolutely — it's often paired with experiential activations, street furniture, and programmatic DOOH."
    },
    {
      question: "What's the ideal campaign duration?",
      answer: "Ranges from single-night spectacles to multi-week runs, depending on objectives."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projection Mapping Advertising London | 3D Building Projections & Landmark Takeovers</title>
        <meta 
          name="description" 
          content="Projection mapping advertising in London. Transform iconic buildings into dynamic brand canvases. Tower of London, The Shard, Tate Modern projections. Get quote today." 
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/80 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Projection Mapping Advertising London
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Projection mapping turns London's iconic architecture into dynamic brand canvases. Using cutting-edge technology, we transform buildings, landmarks, and event spaces into immersive visual experiences that captivate audiences and generate maximum buzz.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                From the Tower of London to Southbank's modern facades, projection mapping delivers unmissable brand theatre that stops people in their tracks — perfect for product launches, seasonal campaigns, and major cultural moments.
              </p>
            </div>
          </div>
        </section>

        {/* What is Projection Mapping */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What is Projection Mapping Advertising?</h2>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Projection mapping uses high-powered projectors and 3D software to align visuals perfectly with the surfaces of real-world structures. This creates mind-bending animations and motion graphics that appear to interact with the building itself.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Unlike standard billboards, projection mapping is:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {projectionFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* London Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">London Projection Mapping Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projectionOpportunities.map((opportunity, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <opportunity.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground">{opportunity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Brands Choose Projection Mapping in London</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform London's Skyline?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert advice and competitive pricing for London's most innovative outdoor advertising format.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/brief">
                Send us your projection mapping brief <ArrowRight className="ml-2 h-5 w-5" />
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

export default ProjectionMappingAdvertising;