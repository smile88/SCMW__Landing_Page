import React from 'react';
import { ArrowRight, ShieldCheck, Check, Calendar, Sparkles } from 'lucide-react';
import { SystemsGraphic } from './SystemsGraphic';

interface HeroProps {
  onExploreServices: () => void;
  onBookCall: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onBookCall,
  onSelectService,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#0B0F0D]/10 bg-[#F6F7F5]">
      {/* Background dot matrix texture from Professional Polish design */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0B0F0D 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Main Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Tag with Gold Rule from Design HTML */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.3em] uppercase">
                Sydney, NSW • B2B Infrastructure
              </span>
            </div>

            {/* Approved Headline with Spectral styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-editorial font-medium leading-[1.12] text-[#0E4B3C] mb-6 tracking-tight">
              Enterprise-grade growth systems,{' '}
              <span className="italic text-[#0B0F0D] block sm:inline">
                built for small business budgets.
              </span>
            </h1>

            {/* Approved Sub-headline */}
            <p className="text-[#5B645F] text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Most small businesses run marketing and sales on instinct. We build the discipline: websites, search visibility, strategy, and sales tools—built once and run properly.
            </p>

            {/* Action Buttons in Professional Polish styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onBookCall}
                className="bg-[#C9A961] text-[#0B0F0D] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded shadow-sm hover:bg-[#9C7A3D] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
              </button>

              <button
                onClick={onExploreServices}
                className="border border-[#0E4B3C] text-[#0E4B3C] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-[#0E4B3C] hover:text-white transition-all flex items-center justify-center"
              >
                <span>View Services</span>
              </button>
            </div>

            {/* Credibility & Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#0B0F0D]/10">
              <div className="flex items-start gap-2 text-xs text-[#0B0F0D] font-medium py-1">
                <Check className="w-4 h-4 text-[#0E4B3C] shrink-0 mt-0.5" />
                <span>Fixed-Price Scopes (No Hourly Creep)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#0B0F0D] font-medium py-1">
                <ShieldCheck className="w-4 h-4 text-[#0E4B3C] shrink-0 mt-0.5" />
                <span>Enterprise Pedigree (Mandiant &amp; Fortinet)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#0B0F0D] font-medium py-1">
                <Sparkles className="w-4 h-4 text-[#C9A961] shrink-0 mt-0.5" />
                <span>Single Point of Accountability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specialised Services in Professional Polish Dark Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#0E4B3C] p-8 sm:p-10 rounded-2xl flex flex-col justify-center text-white relative overflow-hidden shadow-2xl border border-[#C9A961]/25">
              {/* Concentric rings decoration from Professional Polish design */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h3 className="font-editorial text-2xl mb-7 border-b border-white/20 pb-4 italic text-white">
                  Specialised Services
                </h3>

                <div className="space-y-6">
                  {/* Service 01 */}
                  <div
                    onClick={() => onSelectService('web-design')}
                    className="flex gap-5 group cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <div className="text-[#C9A961] text-lg font-editorial italic shrink-0">01</div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 tracking-wide text-white group-hover:text-[#C9A961] transition-colors">
                        Website Design &amp; Dev
                      </h4>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
                        From $2,500 • Built to Convert
                      </p>
                    </div>
                  </div>

                  {/* Service 02 */}
                  <div
                    onClick={() => onSelectService('seo-ai-search')}
                    className="flex gap-5 group cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <div className="text-[#C9A961] text-lg font-editorial italic shrink-0">02</div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 tracking-wide text-white group-hover:text-[#C9A961] transition-colors">
                        SEO &amp; AI Visibility
                      </h4>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
                        From $1,500/mo • ChatGPT &amp; Search
                      </p>
                    </div>
                  </div>

                  {/* Service 03 */}
                  <div
                    onClick={() => onSelectService('marketing-strategy')}
                    className="flex gap-5 group cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <div className="text-[#C9A961] text-lg font-editorial italic shrink-0">03</div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 tracking-wide text-white group-hover:text-[#C9A961] transition-colors">
                        Strategy &amp; Positioning
                      </h4>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
                        From $4,000 • 90-Day Roadmap
                      </p>
                    </div>
                  </div>

                  {/* Service 04 */}
                  <div
                    onClick={() => onSelectService('sales-enablement')}
                    className="flex gap-5 group cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <div className="text-[#C9A961] text-lg font-editorial italic shrink-0">04</div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 tracking-wide text-white group-hover:text-[#C9A961] transition-colors">
                        Sales Enablement
                      </h4>
                      <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
                        From $1,500 • CRM &amp; Playbooks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operator Profile Tag from Design HTML */}
                <div className="mt-10 pt-7 border-t border-white/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#C9A961] flex items-center justify-center text-xs text-[#C9A961] font-bold bg-[#082E24] shrink-0">
                    SM
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                      Sinisa Milenkovic
                    </p>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">
                      Ex-Mandiant / Fortinet Sales Operator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Credibility Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-[#0B0F0D]/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B645F]">
                Enterprise Sales Heritage Applied at SMB Scale
              </p>
              <p className="text-sm text-[#0B0F0D] font-medium mt-0.5">
                Quota-carrying sales &amp; systems background inside tier-one technology environments:
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A961]" />
                <span className="font-editorial text-lg font-semibold tracking-wide text-[#0B0F0D]">
                  MANDIANT
                </span>
                <span className="text-[10px] font-mono text-[#5B645F] uppercase">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0E4B3C]" />
                <span className="font-editorial text-lg font-semibold tracking-wide text-[#0B0F0D]">
                  FORTINET
                </span>
                <span className="text-[10px] font-mono text-[#5B645F] uppercase">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A961]" />
                <span className="font-editorial text-lg font-semibold tracking-wide text-[#0B0F0D]">
                  MACQUARIE
                </span>
                <span className="text-[10px] font-mono text-[#5B645F] uppercase">Telecom &amp; Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

