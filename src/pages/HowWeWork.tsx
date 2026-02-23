import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { trackPageView } from '@/utils/analytics';
import { 
  ArrowRight, 
  FileText, 
  CreditCard, 
  Phone, 
  Users, 
  BarChart3, 
  Target, 
  Eye, 
  CheckCircle,
  Clock,
  Zap,
  Shield
} from 'lucide-react';

const HowWeWork = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add structured data for FAQ
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast can you launch my campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can take a campaign from brief to live in as little as 48 hours, depending on the format and creative approval."
          }
        },
        {
          "@type": "Question", 
          "name": "Do you mark up media rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The rate you pay is the rate we pay. Our commission is invoiced transparently so you can see exactly where your money goes."
          }
        },
        {
          "@type": "Question",
          "name": "What audience tools do you use?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "We use Experian Mosaic, Route, and Location Analyst to map audience behaviour, movement, and media consumption to ensure your campaign reaches the right people."
          }
        },
        {
          "@type": "Question",
          "name": "Can agencies work with you under their own brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide a full white-label service for agencies, delivering buying power, audience analysis, and rate checks while you keep full client control."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleStartBrief = () => {
    navigate('/brief');
  };

  const handleGetQuote = () => {
    navigate('/brief');
  };

  const entryRoutes = [
    {
      icon: FileText,
      title: "Direct Brief Submission",
      description: "Fill in our Brief Form with your requirements and we'll come back with three options today.",
      action: "Start Brief",
      onClick: handleStartBrief
    },
    {
      icon: CreditCard,
      title: "Instant Rate Card Access", 
      description: "View live pricing in our client portal for all London formats, then request a booking.",
      action: "Get Quote",
      onClick: handleGetQuote
    },
    {
      icon: Phone,
      title: "Consultation Call",
      description: "Speak to a media specialist who can guide you from concept to delivery.",
      action: "Contact Us",
      onClick: () => navigate('/contact')
    },
    {
      icon: Users,
      title: "Agency White Label",
      description: "Agencies can use our buying power and tools under their own brand, with us working discreetly in the background.",
      action: "Learn More",
      onClick: () => navigate('/contact')
    }
  ];

  const processSteps = [
    { step: 1, title: "Brief or Contact", description: "Choose one of four entry routes. We log your requirements and deadlines immediately." },
    { step: 2, title: "Rate Check & Audience Analysis", description: "We check live inventory rates direct with media owners. Using Experian Mosaic, Route, and Location Analyst, we map your audience's behaviour." },
    { step: 3, title: "Three Competitive Quotes", description: "We provide three campaign options with different formats, varying coverage levels, and transparent cost breakdown." },
    { step: 4, title: "Confirm & Book", description: "You approve the option that works for you. We book directly with the media owner — securing priority space." },
    { step: 5, title: "Creative Upload & Approval", description: "We supply full creative specifications and handle approvals directly with the media owner." },
    { step: 6, title: "Campaign Live", description: "Your campaign is up, running, and delivering impressions — often within 48 hours of approval." }
  ];

  const benefits = [
    { icon: Clock, title: "Speed", description: "Brief to booked in under 24 hours" },
    { icon: BarChart3, title: "Buying Power", description: "Access the most competitive rates in London" },
    { icon: Target, title: "Audience Science", description: "Tools like Experian Mosaic, Route, and Location Analyst" },
    { icon: Shield, title: "Transparency", description: "No hidden margins, no mark-ups" },
    { icon: Zap, title: "Flexibility", description: "From one-off panels to multi-borough campaigns" }
  ];

  return (
    <>
      <Helmet>
        <title>How We Work - Fast, Transparent OOH Media Buying | Media Buying London</title>
        <meta name="description" content="Discover our transparent process: from brief to live campaign in 48 hours. Four entry routes, competitive rates, and audience-driven targeting using industry-leading tools." />
        <meta name="keywords" content="how we work, OOH process, media buying process, London advertising, transparent rates, audience targeting" />
        {/* Canonical managed by SchemaManager */}
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Process
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fast, Transparent, Audience-Driven 
              <span className="text-primary"> OOH Media Buying</span> in London
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When you work with Media Buying London, you get a straight line from campaign idea to live outdoor advertising — with no wasted time, no inflated costs, and no smoke and mirrors.
            </p>
          </div>
        </section>

        {/* Four Entry Routes */}
        <section className="px-4 py-16 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Four Ways to Start With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a brand, agency, or startup, you have four clear routes to begin your campaign
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entryRoutes.map((route, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <route.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{route.title}</h3>
                  <p className="text-muted-foreground mb-6">{route.description}</p>
                  <Button 
                    variant="outline" 
                    onClick={route.onClick}
                    className="w-full"
                  >
                    {route.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process — From First Contact to Live Campaign</h2>
              <p className="text-lg text-muted-foreground">
                Here's how we turn your brief into a live campaign — quickly and transparently
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-6 mt-12 w-px h-8 bg-border" style={{ marginLeft: '1.5rem' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience-First Approach */}
        <section className="px-4 py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Audience-First, Rate-Driven — For You</h2>
              <p className="text-lg text-muted-foreground">
                We're not in "special deals" with media owners — our priority is you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Transparent Rates</h3>
                <p className="text-muted-foreground">The rate you pay is the rate we pay — we invoice with full transparency</p>
              </Card>
              
              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Clear Commission</h3>
                <p className="text-muted-foreground">Our commission is shown separately, so you see exactly where your money goes</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Data-Driven Targeting</h3>
                <p className="text-muted-foreground">Every campaign uses audience targeting to avoid wasted spend</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Agency White Label */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">For Agencies — White Label Service</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you're an agency, we can act as your silent partner
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">You Keep the Client Relationship</h3>
                <p className="text-muted-foreground text-sm">Maintain full control and ownership of your client relationships</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">We Work in the Background</h3>
                <p className="text-muted-foreground text-sm">We handle buying, rate checks, and audience analysis behind the scenes</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">Your Brand on Everything</h3>
                <p className="text-muted-foreground text-sm">All documents, proposals, and quotes are branded as yours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-16 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Media Buying London?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold mb-3">How fast can you launch my campaign?</h3>
                <p className="text-muted-foreground">We can take a campaign from brief to live in as little as 48 hours, depending on the format and creative approval.</p>
              </div>
              
              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you mark up media rates?</h3>
                <p className="text-muted-foreground">No. The rate you pay is the rate we pay. Our commission is invoiced transparently so you can see exactly where your money goes.</p>
              </div>
              
              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold mb-3">What audience tools do you use?</h3>
                <p className="text-muted-foreground">We use Experian Mosaic, Route, and Location Analyst to map audience behaviour, movement, and media consumption to ensure your campaign reaches the right people.</p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-3">Can agencies work with you under their own brand?</h3>
                <p className="text-muted-foreground">Yes. We provide a full white-label service for agencies, delivering buying power, audience analysis, and rate checks while you keep full client control.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Chat Today?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you want real rates, real audience targeting, and a campaign that can be live within days — start your brief now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleStartBrief}
                className="text-lg px-8"
              >
                Start Your Brief
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/contact')}
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowWeWork;