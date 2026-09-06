import React, { useState } from 'react';
import { PERSONAS } from '../data/content';
import { Check, ArrowRight, UserCheck, Briefcase, FileText, Wrench } from 'lucide-react';

interface BuyerPersonasProps {
  onSelectService: (serviceName: string) => void;
  onOpenJustificationTool?: (personaId: string) => void;
}

export const BuyerPersonas: React.FC<BuyerPersonasProps> = ({
  onSelectService,
  onOpenJustificationTool,
}) => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('owner-operator');

  const activePersona = PERSONAS.find((p) => p.id === selectedPersonaId) || PERSONAS[0];

  const getPersonaIcon = (id: string) => {
    switch (id) {
      case 'owner-operator':
        return Wrench;
      case 'growth-founder':
        return Briefcase;
      case 'office-manager':
        return FileText;
      default:
        return UserCheck;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F7F5] border-b-2 border-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#0E4B3C]/10 mb-3 border-2 border-[#0B0F0D]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
              Who We Work Best With
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-editorial font-semibold text-[#0B0F0D]">
            Which of these sounds like your current situation?
          </h2>
          <p className="text-[#5B645F] text-base mt-2">
            We don’t treat businesses with generic boilerplate. Choose your operational profile below to see our tailored fixed-scope recommendation.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {PERSONAS.map((persona) => {
            const Icon = getPersonaIcon(persona.id);
            const isSelected = selectedPersonaId === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => setSelectedPersonaId(persona.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-medium transition-all text-left border-2 border-[#0B0F0D] ${
                  isSelected
                    ? 'bg-[#0E4B3C] text-white shadow-md'
                    : 'bg-white text-[#0B0F0D] hover:bg-[#F6F7F5]'
                }`}
              >
                <div
                  className={`p-2 rounded border border-[#0B0F0D] ${
                    isSelected ? 'bg-[#C9A961] text-[#0B0F0D]' : 'bg-[#F6F7F5] text-[#0E4B3C]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{persona.title}</div>
                  <div className={`text-[11px] ${isSelected ? 'text-white/70' : 'text-[#5B645F]'}`}>
                    {persona.subtitle.split(',')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Persona Analysis Card */}
        <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 shadow-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Persona context & pain points */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#0E4B3C] font-semibold uppercase tracking-wider">
                  Operational Reality
                </span>
                <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                  {activePersona.title}
                </h3>
                <p className="text-xs font-medium text-[#5B645F] mt-0.5">
                  {activePersona.subtitle}
                </p>
                <p className="text-[#0B0F0D]/90 text-sm sm:text-base leading-relaxed mt-3">
                  {activePersona.description}
                </p>
              </div>

              {/* Recurring Pain Points */}
              <div className="space-y-2 pt-4 border-t-2 border-[#0B0F0D]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B645F] block mb-1">
                  Specific Friction We Eliminate:
                </span>
                {activePersona.painPoints.map((pain, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B0F0D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SCM Recommendation Box */}
            <div className="lg:col-span-5 bg-[#082E24] text-white rounded-xl p-6 border-2 border-[#0B0F0D] flex flex-col justify-between space-y-6 shadow-md">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                  <span className="text-xs font-mono uppercase text-[#C9A961] tracking-wider font-semibold">
                    The SCM Architecture
                  </span>
                </div>
                <h4 className="text-lg font-editorial font-semibold text-white">
                  Tailored System Fit
                </h4>
                <p className="text-xs text-[#F6F7F5]/80 mt-2 leading-relaxed">
                  {activePersona.whatSCMProvides}
                </p>

                <div className="mt-4 p-3 rounded-lg bg-[#0E4B3C] border border-[#C9A961]">
                  <span className="text-[11px] font-mono text-[#C9A961] uppercase block">
                    Recommended Starting Scope
                  </span>
                  <span className="text-sm font-semibold text-white block mt-0.5">
                    {activePersona.recommendedService}
                  </span>
                </div>

                <div className="mt-3 flex items-start gap-2 text-xs text-[#F6F7F5]/90">
                  <Check className="w-4 h-4 text-[#C9A961] shrink-0 mt-0.5" />
                  <span><strong>Expected outcome:</strong> {activePersona.idealOutcome}</span>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-[#C9A961]/40 flex flex-col gap-2.5">
                <button
                  onClick={() => onSelectService(activePersona.recommendedService)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-semibold text-xs transition-colors border-2 border-[#0B0F0D]"
                >
                  <span>Enquire for {activePersona.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {activePersona.id === 'office-manager' && onOpenJustificationTool && (
                  <button
                    onClick={() => onOpenJustificationTool(activePersona.id)}
                    className="w-full text-center text-xs text-[#C9A961] underline hover:text-white transition-colors"
                  >
                    Generate 1-Page Forwardable Business Case Memo &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
