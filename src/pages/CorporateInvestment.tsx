import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FundingTracker } from '@/components/investor/FundingTracker';
import { InvestorForm } from '@/components/investor/InvestorForm';

export default function CorporateInvestment() {
  const deadline = useMemo(() => new Date('2025-10-31T23:59:59Z'), []);

  return (
    <>
      <Helmet>
        <title>Invest in Media Buying London – Corporate Investment</title>
        <meta name="description" content="London proven. Global cities in development. Transparent OOH technology with direct media owner integrations. Round closes 31 October 2025." />
        {/* Canonical managed by SchemaManager */}
        <meta property="og:title" content="Invest in Media Buying London – Corporate Investment" />
        <meta property="og:description" content="London proven. Global cities in development. Transparent OOH technology with direct media owner integrations. Round closes 31 October 2025." />
        <meta property="og:url" content="https://mediabuyinglondon.co.uk/corporate-investment" />
        <meta property="og:image" content="https://mediabuyinglondon.co.uk/assets/og/mbl-investor.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InvestmentOrDeposit",
            "name": "Media Buying London – Corporate Investment",
            "description": "Transparent OOH buying platform proven in London; scaling globally. Round closes 31 Oct 2025.",
            "url": "https://mediabuyinglondon.co.uk/corporate-investment"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-[42rem] h-[42rem] bg-white/20 blur-3xl rounded-full"/>
            <div className="absolute -bottom-24 -right-24 w-[48rem] h-[48rem] bg-white/10 blur-3xl rounded-full"/>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Invest in the Future of Out-of-Home Media Buying</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">London proven, global cities in development. Live date <span className="font-semibold">21 August 2025</span>. Funding closes <span className="font-semibold">31 October 2025</span>.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="#invest" className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground px-6 py-3 font-semibold hover:bg-secondary/90 transition-colors">Speak to Our Corporate Investment Team</a>
            </div>
          </div>
        </section>

        {/* OPPORTUNITY */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Opportunity</h2>
              <p className="text-muted-foreground mb-4">Media Buying London is redefining how brands access the OOH market. Our London pilot has already delivered an unprecedented uplift in speed, transparency, and price efficiency for advertisers. With the technology, media-owner integrations, and operational model proven in London, we are now preparing for rollouts in New York, Dubai, Singapore, and other major global cities.</p>
              <p className="text-muted-foreground">We're breaking the margin-protection model that has dominated OOH for decades, creating a transparent marketplace that benefits both advertisers and media owners.</p>
            </div>
            <div className="rounded-lg border border-border p-6 bg-card shadow-sm">
              <h3 className="font-semibold mb-3">Platform advantages</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Price transparency & automation</li>
                <li>Instant access to all environments (London Underground, Roadside, Bus, Rail, Retail, Airports, Street Furniture, pDOOH, Ambient)</li>
                <li>Proprietary media owner plugins in development</li>
                <li>Price-guarantee model</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHY WE WIN */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why This Model Wins</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { title: 'Speed', desc: 'Same-day quotes & booking' },
                { title: 'Transparency', desc: 'Lifting the lid on actual rates' },
                { title: 'Access', desc: 'All major media owners on one platform' },
                { title: 'Price Guarantee', desc: 'Beating traditional agency rates' },
                { title: 'Global Scalability', desc: 'London as the blueprint' }
              ].map((item, i) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-5 text-center">
                  <div className="text-sm font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTIONS + TRACKER */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projected Returns</h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-left">
                    <tr>
                      <th className="p-3">Year</th>
                      <th className="p-3">Revenue</th>
                      <th className="p-3">EBITDA</th>
                      <th className="p-3">Global Markets Live</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">2025</td>
                      <td className="p-3">£3.2M</td>
                      <td className="p-3">£1.1M</td>
                      <td className="p-3">London</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">2026</td>
                      <td className="p-3">£14.5M</td>
                      <td className="p-3">£6.3M</td>
                      <td className="p-3">+3 cities</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">2027</td>
                      <td className="p-3">£38.7M</td>
                      <td className="p-3">£17.8M</td>
                      <td className="p-3">+6 cities</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-3 text-xs text-muted-foreground bg-muted/20">
                  Projections are based on current performance data from the London pilot and scaled media-owner inventory access.
                </div>
              </div>
              <div>
                <FundingTracker deadline={deadline} target={2500000} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Investor FAQs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Can this model be replicated?',
                  a: 'Only with significant tech investment and direct media-owner relationships. Both are secured and active in our platform today.'
                },
                {
                  q: 'Why hasn\'t it been done before?',
                  a: 'Traditional agencies protect margin; true transparency disrupts their revenue model.'
                },
                {
                  q: 'Could media owners refuse bookings?',
                  a: 'No. We are an approved buyer with live contracts in place and a growing network of direct integrations.'
                },
                {
                  q: 'Are your rates truly the best?',
                  a: 'Yes. We benchmark against live ratecards daily and apply a guaranteed saving model.'
                }
              ].map((faq) => (
                <div key={faq.q} className="rounded-lg border border-border bg-card p-6">
                  <div className="font-semibold mb-2">{faq.q}</div>
                  <div className="text-sm text-muted-foreground">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNDING DETAILS */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Funding Details</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">£2.5M</div>
                <div className="text-sm text-muted-foreground">Target Raise</div>
                <div className="text-xs text-muted-foreground mt-2">For global rollout (technology, new market launches, sales operations)</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">£50,000</div>
                <div className="text-sm text-muted-foreground">Minimum Investment</div>
                <div className="text-xs text-muted-foreground mt-2">Capital must be ready to deploy immediately</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">31 Oct 2025</div>
                <div className="text-sm text-muted-foreground">Round Closes</div>
                <div className="text-xs text-muted-foreground mt-2">Or sooner if fully subscribed</div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="invest" className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Investor Declaration</h2>
              <p className="text-muted-foreground">Minimum investment £50,000. Please only proceed if you have capital ready to deploy.</p>
            </div>
            <InvestorForm deadline={deadline} />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 px-4 bg-gradient-to-r from-primary via-primary/95 to-secondary text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">This round will close when fully subscribed — don't miss out.</h3>
            <a href="#invest" className="inline-flex items-center rounded-md bg-white text-primary font-semibold px-6 py-3 hover:bg-white/90 transition-colors">Speak to Our Corporate Investment Team</a>
          </div>
        </section>
      </div>
    </>
  );
}