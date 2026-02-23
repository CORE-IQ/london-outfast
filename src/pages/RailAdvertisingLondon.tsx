import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Train, 
  Users, 
  Clock, 
  Target, 
  TrendingUp, 
  CheckCircle,
  Monitor,
  Navigation,
  MapPin,
  Zap,
  BarChart3,
  ArrowRight,
  Building,
  Database
} from 'lucide-react';

const RailAdvertisingLondon = () => {
  const navigate = useNavigate();

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
          "name": "What formats are available for Rail Advertising London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Available formats include 6 Sheet Rail Panels, Digital Rail 6 Sheets, Station Billboards, Passenger Bridge Panels, Full Station Takeovers, and Rail Panel Takeovers."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Rail Advertising London cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary by station, format, duration, and seasonality. We provide transparent proposals showing the media owner rate and our commission separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can I target specific stations or commuter routes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use Route, Experian Mosaic, and Location Analyst data to plan by specific stations, lines, and catchment areas."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle production and posting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage artwork specification, media owner approvals, printing, and installation for all formats."
          }
        },
        {
          "@type": "Question",
          "name": "How is campaign performance measured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide proof of posting and post-campaign summaries. Where required, we model reach and frequency using Route data and can align to retail or site uplift."
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
      "name": "Rail Advertising London",
      "serviceType": "Rail, Overground, and Station Advertising",
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
        "audienceType": "Brands, agencies, and in-house teams"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rail Advertising Formats",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "6 Sheet Rail Panel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Rail 6 Sheet" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Station Billboard Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passenger Bridge Panel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Station Takeover" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rail Panel Takeover" } }
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
        { "@type": "ListItem", "position": 3, "name": "Rail Advertising London", "item": "https://mediabuyinglondon.co.uk/ooh/rail-advertising-london" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Clean up scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('Rail Advertising') || script.textContent?.includes('Rail, Overground')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Rail Advertising London – National Rail & Overground Campaigns | Media Buying London</title>
        <meta 
          name="description" 
          content="Target affluent commuter audiences with Rail Advertising across London's National Rail and Overground network. From 6 Sheet posters to full station takeovers, we deliver data-driven, transparent, and competitive campaigns."
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Train className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Rail Advertising London
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight px-2">
                Target affluent commuter audiences with National Rail & Overground campaigns
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                Rail Advertising London connects brands with high-value commuter audiences travelling into and across the capital. We plan, buy, and manage every format—from 6 Sheet panels to full station environments—backed by Route data, Experian Mosaic targeting, and transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
                >
                  Get Rail Quote
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/brief')}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 border-red-600/50 text-red-400 hover:bg-red-600/10 w-full sm:w-auto"
                >
                  Plan Campaign
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rail Advertising Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Rail Advertising London Works
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  With over 500 million annual passenger journeys across London's National Rail and Overground network, rail environments offer extended dwell times, high visibility, and repeated brand exposure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">High-Value Audiences</h3>
                    <p className="text-muted-foreground">
                      Target weekday commuters, weekend leisure travellers, and specific geographic routes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Extended Dwell Times</h3>
                    <p className="text-muted-foreground">
                      Rail environments provide longer exposure opportunities with captive audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Precision Targeting</h3>
                    <p className="text-muted-foreground">
                      Reach specific routes and demographics with data-driven planning.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Repeated Exposure</h3>
                    <p className="text-muted-foreground">
                      Daily commuter patterns ensure consistent brand visibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">High Visibility</h3>
                    <p className="text-muted-foreground">
                      Premium positioning in high-traffic station environments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Route data and audience analytics inform strategic placement decisions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Rail Advertising Formats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Popular Rail Advertising Formats
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">6 Sheet Rail Panels</h3>
                    <p className="text-muted-foreground">
                      Positioned along platforms, concourses, and entrances. Perfect for high-frequency messaging to commuter audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Digital Rail 6 Sheets (D6)</h3>
                    <p className="text-muted-foreground">
                      Dynamic, real-time content delivery with daypart targeting and weather triggers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Station Billboard Advertising</h3>
                    <p className="text-muted-foreground">
                      Commanding large-format roadside visibility at station approaches (48/96 Sheet).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Navigation className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Passenger Bridge Panels</h3>
                    <p className="text-muted-foreground">
                      Elevated visibility for both passengers and surrounding pedestrian or vehicle traffic.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Full Station Takeovers</h3>
                    <p className="text-muted-foreground">
                      Transform entire stations into immersive brand experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Rail Panel Takeovers</h3>
                    <p className="text-muted-foreground">
                      Multiple coordinated placements across a station or platform section.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Planning & Buying Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Planning & Buying Process</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    step: "1", 
                    title: "Brief Submission", 
                    desc: "Complete our Smart Quote Builder with your objectives, audience, and geography.",
                    icon: Target
                  },
                  { 
                    step: "2", 
                    title: "Data-Driven Planning", 
                    desc: "We apply Route, Experian Mosaic, and Location Analyst insights to match formats with audience behaviour.",
                    icon: Database
                  },
                  { 
                    step: "3", 
                    title: "Rate-Transparent Buying", 
                    desc: "The rate you pay is the rate we pay the media owner. Our commission is shown clearly on every invoice.",
                    icon: CheckCircle
                  },
                  { 
                    step: "4", 
                    title: "Delivery & Reporting", 
                    desc: "We handle production, approvals, posting, and supply proof-of-posting with post-campaign summaries.",
                    icon: BarChart3
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Audience-First Planning</h3>
                    <p className="text-muted-foreground">
                      Using verified industry datasets for strategic targeting.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Fast Turnarounds</h3>
                    <p className="text-muted-foreground">
                      From brief to booking with quick response times.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">No "Special Deal" Bias</h3>
                    <p className="text-muted-foreground">
                      We work for you, not the media owner.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">White-Label Capability</h3>
                    <p className="text-muted-foreground">
                      Ability to white-label for agencies and partners.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      Competitive, transparent pricing across all London rail formats.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Data-Driven Approach</h3>
                    <p className="text-muted-foreground">
                      Leveraging Route data and industry analytics for optimal planning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Plan Your Rail Advertising Campaign?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Speak to our planning team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-lg px-8 py-6"
                >
                  Submit Your Brief Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RailAdvertisingLondon;