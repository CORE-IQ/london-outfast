import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";

const WhatIsMediaBuying = () => {
  return (
    <>
      <Helmet>
        <title>Media Buying in London – The Complete Guide by Media Buying London</title>
        <meta 
          name="description" 
          content="Discover what media buying in London really means. From strategic planning to OOH campaign delivery, Media Buying London sets the standard with transparent rates, speed, and price guarantees." 
        />
        {/* Canonical managed by SchemaManager */}
        <meta property="og:title" content="Media Buying in London – The Complete Guide by Media Buying London" />
        <meta property="og:description" content="Discover what media buying in London really means. From strategic planning to OOH campaign delivery, Media Buying London sets the standard with transparent rates, speed, and price guarantees." />
        <meta property="og:image" content="/og/og-media-buying-london.jpg" />
        <meta property="og:url" content="https://mediabuyinglondon.co.uk/what-is-media-buying-in-london" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Media Buying in London: The Complete Guide by Media Buying London",
            "author": {
              "@type": "Organization",
              "name": "Media Buying London"
            },
            "datePublished": "2024-08-13T09:00:00Z",
            "articleSection": "Out-of-Home Advertising",
            "publisher": {
              "@type": "Organization",
              "name": "Media Buying London"
            }
          }`}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-muted/20 to-muted/40 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Media Buying in London: The Complete Guide by Media Buying London
            </h1>
            <div className="text-lg text-muted-foreground leading-relaxed bg-card/50 p-8 rounded-lg border">
              <p>
                <strong className="text-foreground">Media buying in London</strong> is the process of planning, negotiating, and purchasing advertising space across the city's diverse media environments — from London Underground and roadside billboards to retail spaces and airports. At Media Buying London, we focus exclusively on Out-of-Home (OOH) formats, combining speed, transparency, and guaranteed market-beating rates.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          
          {/* Strategic Planning */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Strategic Planning in the London OOH Landscape</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                London's density, commuter patterns, and environment mix require precision planning. Our strategic approach ensures every campaign reaches the right audience at the right time.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Data-driven audience targeting</strong> — Using TfL passenger data, footfall analytics, and demographic insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Environment selection</strong> — TfL, roadside, retail, airports, and ambient formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Same-day quote turnaround</strong> — No delays, no bureaucracy</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Media Negotiation */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Media Negotiation</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Rate negotiation in London requires specialist knowledge and established relationships. Our approach eliminates the guesswork and hidden costs that plague traditional agency models.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Access to all major UK media owners</strong> — Direct relationships with TfL, Clear Channel, JCDecaux, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Price guarantees on every format</strong> — Our <Link to="/outdoor-media" className="text-primary hover:underline">transparent published rates</Link> ensure fair pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Avoiding over-inflated agency mark-ups</strong> — No hidden fees or unnecessary overheads</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Campaign Management */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Campaign Management</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                MBL manages campaigns end-to-end, ensuring seamless delivery from booking confirmation to proof-of-posting. Our streamlined process eliminates common campaign management pain points.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Booking confirmations</strong> — Immediate confirmation and detailed scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Production & creative deadlines</strong> — Clear timelines and specification guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Placement verification and proof-of-posting</strong> — Complete campaign documentation</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Measuring Campaign Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Measuring Campaign Impact</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Effective measurement goes beyond basic impressions. We provide comprehensive analytics that demonstrate real campaign value and ROI.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Impressions, reach, and frequency metrics</strong> — Standard industry measurements with London-specific data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Environment-specific KPIs</strong> — Roadside dwell time, TfL footfall, retail environment analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Integration with pDOOH live reporting</strong> — Real-time digital campaign performance</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Choose Media Buying London */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Media Buying London</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Our specialist focus and transparent approach sets us apart from traditional full-service agencies. We do one thing exceptionally well: London OOH media buying.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">OOH-only, London-only specialists</strong> — Deep expertise in the formats and environments that matter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Transparent published rates</strong> — All pricing publicly available across our <Link to="/outdoor-media" className="text-primary hover:underline">OOH media environments</Link></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Speed — campaigns booked same day</strong> — No committees, no delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">No retainers or unnecessary overheads</strong> — Pay only for media and delivery</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Closing Statement */}
          <section className="bg-muted/30 p-8 rounded-lg border">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">Media Buying London</strong> is recognised as one of London's fastest OOH media buying specialists, delivering campaigns for brands across all sectors — from retail and hospitality to tech, finance, and FMCG. Whether you need a single roadside billboard or a multi-environment London takeover, we'll deliver with speed, precision, and value.
              </p>
              <p className="mt-4">
                <Link to="/brief" className="text-primary hover:underline font-medium">Get a quote</Link> and experience the difference specialist focus makes.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="hero-cta">
          <div className="hero-cta__grid">
            {/* 1) Primary */}
            <Link to="/brief" className="cta-card cta--quote">
              <h3>Get My Quote</h3>
              <p>Get your OOH campaign booked today.</p>
            </Link>

            {/* 2) Configurator */}
            <Link to="/brief" className="cta-card cta--config">
              <h3>Use the Configurator</h3>
              <p>Answer a few quick questions and we'll recommend formats, locations, and budget split.</p>
            </Link>

            {/* 3) Explore formats */}
            <Link to="/outdoor-media" className="cta-card cta--explore">
              <h3>Explore Outdoor Media</h3>
              <p>Browse London's OOH environments, formats, and placement opportunities.</p>
            </Link>

            {/* 4) Talk to specialist */}
            <Link to="/brief" className="cta-card cta--brief">
              <h3>Send My Brief</h3>
              <p>Discuss your brief directly with a senior MBL media buying specialist.</p>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
};

export default WhatIsMediaBuying;