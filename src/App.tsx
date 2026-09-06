import React, { useState, useEffect } from 'react';
import { NavigationTab } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { BuyerPersonas } from './components/BuyerPersonas';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveTools } from './components/InteractiveTools';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceSelector } from './components/ServiceSelector';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { SystemsGraphic } from './components/SystemsGraphic';
import { SERVICES, BUSINESS_INFO } from './data/content';
import { applyTabSeo } from './utils/seo';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

const VALID_TABS: NavigationTab[] = [
  'home',
  'services',
  'selector',
  'testimonials',
  'about',
  'insights',
  'tools',
  'contact',
  'privacy',
  'terms',
];

export default function App() {
  // Read initial tab from URL hash if valid
  const getInitialTab = (): NavigationTab => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#/, '').toLowerCase() as NavigationTab;
      if (VALID_TABS.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<NavigationTab>(getInitialTab);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [customNotesForContact, setCustomNotesForContact] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Dynamic SEO meta tags and social preview updates
  useEffect(() => {
    // If a legal modal is currently active, apply its dedicated legal SEO tags; otherwise apply current tab's SEO
    const currentTarget = legalModalType || activeTab;
    applyTabSeo(currentTarget);

    // Keep URL hash synchronized for bookmarking and social link sharing
    if (typeof window !== 'undefined' && !legalModalType) {
      const expectedHash = activeTab === 'home' ? '' : `#${activeTab}`;
      if (window.location.hash !== expectedHash) {
        const url = new URL(window.location.href);
        url.hash = expectedHash;
        window.history.replaceState(null, '', url.toString());
      }
    }
  }, [activeTab, legalModalType]);

  // Support browser back/forward buttons via hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '').toLowerCase() as NavigationTab;
      if (VALID_TABS.includes(hash) && hash !== activeTab) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!window.location.hash && activeTab !== 'home') {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeTab]);

  // Navigate to contact and pre-fill service of interest
  const handleSelectServiceForContact = (serviceIdOrName: string) => {
    setSelectedServiceForContact(serviceIdOrName);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireWithScope = (details: { service: string; notes: string }) => {
    setSelectedServiceForContact(details.service);
    setCustomNotesForContact(details.notes);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenJustificationTool = () => {
    setActiveTab('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7F5] text-[#0B0F0D] selection:bg-[#0E4B3C] selection:text-[#F6F7F5]">
      {/* Primary Sticky Header with Brand Wordmark & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContactWithService={() => {
          setSelectedServiceForContact('');
          setActiveTab('contact');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME (Comprehensive Single-Flow Experience) */}
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreServices={() => setActiveTab('services')}
              onBookCall={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
              onSelectService={handleSelectServiceForContact}
            />

            <ProblemStatement />

            <BuyerPersonas
              onSelectService={handleSelectServiceForContact}
              onOpenJustificationTool={handleOpenJustificationTool}
            />

            <ServicesSection
              onSelectService={handleSelectServiceForContact}
              isDetailedPage={false}
            />

            {/* Testimonials & Verified Case Reviews */}
            <TestimonialsSection
              onSelectService={handleSelectServiceForContact}
              onBookCall={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />

            {/* Interactive Service Selector Callout Block */}
            <section className="py-14 bg-[#F6F7F5] border-b border-[#0B0F0D]/10">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#0E4B3C]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                      Unsure Which Scope Fits Your Stage?
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-[#0B0F0D]">
                    Use the 60-Second Recommendation Engine
                  </h3>
                  <p className="text-sm text-[#5B645F] mt-1 max-w-xl mx-auto">
                    Answer 4 operational questions to calculate your optimal service pairing and exact fixed fee.
                  </p>
                </div>

                <ServiceSelector
                  onSelectServiceWithScope={handleEnquireWithScope}
                />
              </div>
            </section>

            <InteractiveTools
              onEnquireWithScope={handleEnquireWithScope}
              defaultTool="audit"
            />

            <AboutSection
              onBookCall={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />

            <InsightsSection
              onEnquire={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />

            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </>
        )}

        {/* VIEW 2: SERVICES & PRICING PAGE */}
        {activeTab === 'services' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  Service Catalogue &amp; Scopes
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Fixed-price systems. No hourly meter.
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Every service below is scoped upfront with guaranteed fixed pricing, clear deliverables, and a single point of accountability. You know the exact investment before any work begins.
              </p>
            </div>

            <ServicesSection
              onSelectService={handleSelectServiceForContact}
              isDetailedPage={true}
            />

            {/* Architecture breakdown */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="mb-8">
                <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                  How the 4 Disciplines Connect
                </h3>
                <p className="text-sm text-[#5B645F] mt-1">
                  Individual services solve specific bottlenecks, but combined they create a self-sustaining revenue engine.
                </p>
              </div>
              <SystemsGraphic onSelectService={handleSelectServiceForContact} />
            </div>

            {/* Pricing Model Comparison Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <div className="bg-white rounded-xl border border-[#0E4B3C]/15 p-6 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mb-6">
                  Quick Service Comparison &amp; Investment Summary
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="border-b border-black/10 text-xs font-mono text-[#5B645F] uppercase">
                        <th className="pb-3 pr-4">Service</th>
                        <th className="pb-3 px-4">Starting Price</th>
                        <th className="pb-3 px-4">Format</th>
                        <th className="pb-3 px-4">Timeline</th>
                        <th className="pb-3 pl-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {SERVICES.map((srv) => (
                        <tr key={srv.id} className="hover:bg-[#F6F7F5]/80 transition-colors">
                          <td className="py-4 pr-4">
                            <div className="font-semibold text-[#0B0F0D]">{srv.name}</div>
                            <div className="text-xs text-[#5B645F]">{srv.pitch}</div>
                          </td>
                          <td className="py-4 px-4 font-mono font-bold text-[#0E4B3C]">
                            {srv.startingPrice}
                          </td>
                          <td className="py-4 px-4 text-xs text-[#5B645F]">
                            {srv.billingType === 'monthly' ? 'Monthly rolling sprint' : 'Fixed-fee project'}
                          </td>
                          <td className="py-4 px-4 text-xs font-mono text-[#0B0F0D]">
                            {srv.typicalTimeline}
                          </td>
                          <td className="py-4 pl-4 text-right">
                            <button
                              onClick={() => handleSelectServiceForContact(srv.id)}
                              className="px-3.5 py-1.5 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-medium inline-flex items-center gap-1"
                            >
                              <span>Enquire</span>
                              <ArrowRight className="w-3 h-3 text-[#C9A961]" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </div>
        )}

        {/* VIEW 3: SERVICE SELECTOR PAGE */}
        {activeTab === 'selector' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  Guided Solution Matching
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Find Your Service Match
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Walk through 4 diagnostic questions to identify exactly which S. C. Milenwall fixed-price offering solves your commercial constraints.
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <ServiceSelector
                onSelectServiceWithScope={handleEnquireWithScope}
                standalone={true}
              />
            </div>

            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </div>
        )}

        {/* VIEW 4: TESTIMONIALS & CASE REVIEWS PAGE */}
        {activeTab === 'testimonials' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  Evidence Over Hype
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Client Reviews &amp; Recorded Walkthroughs
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Real feedback and commercial metrics from Sydney business owners, general managers, and founders who replaced unpredictable agency fees with S. C. Milenwall.
              </p>
            </div>

            <TestimonialsSection
              onSelectService={handleSelectServiceForContact}
              onBookCall={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />

            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </div>
        )}

        {/* VIEW 5: ABOUT PAGE */}
        {activeTab === 'about' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  About S. C. Milenwall
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Why this business exists.
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Sinisa&apos;s career was built inside enterprise cybersecurity sales — Mandiant, Fortinet — carrying quota into disciplined, process-driven sales organisations. S. C. Milenwall was built to bring that exact discipline to small and medium businesses.
              </p>
            </div>

            <AboutSection
              onBookCall={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <ProblemStatement />
            </div>

            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </div>
        )}

        {/* VIEW 6: INSIGHTS & CASE STUDIES PAGE */}
        {activeTab === 'insights' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  Insights &amp; Case Studies
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Commercial proof and actionable thinking.
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Articles written in Australian English with zero agency jargon, detailing how search, pipelines, and growth systems function in 2026.
              </p>
            </div>

            <InsightsSection
              onEnquire={() => {
                setSelectedServiceForContact('');
                setActiveTab('contact');
              }}
            />
          </div>
        )}

        {/* VIEW 7: INTERACTIVE TOOLS PAGE */}
        {activeTab === 'tools' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
                  Diagnostic &amp; Modeler Suite
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-editorial font-semibold text-[#0B0F0D]">
                Evaluate your commercial systems.
              </h1>
              <p className="text-lg text-[#5B645F] max-w-3xl mt-3 leading-relaxed">
                Benchmark your readiness, test your 2026 AI search visibility, estimate fixed fees, or generate a forwardable justification memo for your partners.
              </p>
            </div>

            <InteractiveTools
              onEnquireWithScope={handleEnquireWithScope}
              defaultTool="selector"
            />
          </div>
        )}

        {/* VIEW 8: CONTACT PAGE */}
        {activeTab === 'contact' && (
          <div className="py-12 md:py-20 animate-in fade-in-50">
            <ContactSection
              initialService={selectedServiceForContact}
              initialNotes={customNotesForContact}
            />
          </div>
        )}
      </main>

      {/* Primary Footer with Legal Links & Brand Wordmark */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectService={handleSelectServiceForContact}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Legal Modals (Privacy Policy & Terms of Engagement) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
