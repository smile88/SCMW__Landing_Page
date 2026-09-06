import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { Check, ArrowRight, Clock, ShieldCheck, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  isDetailedPage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  isDetailedPage = false,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(isDetailedPage ? 'web-design' : null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b-2 border-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-[#0B0F0D]" />
            <span className="text-[#0E4B3C] text-xs font-bold tracking-[0.25em] uppercase">
              The Service Catalogue
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#0E4B3C] leading-tight">
            Four disciplines. <span className="italic text-[#0B0F0D]">Scoped with fixed-price certainty.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B645F] mt-3">
            Every service is scoped upfront with a guaranteed fixed fee. You know the exact deliverables, timeline, and investment before any work commences.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id || isDetailedPage;

            return (
              <div
                key={service.id}
                className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm relative hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Number & Price */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#0B0F0D]">
                    <span className="font-editorial italic text-base font-semibold text-[#C9A961] flex items-center gap-1.5">
                      <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#5B645F]">Discipline</span>
                      <span>0{service.number}</span>
                    </span>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-[#5B645F] block font-mono font-medium">
                        Fixed Scope From
                      </span>
                      <span className="text-xl sm:text-2xl font-editorial font-semibold text-[#0E4B3C]">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Title & Pitch */}
                  <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                    {service.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#0E4B3C] mt-1 font-sans">
                    {service.tagline}
                  </p>

                  <div className="p-3.5 my-4 rounded-lg bg-white border-2 border-[#0B0F0D] text-sm text-[#0B0F0D] italic">
                    &ldquo;{service.pitch}&rdquo;
                  </div>

                  {/* Who this is for */}
                  <p className="text-xs text-[#5B645F] mb-4">
                    <strong className="text-[#0B0F0D]">Target fit:</strong> {service.forWhom}
                  </p>

                  {/* Timeline & Format chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-white text-[#0B0F0D] border border-[#0B0F0D]">
                      <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                      {service.typicalTimeline}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-white text-[#0B0F0D] border border-[#0B0F0D]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0E4B3C]" />
                      Fixed-Price Scope
                    </span>
                  </div>

                  {/* Accordion Toggle for Mobile/Compact view */}
                  {!isDetailedPage && (
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="w-full text-left text-xs font-semibold text-[#0E4B3C] flex items-center justify-between py-2 border-t-2 border-[#0B0F0D] hover:text-[#082E24]"
                    >
                      <span>{isExpanded ? 'Hide Deliverables & Inclusions' : 'View Full Scope & Inclusions'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                  {/* Detailed Inclusions and Deliverables */}
                  {isExpanded && (
                    <div className="pt-4 border-t-2 border-[#0B0F0D] space-y-4 animate-in fade-in-50 duration-200">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold block mb-2">
                          What&apos;s Included:
                        </span>
                        <ul className="space-y-2">
                          {service.whatsIncluded.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#0B0F0D]">
                              <Check className="w-3.5 h-3.5 text-[#0E4B3C] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold block mb-2">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#5B645F]">
                              <Layers className="w-3 h-3 text-[#C9A961] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-2.5 rounded bg-white border border-[#0B0F0D] text-xs text-[#5B645F]">
                        <strong className="text-[#0B0F0D]">Engagement Format:</strong> {service.format}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action: Pre-fill Contact Form */}
                <div className="pt-6 mt-6 border-t-2 border-[#0B0F0D]">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-all shadow-xs border-2 border-[#0B0F0D]"
                  >
                    <span>Enquire About {service.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
