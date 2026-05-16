import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MediaFormatsProvider } from "@/components/providers/MediaFormatsProvider";
import { SchemaManager } from "@/components/SchemaManager";
import { CanonicalRedirect } from "@/components/CanonicalRedirect";
import { NoIndex } from "@/components/NoIndex";

// Wrap routes that should NOT appear in search results (admin, auth, transactional, internal).
const Private = ({ children }: { children: React.ReactNode }) => (
  <>
    <NoIndex />
    {children}
  </>
);

import SiteShell from "@/components/layout/SiteShell";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import Index from "./pages/Index";
import HomeTest1 from "./pages/HomeTest1";
import HomeTest2 from "./pages/HomeTest2";
import FormatPage from "./pages/FormatPage";
import FormatDirectory from "./pages/FormatDirectory";
import Auth from "./pages/Auth";
import CMS from "./pages/CMS";
import ProtectedRoute from "@/components/ProtectedRoute";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import LegalPage from "./pages/LegalPage";
import WhatIsMediaBuying from "./pages/WhatIsMediaBuying";
import NotFound from "./pages/NotFound";
import IndustryPage from "./pages/IndustryPage";
import Industries from "./pages/Industries";
import Configurator from "./pages/Configurator";
import BriefPlan from "./pages/BriefPlan";
import BriefSubmitted from "./pages/BriefSubmitted";
import CreateAccount from "./pages/CreateAccount";
import AccountCreated from "./pages/AccountCreated";
import ClientPortal from "./pages/ClientPortal";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { trackPageView, initCampaignTracking, trackTelClick } from "@/utils/analytics";
import "@/utils/seo";
import EmailTest from "./pages/EmailTest";
import NoInspect from "@/components/security/NoInspect";
import HtmlSitemap from "./pages/HtmlSitemap";
import Brief from "./pages/Brief";
import HowWeWork from "./pages/HowWeWork";
import ThankYou from "./pages/ThankYou";
import CorporateInvestment from "./pages/CorporateInvestment";
import LondonOOHSpecialists from "./pages/LondonOOHSpecialists";
import OOHAdvertisingLondon from "./pages/OOHAdvertisingLondon";
import OOHHub from "./pages/OOHHub";
import RoadsideAdvertising from "./pages/RoadsideAdvertising";
import BusAdvertising from "./pages/BusAdvertising";
import DigitalOOH from "./pages/DigitalOOH";
import LondonUndergroundAdvertising from "./pages/LondonUndergroundAdvertising";
import RailAdvertisingLondon from "./pages/RailAdvertisingLondon";
import TaxiAdvertising from "./pages/TaxiAdvertising";
import AirportAdvertising from "./pages/AirportAdvertising";
import BikeHireDockAdvertising from "./pages/BikeHireDockAdvertising";
import LampPostBannerAdvertising from "./pages/LampPostBannerAdvertising";
import ShoppingMallAdvertising from "./pages/ShoppingMallAdvertising";
import SupermarketAdvertising from "./pages/SupermarketAdvertising";
import StadiumAdvertising from "./pages/StadiumAdvertising";
import CityPosters from "./pages/CityPosters";
import StreetFurniture from "./pages/StreetFurniture";
import ProjectionMappingAdvertising from "./pages/ProjectionMappingAdvertising";
import ExperientialSampling from "./pages/ExperientialSampling";
import MediaBuyingRatesLondon from "./pages/MediaBuyingRatesLondon";
import LondonOOHDeals from "./pages/LondonOOHDeals";
import RedirectToFormatDirectory from "./pages/RedirectToFormatDirectory";
import RedirectToMediaBuying from "./pages/RedirectToMediaBuying";

const queryClient = new QueryClient();

const RouterAnalytics = () => {
  const location = useLocation();
  useEffect(() => { initCampaignTracking(); }, []);
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname, location.search]);
  return null;
};

const App = () => {
  // Global telephone link tracking
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;

      const phone = (a.getAttribute("href") || "").replace(/^tel:/i, "");
      const placement =
        a.dataset.placement || a.getAttribute("aria-label") || a.textContent?.trim();

      trackTelClick(phone, placement || undefined);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <MediaFormatsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <CanonicalRedirect />
          <RouterAnalytics />
          <SchemaManager />
          <NoInspect />
          <div className="min-h-screen bg-background">
            <AnalyticsScripts />
            <SiteShell>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/hometest1" element={<Private><HomeTest1 /></Private>} />
                <Route path="/hometest2" element={<Private><HomeTest2 /></Private>} />
                <Route path="/brief" element={<Brief />} />
                <Route path="/quote" element={<Brief />} />
                <Route path="/quote-plan" element={<Private><BriefPlan /></Private>} />
                <Route path="/brief-plan" element={<Private><BriefPlan /></Private>} />
                <Route path="/quote-submitted" element={<Private><BriefSubmitted /></Private>} />
                <Route path="/brief-submitted" element={<Private><BriefSubmitted /></Private>} />
                <Route path="/create-account" element={<Private><CreateAccount /></Private>} />
                <Route path="/account-created" element={<Private><AccountCreated /></Private>} />
                <Route path="/client-portal" element={<Private><ClientPortal /></Private>} />
                <Route path="/configurator" element={<Private><Brief /></Private>} />
                <Route path="/formats" element={<RedirectToFormatDirectory />} />
                <Route path="/outdoor-media" element={<FormatDirectory />} />
                <Route path="/outdoor-media/:formatSlug" element={<FormatPage />} />
                <Route path="/outdoor-media/industries/:industrySlug" element={<IndustryPage />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:industrySlug" element={<IndustryPage />} />
                <Route path="/what-is-media-buying-in-london" element={<WhatIsMediaBuying />} />
                <Route path="/what-is-media-buying" element={<RedirectToMediaBuying />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/thank-you" element={<Private><ThankYou /></Private>} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/auth" element={<Private><Auth /></Private>} />
                <Route path="/email-test" element={<Private><EmailTest /></Private>} />
                <Route path="/cms" element={<Private><ProtectedRoute><CMS /></ProtectedRoute></Private>} />
                <Route path="/corporate-investment" element={<CorporateInvestment />} />
                <Route path="/ooh" element={<OOHHub />} />
                <Route path="/ooh/taxi-advertising" element={<TaxiAdvertising />} />
                <Route path="/ooh/airport-advertising" element={<AirportAdvertising />} />
                <Route path="/ooh/bike-hire-dock-advertising" element={<BikeHireDockAdvertising />} />
                <Route path="/ooh/lamp-post-banner-advertising" element={<LampPostBannerAdvertising />} />
                <Route path="/ooh/shopping-mall-advertising" element={<ShoppingMallAdvertising />} />
                <Route path="/ooh/supermarket-advertising" element={<SupermarketAdvertising />} />
                <Route path="/ooh/stadium-advertising-london" element={<StadiumAdvertising />} />
                <Route path="/ooh/city-posters-london" element={<CityPosters />} />
                <Route path="/ooh/street-furniture" element={<StreetFurniture />} />
                <Route path="/ooh/projection-mapping-advertising" element={<ProjectionMappingAdvertising />} />
                <Route path="/ooh/experiential-sampling-london" element={<ExperientialSampling />} />
                <Route path="/ooh/roadside-billboards" element={<RoadsideAdvertising />} />
                <Route path="/ooh/bus-advertising" element={<BusAdvertising />} />
                <Route path="/ooh/digital-ooh" element={<DigitalOOH />} />
                <Route path="/ooh/london-underground" element={<LondonUndergroundAdvertising />} />
                <Route path="/ooh/rail-advertising-london" element={<RailAdvertisingLondon />} />
                <Route path="/london-ooh-specialists" element={<LondonOOHSpecialists />} />
                <Route path="/ooh-advertising-london" element={<OOHAdvertisingLondon />} />
                <Route path="/media-buying-rates-london" element={<MediaBuyingRatesLondon />} />
                <Route path="/london-ooh-deals" element={<LondonOOHDeals />} />
                <Route path="/sitemap" element={<HtmlSitemap />} />
                <Route path="/sitemap-html" element={<HtmlSitemap />} />
                {/* Legal Pages */}
                <Route path="/privacy-policy" element={<LegalPage />} />
                <Route path="/terms-of-service" element={<LegalPage />} />
                <Route path="/cookie-policy" element={<LegalPage />} />
                <Route path="/disclaimer" element={<LegalPage />} />
                {/* Legal Pages with /legal/ prefix */}
                <Route path="/legal/privacy-policy" element={<LegalPage />} />
                <Route path="/legal/terms-of-service" element={<LegalPage />} />
                <Route path="/legal/cookie-policy" element={<LegalPage />} />
                <Route path="/legal/disclaimer" element={<LegalPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SiteShell>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </MediaFormatsProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;