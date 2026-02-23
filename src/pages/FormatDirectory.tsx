import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCentralizedMediaFormats } from "@/hooks/useCentralizedMediaFormats";
import { useMediaFormatsContext } from "@/components/providers/MediaFormatsProvider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FormatDirectory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { mediaFormats, loading, refetch } = useCentralizedMediaFormats();
  const { mediaFormats: ctxFormats, service } = useMediaFormatsContext();

  // Robust format loading with multiple fallbacks
  const combinedFormats = mediaFormats.length ? mediaFormats : ctxFormats;
  
  useEffect(() => {
    let mounted = true;
    
    const loadFormats = async () => {
      try {
        await refetch();
        
        // If still no formats after refetch, try service directly
        if (mounted && combinedFormats.length === 0) {
          await service.fetchFormats(false);
        }
      } catch (error) {
        console.error('Format loading error:', error);
        // Silent fallback - component will show "no formats" state
      }
    };
    
    loadFormats();
    
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Get unique format categories from CMS categories
  const categories = Array.from(
    new Set(
      combinedFormats.flatMap((format) => format.categories?.location ?? [])
    )
  ).filter(Boolean).sort();
  
  const filteredFormats = combinedFormats.filter((format) => {
    const q = searchTerm.toLowerCase();
    const nameMatch = format.format_name.toLowerCase().includes(q);
    const descMatch = (format.description || '').toLowerCase().includes(q);
    const categoryTexts = [
      ...(format.categories?.format ?? []),
      ...(format.categories?.location ?? []),
    ].map((c) => c.toLowerCase());
    const categorySearchMatch = q ? categoryTexts.some((c) => c.includes(q)) : true;
    const matchesSearch = nameMatch || descMatch || categorySearchMatch;

    const matchesCategory =
      selectedCategory === 'all' || (format.categories?.format ?? []).includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });
  
  const handleFormatClick = (slug: string) => {
    navigate(`/outdoor-media/${slug}`);
  };

  const handleGetStarted = () => {
    navigate("/brief");
  };

  return (
    <>
      <Helmet>
        <title>Outdoor Media Buying London | OOH Advertising Briefs & Campaign Planning</title>
        <meta name="description" content="Outdoor media buying in London with instant brief submissions and a dedicated client portal. Access all OOH channels and receive a full media schedule with precise locations." />
        {/* Canonical managed by SchemaManager */}
        <meta name="robots" content="index,follow" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            OOH FORMAT DIRECTORY
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Outdoor Media Buying in London – Brief Submission & Campaign Planning
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Outdoor media buying in London requires speed, precision, and clear campaign planning. This brief submission hub provides instant access to rates and availability across every major OOH format — from high-impact roadside billboards to targeted street-level displays. Once confirmed, campaigns are delivered with detailed media schedules, precise site locations, and full transparency through the client portal.
          </p>
          <div className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3">Key Benefits</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</span>
                    <span><strong>One-Stop Access</strong> – All major London OOH formats and locations in one place.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</span>
                    <span><strong>Instant Briefs</strong> – Submit requests fast without multiple supplier calls.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</span>
                    <span><strong>Competitive Pricing</strong> – Direct buying power means cost savings on premium placements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">4</span>
                    <span><strong>Campaign Support</strong> – From brief to live campaign tracking, every detail is handled.</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Available Channels</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Billboards (48-Sheet & Digital-48)</strong> – Dominant roadside coverage.</li>
                  <li><strong>Premium Digital Screens</strong> – High-footfall retail and leisure sites.</li>
                  <li><strong>Street-Level Panels</strong> – Target pedestrians in key boroughs.</li>
                  <li><strong>Building Wraps & Landmarks</strong> – Large-format visibility in high-traffic areas.</li>
                  <li><strong>Special Builds & Experiential</strong> – Creative installations for maximum impact.</li>
                </ul>
              </div>
            </div>
          </div>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-primary hover:opacity-90">
            Submit Brief Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search formats, categories, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              Showing {filteredFormats.length} of {combinedFormats.length} formats
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && combinedFormats.length === 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-4">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-muted-foreground">Loading outdoor media formats...</p>
            </div>
          </div>
        </section>
      )}
      
      {/* Format Grid */}
      {!loading || combinedFormats.length > 0 ? (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormats.map((format) => (
              <Card key={format.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => handleFormatClick(format.format_slug)}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {format.dimensions || 'Various Sizes'}
                    </Badge>
                    <Badge variant="secondary">
                      OOH Format
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {format.format_name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {format.description || 'Professional outdoor advertising format available across London.'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {format.dimensions && (
                      <div className="text-xs">
                        <span className="font-medium">Size:</span> {format.dimensions}
                      </div>
                    )}
                    <div className="text-xs">
                      <span className="font-medium">Format:</span> {format.format_name}
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Status:</span> {format.is_active ? 'Available' : 'Unavailable'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={`/outdoor-media/${format.format_slug}`}>
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
            
            {filteredFormats.length === 0 && !loading && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">
                  {combinedFormats.length === 0 ? 'No formats available' : 'No formats found'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {combinedFormats.length === 0 
                    ? 'Please check back later or contact support.' 
                    : 'Try adjusting your search terms or filter criteria'
                  }
                </p>
                {combinedFormats.length > 0 && (
                  <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                    Clear Filters
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial quote to campaign delivery, our streamlined process ensures precision and transparency at every step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Select Your Formats</h3>
                <p className="text-sm text-muted-foreground">Choose preferred channels and locations from the quoting tool.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Submit Your Campaign Brief</h3>
                <p className="text-sm text-muted-foreground">Provide objectives, timelines, and budget.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Receive a Full Media Schedule</h3>
                <p className="text-sm text-muted-foreground">Delivered via the client portal with precise site addresses, format specifications, and campaign details.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Approve & Launch</h3>
                <p className="text-sm text-muted-foreground">Confirm your plan and track delivery progress through the portal.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Examples */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campaign Examples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our clients leverage London's outdoor media landscape for maximum impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Citywide Retail Awareness</h3>
                <p className="text-muted-foreground">Multi-channel OOH blitz combining billboards, digital screens, and street furniture for comprehensive market coverage and brand visibility.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Borough-Specific Targeting</h3>
                <p className="text-muted-foreground">Outdoor media mix focused on high-footfall commercial zones to reach specific demographics in targeted London areas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{combinedFormats.length}+</div>
                <h3 className="font-semibold">Format Types</h3>
                <p className="text-sm text-muted-foreground">Available across London</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">32</div>
                <h3 className="font-semibold">London Boroughs</h3>
                <p className="text-sm text-muted-foreground">Complete coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <h3 className="font-semibold">Quote Turnaround</h3>
                <p className="text-sm text-muted-foreground">Same-day response</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <h3 className="font-semibold">Price Guarantee</h3>
                <p className="text-sm text-muted-foreground">Best rates in London</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Submit Your Campaign Brief
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start planning today. Whether you're running a single-site campaign or a multi-format takeover, our brief submission hub and client portal deliver the speed, clarity, and precision needed to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" className="bg-gradient-primary hover:opacity-90">
              Submit Brief Now
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "tel:+442045243019"}>
              CALL: +44 204 524 3019
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormatDirectory;