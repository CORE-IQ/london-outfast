import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Target, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Phone,
  ChevronRight,
  Zap,
  Eye,
  Clock
} from 'lucide-react';

const DigitalOOH = () => {
  useEffect(() => {
    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Digital Out-of-Home advertising?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Out-of-Home (DOOH) uses dynamic, high-resolution screens across London — including roadside billboards, Adshel Live bus shelters, and Underground/rail inventory — to deliver data-driven, real-time campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Digital OOH over static formats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital OOH enables dayparting, weather/event triggers, fast creative swaps and programmatic buying. It offers flexibility and contextual relevance that static formats can't match."
          }
        },
        {
          "@type": "Question",
          "name": "Can you run programmatic DOOH campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We activate programmatic DOOH with audience targeting and live triggers (time, location, weather), with transparent reporting and optimisation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Digital OOH cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing varies by format, location and duration. We provide transparent proposals showing the media owner rate and our commission separately."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Add Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AdvertisingService",
      "name": "Digital OOH London",
      "serviceType": "Digital Out-of-Home Advertising",
      "category": "Out-of-Home Advertising",
      "provider": {
        "@type": "Organization",
        "name": "Media Buying London",
        "url": "https://mediabuyinglondon.co.uk",
        "logo": "https://mediabuyinglondon.co.uk/favicon.png"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater London"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Brands, agencies and in-house teams"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital OOH Formats",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital 48 Sheet (D48)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mega 6 Roadside" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adshel Live Digital Bus Shelters" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Escalator Panels (DEPs)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopping Centre Digital Screens" } }
        ]
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(serviceScript);

    // Add Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mediabuyinglondon.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "OOH", "item": "https://mediabuyinglondon.co.uk/ooh" },
        { "@type": "ListItem", "position": 3, "name": "Digital OOH London", "item": "https://mediabuyinglondon.co.uk/ooh/digital-ooh" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Clean up scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('Digital OOH') || script.textContent?.includes('DOOH')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital OOH London | Programmatic DOOH Campaign Planning</title>
        <meta name="description" content="Dynamic, data-driven outdoor advertising across London's premium digital screens. D48, Mega 6, digital bus shelters, and programmatic DOOH with real-time targeting." />
        <meta name="keywords" content="digital ooh london, programmatic dooh, D48, mega 6, digital bus shelters, underground digital, london digital advertising" />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Monitor className="w-4 h-4 mr-2" />
                Digital OOH London
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
                Digital OOH London
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong className="text-foreground">Dynamic, data-driven outdoor advertising</strong> across London's most premium locations.
              </p>

              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Digital Out-of-Home (DOOH) transforms the city into a dynamic network of premium screens that can react in real time to your audience. From roadside D48 billboards on major commuter arteries to Mega 6 formats at high-traffic junctions, Digital Bus Shelters in retail hotspots, and immersive Digital Escalator Panels in the Underground, we deliver campaigns that combine reach, precision, and flexibility.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                With programmatic DOOH, we can activate creative based on live triggers — weather, time of day, events, or location — ensuring your message lands exactly when and where it matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8 py-6 text-lg">
                  <Link to="/brief">
                    Start Your Digital Campaign
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                  <Link to="/brief">
                    Smart Quote Builder
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
          
          {/* Why Digital OOH Works */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Advantages
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Digital OOH in London Works</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Real-Time Updates",
                  description: "Change creative instantly to match events, sales, or promotions."
                },
                {
                  icon: Target,
                  title: "Data-Driven Targeting",
                  description: "Target by location, audience profile, and behavioural triggers."
                },
                {
                  icon: MapPin,
                  title: "Premium Placement",
                  description: "Access to London's busiest roads, stations, and shopping areas."
                },
                {
                  icon: Eye,
                  title: "Creative Impact",
                  description: "Motion graphics, high-definition imagery, and sequential storytelling."
                }
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Core Digital OOH Formats */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Monitor className="w-4 h-4 mr-2" />
                Digital Formats
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Digital OOH Formats We Deliver</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All available through Media Buying London's direct rate network with real-time pricing.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Roadside Digital Billboards */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-primary" />
                    </div>
                    Roadside Digital Billboards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Digital 48 Sheet (D48)",
                      description: "Iconic 6m x 3m screens in prime London roadside locations."
                    },
                    {
                      name: "Mega 6 (M6)",
                      description: "8m x 3m super-premium digital sites dominating key junctions."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Street-Level Digital */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    Street-Level Digital
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Adshel Live",
                      description: "Digital bus shelters with dynamic content and targeting options."
                    },
                    {
                      name: "Digital Phone Box Advertising",
                      description: "Modernised street furniture with location-based content delivery."
                    },
                    {
                      name: "Lamp Post Banner Digital Panels",
                      description: "Available in certain boroughs for hyper-local targeting."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Transport Digital */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    Transport Digital
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Digital Escalator Panels (DEPs)",
                      description: "Sequential animated panels along Underground escalators."
                    },
                    {
                      name: "Cross Track Projection (XTP)",
                      description: "Platform-level motion content across the Underground."
                    },
                    {
                      name: "Digital 6 Sheet Tube Panels",
                      description: "Entrances, concourses, and platforms."
                    },
                    {
                      name: "Digital Rail 6 Sheet",
                      description: "Commuter rail station inventory across Greater London."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Retail & Lifestyle Digital */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    Retail & Lifestyle Digital
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Shopping Centre Screens",
                      description: "Westfield and other retail hubs with high dwell times."
                    },
                    {
                      name: "Digital Gateway Screens",
                      description: "Entrance and exit screens at key rail hubs."
                    }
                  ].map((format, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{format.name}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Programmatic DOOH & Campaign Environments */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Programmatic DOOH */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  Programmatic DOOH (pDOOH)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  We integrate with all major programmatic platforms, enabling:
                </p>
                {[
                  "Audience-first planning.",
                  "Trigger-based activation (e.g., sunny weather for summer drinks).",
                  "Live creative swaps.",
                  "Real-time performance reporting."
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Campaign Environments */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Campaign Environments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    environment: "Roadside & Commuter Routes",
                    description: "D48s and Mega 6 at the heart of daily travel flows."
                  },
                  {
                    environment: "Retail & Shopping Districts",
                    description: "High-impact, purchase-ready audiences."
                  },
                  {
                    environment: "Transport Hubs",
                    description: "London Underground, National Rail, and airports."
                  },
                  {
                    environment: "Event-Led Spaces",
                    description: "Sites surrounding sports stadiums, concerts, and cultural events."
                  }
                ].map((env, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{env.environment}</h4>
                      <p className="text-sm text-muted-foreground">{env.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Smart Quote Builder Section */}
          <section>
            <Card className="border-border/50 bg-gradient-to-br from-muted/30 to-muted/50">
              <CardContent className="py-12 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Smart Quote Builder
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Search formats, configure your campaign, and get real-time pricing direct from London's leading media owners — no mark-ups, no middlemen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="px-8 py-6 text-lg">
                    <Link to="/outdoor-media">
                      Search Formats
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                    <Link to="/brief">
                      Configure Campaign
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                    <Link to="/brief">
                      Get Pricing
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Choose Media Buying London */}
          <section>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Our Advantage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Media Buying London</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Direct Rate Access",
                  description: "We work direct with London's leading media owners to secure the lowest cost."
                },
                {
                  title: "Same-Day Quotes",
                  description: "Transparent pricing without the wait."
                },
                {
                  title: "Specialist Focus",
                  description: "100% dedicated to London OOH buying."
                },
                {
                  title: "Pilot-Proven Results",
                  description: "Our London campaigns have already delivered measurable ROI for global brands."
                }
              ].map((advantage, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="border-border/50 bg-gradient-to-br from-muted/30 to-muted/50">
              <CardContent className="py-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Start your Digital OOH campaign today
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Submit your brief or call us to unlock London's premium digital inventory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="px-8 py-6 text-lg">
                    <Link to="/brief">
                      Submit Your Brief
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                    <a href="tel:+442045243019">
                      <Phone className="w-5 h-5 mr-2" />
                      Call +44 204 524 3019
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </>
  );
};

export default DigitalOOH;