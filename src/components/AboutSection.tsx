import React from 'react';
import { CORE_VALUES } from '../data/content';
import { ShieldCheck, Award, MapPin, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onBookCall: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookCall }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F6F7F5] border-b-2 border-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Sinisa Milenkovic Profile & Heritage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-0.5 w-10 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                Founder &amp; Principal Operator
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#0E4B3C] leading-tight">
              Enterprise cybersecurity sales rigor. <br />
              <span className="italic text-[#0B0F0D]">Applied to small business growth.</span>
            </h2>

            {/* Approved copy block from Section 10 */}
            <div className="space-y-4 text-base sm:text-lg text-[#0B0F0D]/90 leading-relaxed font-sans">
              <p className="border-l-4 border-l-[#C9A961] border-2 border-[#0B0F0D] pl-4 py-2 italic text-[#0B0F0D] bg-white rounded-md shadow-2xs">
                &ldquo;S. C. Milenwall is run by Sinisa Milenkovic, a Sydney-based operator whose career was built inside enterprise cybersecurity sales — carrying quota into some of the most demanding, process-driven sales organisations there are.&rdquo;
              </p>

              <p>
                That&apos;s the actual difference on offer: not another freelancer improvising a marketing plan, but someone who has spent a career inside disciplined, pipeline-driven sales systems, now building the same discipline into businesses that have never had access to it.
              </p>

              <p className="text-sm text-[#5B645F]">
                In enterprise technology, survival depends on process: accurate forecasting, ruthless qualification, rigorous buyer alignment, and repeatable execution. Small businesses are routinely told to rely on fuzzy brand sentiment or speculative hourly retainers. S. C. Milenwall was founded to dismantle that compromise.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border-2 border-[#0B0F0D] shadow-2xs">
                <div className="flex items-center gap-2 text-[#0E4B3C] mb-1">
                  <Award className="w-4 h-4 text-[#C9A961]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#C9A961]">Quota Heritage</span>
                </div>
                <div className="text-base font-editorial font-semibold text-[#0B0F0D]">
                  Mandiant &amp; Fortinet
                </div>
                <p className="text-xs text-[#5B645F] mt-1">
                  Enterprise quota carrier inside world-leading cybersecurity organisations.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-2 border-[#0B0F0D] shadow-2xs">
                <div className="flex items-center gap-2 text-[#0E4B3C] mb-1">
                  <MapPin className="w-4 h-4 text-[#C9A961]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#C9A961]">Local Presence</span>
                </div>
                <div className="text-base font-editorial font-semibold text-[#0B0F0D]">
                  Sydney, NSW Australia
                </div>
                <p className="text-xs text-[#5B645F] mt-1">
                  Serving Australian businesses with local accountability and in-person engagement.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs border-2 border-[#0B0F0D]"
              >
                <UserCheck className="w-4 h-4 text-[#0B0F0D]" />
                <span>Speak Directly with Sinisa</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
              </button>
            </div>
          </div>

          {/* Right: The 5 Core Operating Values */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#082E24] text-white rounded-xl p-6 sm:p-8 border-2 border-[#0B0F0D] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b-2 border-white/20">
                <ShieldCheck className="w-5 h-5 text-[#C9A961]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C9A961] font-semibold">
                  Operating Principles &amp; Guarantees
                </span>
              </div>

              <div className="space-y-5">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="space-y-1 pb-4 border-b-2 border-white/15 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-editorial font-semibold text-white">
                        {val.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#C9A961] tracking-wider uppercase font-bold">
                        Rule 0{idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#C9A961]">
                      {val.subtitle}
                    </div>
                    <p className="text-xs text-[#F6F7F5]/80 leading-relaxed font-sans mt-1">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t-2 border-white/20 flex items-center gap-2 text-xs text-[#F6F7F5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#C9A961] shrink-0" />
                <span>Zero junior account handoffs. Zero surprise hourly invoices.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
