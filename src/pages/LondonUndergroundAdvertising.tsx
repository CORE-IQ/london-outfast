import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';

const LondonUndergroundAdvertising = () => {
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
          "name": "What London Underground formats are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key formats include 6 Sheet Underground panels, 16 Sheet corridor panels, Digital Escalator Panels (DEP), Cross Track Projections (XTP), full station takeovers, train wraps and in-carriage panels."
          }
        },
        {
          "@type": "Question",
          "name": "How much does London Underground advertising cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs depend on format, station, line, seasonality and duration. We provide transparent proposals showing the media owner rate and our commission separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can we target specific lines or stations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We plan by station, line and journey stage using Route data, Experian Mosaic and location analytics to match audience and objectives."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle TfL approvals, production and installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage artwork specs, TfL approvals, print and installation across static and digital formats."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We supply proof of posting and post-campaign summaries. Where required, we model reach and frequency using industry datasets and can align to retail or site uplift."
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
      "name": "London Underground Advertising",
      "serviceType": "Transport and Station Advertising",
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
        "name": "London Underground Formats",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "6 Sheet Underground Panel (LT Panel)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "16 Sheet Corridor Panel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Escalator Panel (DEP)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross Track Projection (XTP)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Station Takeover" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Train Wraps & In-Carriage Panels" } }
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
        { "@type": "ListItem", "position": 3, "name": "London Underground Advertising", "item": "https://mediabuyinglondon.co.uk/ooh/london-underground" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Clean up scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('London Underground') || script.textContent?.includes('Underground Advertising')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>London Underground Advertising | Premium Transport OOH | Media Buying London</title>
        <meta 
          name="description" 
          content="Command attention inside London's iconic transport network. 4+ million daily passengers across 270+ stations. Expert planning, strategic placement, proven ROI."
        />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-red-600/20 text-red-400 border-red-600/30">
                <Train className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                London Underground Advertising
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-4 sm:mb-6 leading-tight px-2">
                Command attention inside one of the world's busiest and most iconic transport networks.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                The London Underground moves more than 4 million passengers every day across 270+ stations, making it one of the most valuable out-of-home advertising environments in the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/brief')}
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 lg:py-6 bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
                >
                  Get Underground Quote
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

        {/* Why Underground Works */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2">
                  Why London Underground Advertising Works
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                  From high-frequency commuter corridors to tourist-heavy interchange hubs, Underground advertising delivers unmatched reach, dwell time, and audience targeting potential.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Massive Daily Footfall</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Millions of passengers across all demographics, 7 days a week.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">High Dwell Time</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Commuters spend extended time on platforms and trains, giving campaigns more opportunity to land.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Targeted Delivery</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Focus on specific lines, zones, or stations to reach precise audience segments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Multi-Format Reach</h3>
                    <p className="text-muted-foreground">
                      Combine static and digital placements for layered brand storytelling.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Proven ROI</h3>
                    <p className="text-muted-foreground">
                      Consistently drives high recall and response rates for brand and direct-response campaigns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">City-Wide Reach</h3>
                    <p className="text-muted-foreground">
                      Achieve awareness, targeted impact, or full station domination with strategic placement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Formats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Key London Underground Advertising Formats
                </h2>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    Station Environments
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">16-Sheet Underground Corridors</h4>
                        <p className="text-muted-foreground">
                          Positioned along high-traffic walkways for repeated impressions.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">6-Sheet Underground Panels (LT Panels)</h4>
                        <p className="text-muted-foreground">
                          Located at entrances, exits, and key decision points.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">Full Station Takeovers</h4>
                        <p className="text-muted-foreground">
                          Transform an entire station environment into a complete brand experience.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">Cross Track Projection (XTP)</h4>
                        <p className="text-muted-foreground">
                          Premium digital formats visible from platforms, ideal for dwell-time engagement.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">Digital Escalator Panels (DEP)</h4>
                        <p className="text-muted-foreground">
                          Sequential animated displays along escalators for immersive impact.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Train className="w-6 h-6 text-primary mr-3" />
                    In-Carriage & Train Advertising
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">Train Wraps</h4>
                        <p className="text-muted-foreground">
                          Full exterior branding for maximum moving visibility across the network.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3">Carriage Panels</h4>
                        <p className="text-muted-foreground">
                          Interior advertising positioned above windows, on doors, and within passenger eyeline.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative & Campaign Enhancements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Creative & Campaign Enhancements
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Dynamic Digital Content</h3>
                    <p className="text-muted-foreground">
                      Integrate dayparting, weather triggers, and live updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Geo-Targeted Messaging</h3>
                    <p className="text-muted-foreground">
                      Adapt creative to specific station locations or journey stages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Navigation className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Sequential Storytelling</h3>
                    <p className="text-muted-foreground">
                      Build narrative engagement across multiple passenger touchpoints.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who Uses Underground Advertising */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who Uses London Underground Advertising?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Consumer Brands</h3>
                    <p className="text-muted-foreground">
                      For large-scale awareness campaigns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Entertainment & Media</h3>
                    <p className="text-muted-foreground">
                      Driving attendance for events, streaming launches, and film releases.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Finance & Technology</h3>
                    <p className="text-muted-foreground">
                      Positioning for trust, visibility, and market leadership.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Retail & Hospitality</h3>
                    <p className="text-muted-foreground">
                      Capturing audiences in close proximity to purchase points.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* London Underground Lines & Stations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Strategic Line Selection for Maximum Impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Each London Underground line offers unique passenger demographics and journey patterns. Our data-driven approach ensures your campaign reaches the right audience at the optimal touchpoints.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-600">Central Line</h3>
                    <p className="text-muted-foreground mb-4">
                      London's busiest line connecting Liverpool Street, Oxford Circus, and Notting Hill Gate. Ideal for reaching business professionals and shoppers.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 1.85 million daily passengers</li>
                      <li>• Key stations: Oxford Circus, Liverpool Street, Bank</li>
                      <li>• Prime for retail and financial services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-yellow-600">Circle & District Lines</h3>
                    <p className="text-muted-foreground mb-4">
                      Serving major tourist destinations and business districts. Perfect for hospitality, entertainment, and luxury brands.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High tourist footfall year-round</li>
                      <li>• Westminster, Victoria, King's Cross connections</li>
                      <li>• Excellent for brand awareness campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-red-600">Northern Line</h3>
                    <p className="text-muted-foreground mb-4">
                      Connecting affluent residential areas with business districts. Ideal for financial services, property, and premium consumer brands.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-income passenger demographic</li>
                      <li>• Canary Wharf, London Bridge, Camden connections</li>
                      <li>• Excellent morning/evening commuter reach</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-600">Piccadilly Line</h3>
                    <p className="text-muted-foreground mb-4">
                      Direct Heathrow connection brings international passengers through central London. Perfect for travel, luxury, and destination marketing.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• International traveller gateway</li>
                      <li>• Heathrow Airport direct connection</li>
                      <li>• Leicester Square, Covent Garden tourist hotspots</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Jubilee Line</h3>
                    <p className="text-muted-foreground mb-4">
                      Modern line connecting Canary Wharf financial district with West End entertainment zone. High-value passenger demographic.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Canary Wharf business district</li>
                      <li>• Westminster, London Bridge interchange</li>
                      <li>• Premium passenger spending power</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-pink-600">Elizabeth Line</h3>
                    <p className="text-muted-foreground mb-4">
                      London's newest and most technologically advanced line. Premium environment with affluent cross-London commuters.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• State-of-the-art digital capabilities</li>
                      <li>• High-income passenger profile</li>
                      <li>• Heathrow to City direct connection</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Underground Advertising Costs & ROI */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  London Underground Advertising Costs & ROI
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding the investment required and returns delivered by Underground advertising helps optimise campaign planning and budget allocation across different formats and locations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Cost Factors</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Station Classification</h4>
                        <p className="text-muted-foreground">
                          Zone 1 stations command premium rates due to highest footfall and tourist traffic. Zones 2-6 offer cost-effective reach for targeted demographics.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Seasonal Demand</h4>
                        <p className="text-muted-foreground">
                          Peak periods (January-March, September-November) see increased rates. Summer months offer better value with sustained tourist traffic.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Campaign Duration</h4>
                        <p className="text-muted-foreground">
                          Longer campaigns (4+ weeks) typically secure better rates. Minimum bookings usually start at 2-week periods for maximum impact.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">ROI Metrics</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Brand Recall</h4>
                        <p className="text-muted-foreground">
                          Underground advertising typically achieves 35-45% aided brand recall, significantly higher than many other OOH formats due to extended dwell times.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Reach & Frequency</h4>
                        <p className="text-muted-foreground">
                          Strategic station selection can achieve 70%+ London adult reach with optimal frequency for message retention and action.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Digital Integration</h4>
                        <p className="text-muted-foreground">
                          QR codes and digital call-to-actions see 15-25% higher engagement rates in Underground environments compared to street-level OOH.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies & Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  London Underground Advertising Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real campaigns that demonstrate the power of strategic Underground advertising across different sectors and objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <Badge className="mb-4">Financial Services</Badge>
                    <h3 className="text-xl font-bold mb-4">Digital Banking Campaign</h3>
                    <p className="text-muted-foreground mb-4">
                      A challenger bank used targeted Northern Line placements during morning peak hours to reach high-earning commuters travelling between Canary Wharf and the City.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Campaign Duration:</span>
                        <span className="font-semibold">6 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">Digital Escalator Panels</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Brand Recall Lift:</span>
                        <span className="font-semibold text-green-600">+42%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Account Openings:</span>
                        <span className="font-semibold text-green-600">+156%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Badge className="mb-4">Entertainment</Badge>
                    <h3 className="text-xl font-bold mb-4">West End Show Launch</h3>
                    <p className="text-muted-foreground mb-4">
                      A major theatre production used full station takeovers at tourist-heavy stations on the Piccadilly and Central lines to drive ticket sales.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Campaign Duration:</span>
                        <span className="font-semibold">4 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">Station Takeovers</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ticket Sales Increase:</span>
                        <span className="font-semibold text-green-600">+89%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tourist Bookings:</span>
                        <span className="font-semibold text-green-600">+134%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Badge className="mb-4">Technology</Badge>
                    <h3 className="text-xl font-bold mb-4">App Launch Campaign</h3>
                    <p className="text-muted-foreground mb-4">
                      A tech startup combined Cross Track Projections with QR codes to drive app downloads, targeting key interchange stations for maximum exposure.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Campaign Duration:</span>
                        <span className="font-semibold">8 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">XTP + QR Integration</span>
                      </div>
                      <div className="flex justify-between">
                        <span>App Downloads:</span>
                        <span className="font-semibold text-green-600">47,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Per Download:</span>
                        <span className="font-semibold text-green-600">£2.80</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Badge className="mb-4">Retail</Badge>
                    <h3 className="text-xl font-bold mb-4">Fashion Brand Awareness</h3>
                    <p className="text-muted-foreground mb-4">
                      A premium fashion retailer used sequential storytelling across multiple Oxford Street area stations to build brand narrative and drive store visits.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Campaign Duration:</span>
                        <span className="font-semibold">12 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">16-Sheet Corridors</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Store Footfall:</span>
                        <span className="font-semibold text-green-600">+67%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purchase Intent:</span>
                        <span className="font-semibold text-green-600">+91%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Planning & Strategy Deep Dive */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Strategic Underground Advertising Planning
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Successful Underground campaigns require detailed planning across audience insights, journey mapping, creative optimisation, and performance measurement.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Audience Intelligence</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Demographic Profiling</h4>
                      <p className="text-muted-foreground mb-4">
                        We analyse TfL passenger data, PAMCO insights, and Experian Mosaic classifications to understand who travels where and when. This includes age, income, lifestyle, and consumption patterns by line and station.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Real-time passenger flow analytics</li>
                        <li>• Cross-referenced lifestyle and spending data</li>
                        <li>• Seasonal variation analysis</li>
                        <li>• Peak vs off-peak demographic shifts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Journey Pattern Mapping</h4>
                      <p className="text-muted-foreground mb-4">
                        Understanding how passengers move through the network helps optimise placement for maximum exposure and message sequencing opportunities.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Origin-destination flow analysis</li>
                        <li>• Interchange behaviour patterns</li>
                        <li>• Dwell time optimisation by location</li>
                        <li>• Multi-touchpoint journey orchestration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Creative Optimisation</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Environment-Specific Design</h4>
                      <p className="text-muted-foreground mb-4">
                        Underground environments require specific creative considerations for lighting, viewing angles, movement patterns, and attention capture in busy surroundings.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• High contrast design for tunnel lighting</li>
                        <li>• Motion graphics optimised for escalator viewing</li>
                        <li>• Clear typography for platform sight lines</li>
                        <li>• Brand safety in crowded environments</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Message Hierarchy</h4>
                      <p className="text-muted-foreground mb-4">
                        Structuring campaign messages across different touchpoints to build narrative and drive action throughout the passenger journey.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Awareness messaging at entry points</li>
                        <li>• Consideration drivers during dwell time</li>
                        <li>• Conversion prompts at exit points</li>
                        <li>• Follow-up sequencing for repeat journeys</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Technical Specifications & Production Requirements
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Ensuring your creative assets meet TfL requirements and are optimised for each Underground advertising format.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Static Formats</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">6-Sheet Underground:</span>
                        <p className="text-muted-foreground">1200mm x 1800mm, 300 DPI, CMYK + 2 Spot</p>
                      </div>
                      <div>
                        <span className="font-semibold">16-Sheet Corridor:</span>
                        <p className="text-muted-foreground">2032mm x 3048mm, 150 DPI minimum</p>
                      </div>
                      <div>
                        <span className="font-semibold">Production Lead Time:</span>
                        <p className="text-muted-foreground">5-7 working days post-approval</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Digital Formats</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">Cross Track Projection:</span>
                        <p className="text-muted-foreground">1920x1080 MP4, 10-15 second loops</p>
                      </div>
                      <div>
                        <span className="font-semibold">Escalator Panels:</span>
                        <p className="text-muted-foreground">Portrait orientation, sequential playback</p>
                      </div>
                      <div>
                        <span className="font-semibold">Content Updates:</span>
                        <p className="text-muted-foreground">72-hour minimum notice required</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Approval Process</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">TfL Creative Review:</span>
                        <p className="text-muted-foreground">3-5 working days assessment period</p>
                      </div>
                      <div>
                        <span className="font-semibold">ASA Compliance:</span>
                        <p className="text-muted-foreground">All content must meet advertising standards</p>
                      </div>
                      <div>
                        <span className="font-semibold">Safety Requirements:</span>
                        <p className="text-muted-foreground">No flashing content, accessibility compliant</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our London Underground Advertising Process</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From initial strategy through to campaign measurement, we manage every aspect of your Underground advertising investment with precision and transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { 
                    step: "1", 
                    title: "Strategic Planning", 
                    desc: "Comprehensive audience mapping, line selection, and location strategy based on your objectives and target demographics." 
                  },
                  { 
                    step: "2", 
                    title: "Format Selection", 
                    desc: "Choosing optimal format combinations for maximum impact within budget, considering reach, frequency, and creative opportunities." 
                  },
                  { 
                    step: "3", 
                    title: "Creative Development", 
                    desc: "Optimising creative assets for Underground environments, TfL compliance, and technical specifications across all chosen formats." 
                  },
                  { 
                    step: "4", 
                    title: "Media Booking", 
                    desc: "Securing premium inventory at competitive rates through established media owner relationships and transparent pricing structures." 
                  },
                  { 
                    step: "5", 
                    title: "Performance Analysis", 
                    desc: "Comprehensive reporting including reach, frequency, brand lift studies, and campaign ROI analysis with actionable insights." 
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get your brand inside the network that moves London.
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Learn more about <Link to="/blog/tube-advertising-london" className="underline hover:no-underline">london underground advertising strategies</Link> in our comprehensive guide.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/brief')}
                className="text-lg px-8 py-6"
              >
                Request a London Underground Advertising Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LondonUndergroundAdvertising;