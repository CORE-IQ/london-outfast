import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, MapPin, Users, TrendingDown, ExternalLink, Calendar, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatGBP } from "@/lib/pricingMath";
import { Deal, calcDeal, formatPeriodRange, formatPeriodCodes } from "@/utils/dealCalculations";
import { useDealLocking } from "@/hooks/useDealLocking";
import { useRealDeals } from "@/hooks/useRealDeals";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/utils/analytics";
import { DealContactForm } from "@/components/DealContactForm";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextFriday = new Date();
      nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
      nextFriday.setHours(16, 0, 0, 0); // 4:00 PM
      
      if (now.getDay() === 5 && now.getHours() >= 16) {
        // If it's Friday after 4pm, set to next Friday
        nextFriday.setDate(nextFriday.getDate() + 7);
      }

      const difference = nextFriday.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
        <div className="flex items-center justify-center gap-2 text-destructive">
          <Clock className="h-5 w-5" />
          <span className="font-semibold">This week's deals are now closed. New deals go live Monday 9am.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-center gap-4 text-center">
        <Clock className="h-5 w-5 text-accent" />
        <span className="text-sm text-muted-foreground">This week's deals end in</span>
        <div className="flex gap-2 font-mono font-bold text-accent">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>:
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        <span className="text-sm text-muted-foreground">Deadline: Friday 4:00 PM (UK)</span>
      </div>
    </div>
  );
};

const DealCard = ({ deal }: { deal: Deal }) => {
  const navigate = useNavigate();
  const { lockDeal, isLocking } = useDealLocking();
  const [user, setUser] = useState(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Initialize quantities with default of 20
  useEffect(() => {
    const initialQuantities: Record<number, number> = {};
    deal.items.forEach((_, index) => {
      initialQuantities[index] = 20;
    });
    setQuantities(initialQuantities);
  }, [deal.items]);

  // Create modified deal with user-selected quantities
  const modifiedDeal = {
    ...deal,
    items: deal.items.map((item, index) => ({
      ...item,
      qty: quantities[index] || item.qty
    }))
  };
  
  const calc = calcDeal(modifiedDeal);
  const formats = Array.from(new Set(modifiedDeal.items.map(item => item.format_name)));
  const areas = Array.from(new Set(modifiedDeal.items.map(item => item.location_area)));

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
  }, []);

  useEffect(() => {
    // Track deal impression
    track('deal_impression', {
      deal_slug: deal.slug,
      value: calc.totals.grandTotal,
      discount_pct: deal.discount_pct
    });
  }, [deal.slug, calc.totals.grandTotal, deal.discount_pct]);

  const handleLockDeal = () => {
    track('deal_cta_lock_clicked', {
      deal_slug: deal.slug,
      value: calc.totals.grandTotal
    });
    lockDeal(modifiedDeal, user?.id, () => setShowContactForm(true));
  };

  const handleSendBrief = () => {
    track('deal_cta_brief_clicked', {
      deal_slug: deal.slug,
      value: calc.totals.grandTotal
    });
    navigate(`/brief?deal=${deal.slug}&budget=${calc.totals.grandTotal}`);
  };

  const handleQuantityChange = (itemIndex: number, newQty: number) => {
    if (newQty >= 1 && newQty <= 100) {
      setQuantities(prev => ({
        ...prev,
        [itemIndex]: newQty
      }));
    }
  };

  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold">{deal.title}</CardTitle>
          <Badge variant="destructive" className="text-xs">
            {deal.availability_left} left
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {formats.map((format, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {format}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{areas.join(", ")}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>Periods: {formatPeriodRange(deal.periods)} ({formatPeriodCodes(deal.periods)})</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Detailed Pricing Table */}
        <div className="mb-4 overflow-x-auto">
          <Table className="text-xs">
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Format</TableHead>
                <TableHead className="text-xs">Area</TableHead>
                <TableHead className="text-xs text-right">Select Qty</TableHead>
                <TableHead className="text-xs text-right">Per Panel Price</TableHead>
                <TableHead className="text-xs text-right">Per Panel Discount</TableHead>
                <TableHead className="text-xs text-right">Line Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calc.lines.map((line, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-xs">
                    {line.format_name}
                  </TableCell>
                  <TableCell className="text-xs">Specific location will be provided on booking</TableCell>
                  <TableCell className="text-xs text-right">
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      value={quantities[index] || line.qty}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                      className="w-16 h-8 text-xs text-center"
                    />
                  </TableCell>
                  <TableCell className="text-xs text-right">
                    <div className="font-semibold text-green-600">£{Math.round(line.perPanelRateCard * (1 - deal.discount_pct / 100))}</div>
                    <div className="text-muted-foreground line-through text-xs">£{line.perPanelRateCard.toFixed(0)}</div>
                  </TableCell>
                  <TableCell className="text-xs text-right">
                    <div className="font-semibold text-green-600">
                      £{Math.round(line.perPanelRateCard * (deal.discount_pct / 100))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ({deal.discount_pct}% off)
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-right font-semibold">
                    £{line.lineSubtotal.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} className="text-right font-semibold">
                  <div className="space-y-1">
                    <div className="flex justify-between text-green-600">
                      <span>You save ({Math.round(calc.totals.savingPct * 100)}%):</span>
                      <span>£{calc.totals.discountValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deal media total:</span>
                      <span>£{calc.totals.mediaDeal.toLocaleString()}</span>
                    </div>
                    {calc.totals.production > 0 && (
                      <div className="flex justify-between">
                        <span>Production total:</span>
                        <span>£{calc.totals.production.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="text-xs text-muted-foreground line-through mb-1">
                    Normal price: £{calc.totals.mediaRateCard.toLocaleString()}
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    £{calc.totals.grandTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Deal price ex VAT</div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        {deal.notes && (
          <p className="text-sm text-muted-foreground mb-4">
            {deal.notes}
          </p>
        )}


        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleLockDeal} 
            className="w-full" 
            disabled={isLocking}
          >
            {isLocking ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Locking deal...
              </>
            ) : (
              'Lock this deal'
            )}
          </Button>
          <Button variant="outline" onClick={handleSendBrief} className="w-full">
            <ExternalLink className="h-4 w-4 mr-2" />
            Send brief with this deal
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          Media only unless stated. Production shown separately. Subject to availability. Deadline: Friday 4:00 PM (UK).
        </p>
      </CardContent>

      <DealContactForm 
        deal={modifiedDeal}
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        user={user}
      />
    </Card>
  );
};

const LondonOOHDeals = () => {
  const navigate = useNavigate();
  const { deals, loading, error } = useRealDeals();

  return (
    <>
      <Helmet>
        <title>London OOH Deals of the Week | Media Buying London</title>
        <meta 
          name="description" 
          content="Grab hand-picked London out-of-home deals that end every Friday at 4pm. D48, D6, Bus, London Underground and more—real rate-card savings, limited availability." 
        />
        {/* Canonical managed by SchemaManager */}
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mediabuyinglondon.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Deals of the Week",
                "item": "https://mediabuyinglondon.co.uk/london-ooh-deals"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "When do deals close?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every Friday at 4:00 PM UK time."
                }
              },
              {
                "@type": "Question",
                "name": "What's included in the deal rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Media cost only unless stated. Production/print can be added."
                }
              },
              {
                "@type": "Question",
                "name": "Can I modify a package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can adjust areas, formats and in-charge while attempting to preserve the deal rate."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know the savings are real?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We upload the original media-owner invoice to your client portal. The rate you pay is the rate we pay."
                }
              },
              {
                "@type": "Question",
                "name": "Who are the media owners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Global, JCDecaux, Ocean, Clear Channel, TfL partners, Limited Space, Elonex, Admedia, Smart Outdoor, and others."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
                NEW · REFRESHES WEEKLY
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                London Out-of-Home Advertising Deals of the Week
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Each week we publish four limited-availability London OOH packages with true savings versus rate card. 
                Deals refresh every Monday and <strong>close Friday at 4:00 PM</strong>. Book fast—inventory is live and subject to availability.
              </p>
            </div>

            <CountdownTimer />
          </div>
        </section>

        {/* Deals Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 mx-auto animate-spin mb-4" />
                <p className="text-muted-foreground">Loading real rate card deals...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive mb-4">Failed to load deals: {error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            ) : deals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No deals available this week. Check back Monday 9am.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {deals.map((deal) => (
                  <DealCard key={deal.slug} deal={deal} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Weekly Deals */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Weekly Deals?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Late Release Inventory</h3>
                <p className="text-muted-foreground">
                  We secure negotiated late release and unsold premium inventory at genuine discounts.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Bundles</h3>
                <p className="text-muted-foreground">
                  Packages that combine <strong>reach (roadside)</strong> + <strong>frequency (transport/retail)</strong> for maximum impact.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rate Transparency</h3>
                <p className="text-muted-foreground">
                  Real rate transparency: we show standard vs deal price and upload media-owner invoices in your client portal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When do deals close?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every Friday at 4:00 PM (UK time). After the deadline the package is withdrawn or repriced.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the deal rate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Media cost only unless noted. Production/print can be added at checkout or via your specialist.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I modify a package (dates/areas)?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes—your specialist can tailor format, areas, and in-charge while protecting the deal rate where possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I know the savings are real?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We practice transparent invoicing. We upload the original media-owner invoice to your client portal alongside our commission—<strong>the rate you pay is the rate we pay.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Who are the media owners?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We buy direct across London from Global, JCDecaux, Ocean, Clear Channel, TfL partners, Limited Space, Elonex, Admedia, Smart Outdoor and others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Direct Relationships with London's Leading Media Owners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="text-lg font-medium">Global</span>
              <span className="text-lg font-medium">JCDecaux</span>
              <span className="text-lg font-medium">Ocean</span>
              <span className="text-lg font-medium">Clear Channel</span>
              <span className="text-lg font-medium">TfL Partners</span>
              <span className="text-lg font-medium">Limited Space</span>
              <span className="text-lg font-medium">Elonex</span>
              <span className="text-lg font-medium">Admedia</span>
              <span className="text-lg font-medium">Smart Outdoor</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Explore London OOH Formats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/ooh')}
                className="h-auto p-4 text-left justify-start"
              >
                London OOH Hub
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/ooh/roadside-billboards')}
                className="h-auto p-4 text-left justify-start"
              >
                Roadside Advertising
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/ooh/london-underground')}
                className="h-auto p-4 text-left justify-start"
              >
                London Underground
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/ooh/bus-advertising')}
                className="h-auto p-4 text-left justify-start"
              >
                Bus Advertising
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LondonOOHDeals;