import React, { useState } from 'react';
import { Globe, Search, Compass, Target, ArrowRight, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';

interface SystemsGraphicProps {
  onSelectService?: (serviceId: string) => void;
}

export const SystemsGraphic: React.FC<SystemsGraphicProps> = ({ onSelectService }) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const systemNodes = [
    {
      id: 'web-design',
      title: '01. Inbound Capture Engine',
      serviceName: 'Website Design & Development',
      badge: 'Conversion Core',
      metric: 'Under 1.2s Load • Mobile-First',
      description: 'A clean, high-conversion web presence that turns passive Sydney visitors into qualified commercial enquiries.',
      specs: ['WCAG AA Contrast', 'Zero-bloat architecture', 'Direct CRM lead push', 'Clear pricing transparency'],
      icon: Globe,
    },
    {
      id: 'seo-ai-search',
      title: '02. Dual-Engine Visibility',
      serviceName: 'SEO & AI Search Visibility',
      badge: 'Generative + SERP',
      metric: 'Google #1 + ChatGPT Citation',
      description: 'Structured entity architecture that satisfies traditional Google search crawlers and generative AI answer engines.',
      specs: ['Schema.org entity markup', 'Sydney local intent capture', 'Conversational query readiness', 'Zero vanity backlinks'],
      icon: Search,
    },
    {
      id: 'marketing-strategy',
      title: '03. 90-Day Execution Roadmap',
      serviceName: 'Marketing Strategy & Positioning',
      badge: 'Commercial Clarity',
      metric: '1-Page Operational Plan',
      description: 'Rigorous commercial positioning that eliminates wasted marketing spend and dictates exact fortnightly milestones.',
      specs: ['Two-channel focus only', 'Competitive differentiation', 'Buyer persona playbook', 'Fixed budget allocation'],
      icon: Compass,
    },
    {
      id: 'sales-enablement',
      title: '04. Pipeline Infrastructure',
      serviceName: 'Sales Enablement & Systems',
      badge: 'Quota Discipline',
      metric: 'Repeatable Close Cycle',
      description: 'Enterprise cybersecurity sales processes adapted for SMB teams: qualification scripts, CRM stages, and deal hygiene.',
      specs: ['HubSpot / Pipedrive setup', 'Standardised proposal kit', '7-minute disqualification test', 'Rep onboarding cadence'],
      icon: Target,
    },
  ];

  return (
    <div className="w-full bg-[#082E24] text-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Structural ledger background lines */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />
      
      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b-2 border-white/20 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C9A961]">
              System Architecture Schema
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-editorial font-semibold text-white">
            The Integrated Growth Infrastructure
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#F6F7F5]/70 font-mono">Status: Production Spec</span>
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#0E4B3C] border-2 border-[#0B0F0D] text-[#C9A961] font-bold">
            Enterprise-Grade
          </span>
        </div>
      </div>

      {/* Interactive System Flow Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: 4 Interconnected Pipeline Stages */}
        <div className="lg:col-span-5 space-y-3">
          {systemNodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode === index;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-2 flex items-start gap-4 ${
                  isSelected
                    ? 'bg-[#0E4B3C] border-[#C9A961] shadow-md'
                    : 'bg-[#0B0F0D]/40 border-[#0B0F0D] hover:border-[#C9A961] hover:bg-[#0B0F0D]/70'
                }`}
              >
                <div
                  className={`p-2.5 rounded-md shrink-0 border border-[#0B0F0D] ${
                    isSelected ? 'bg-[#C9A961] text-[#0B0F0D]' : 'bg-[#082E24] text-[#C9A961]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-[#C9A961] tracking-wider uppercase font-bold">
                      {node.title.split(' ')[0]}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#082E24] text-[#F6F7F5]/80 border border-[#0B0F0D]">
                      {node.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-editorial font-medium text-white truncate">
                    {node.serviceName}
                  </h4>
                  <p className="text-xs text-[#F6F7F5]/70 font-sans mt-0.5 line-clamp-1">
                    {node.metric}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Center: Interactive Schematic Inspection View */}
        <div className="lg:col-span-7 bg-[#0B0F0D]/80 rounded-xl border-2 border-[#0B0F0D] p-6 relative">
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-white/20">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#C9A961]" />
              <span className="text-xs font-mono tracking-wider text-[#C9A961] uppercase font-bold">
                Sub-System Analysis
              </span>
            </div>
            <span className="text-xs font-mono text-[#F6F7F5]/60">
              Module {activeNode + 1} of 4
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-[#C9A961] uppercase tracking-wider block mb-1">
                {systemNodes[activeNode].title}
              </span>
              <h4 className="text-2xl font-editorial font-semibold text-white">
                {systemNodes[activeNode].serviceName}
              </h4>
              <p className="text-sm text-[#F6F7F5]/85 mt-2 leading-relaxed">
                {systemNodes[activeNode].description}
              </p>
            </div>

            {/* Benchmark metric block */}
            <div className="bg-[#082E24] p-3.5 rounded-lg border-2 border-[#0B0F0D] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#F6F7F5]/60 font-mono block font-semibold">
                  Core Performance Benchmark
                </span>
                <span className="text-sm font-semibold text-[#C9A961] font-mono">
                  {systemNodes[activeNode].metric}
                </span>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#C9A961]" />
            </div>

            {/* Specifications list */}
            <div>
              <span className="text-xs font-mono text-[#F6F7F5]/70 uppercase tracking-wider block mb-2 font-semibold">
                Discipline Checkpoints
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {systemNodes[activeNode].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F6F7F5]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A961] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct action button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectService && onSelectService(systemNodes[activeNode].id)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] transition-colors border-2 border-[#0B0F0D]"
              >
                <span>View Full {systemNodes[activeNode].serviceName} Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
