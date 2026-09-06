import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Search,
  Cpu,
  Globe,
  Database,
  Users,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Clock,
  Zap,
  Target,
  FileCheck,
} from 'lucide-react';

interface InfographicsViewProps {
  onSelectService?: (serviceId: string) => void;
  onBookCall?: () => void;
}

export const InfographicsView: React.FC<InfographicsViewProps> = ({
  onSelectService,
  onBookCall,
}) => {
  const [selectedInfographic, setSelectedInfographic] = useState<'comparison' | 'architecture' | 'funnel'>('comparison');
  const [selectedTopologyNode, setSelectedTopologyNode] = useState<string>('entity-core');
  const [activeFunnelStage, setActiveFunnelStage] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Sub-tab switcher */}
      <div className="flex flex-wrap gap-2 pb-4 border-b-2 border-[#0B0F0D]">
        <button
          onClick={() => setSelectedInfographic('comparison')}
          className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border-2 ${
            selectedInfographic === 'comparison'
              ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
              : 'bg-white text-[#0B0F0D] border-[#0B0F0D] hover:bg-[#F6F7F5]'
          }`}
        >
          <span>Infographic 01: Agency Trap vs. Milenwall Model</span>
        </button>

        <button
          onClick={() => setSelectedInfographic('architecture')}
          className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border-2 ${
            selectedInfographic === 'architecture'
              ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
              : 'bg-white text-[#0B0F0D] border-[#0B0F0D] hover:bg-[#F6F7F5]'
          }`}
        >
          <span>Infographic 02: Dual-Engine AI Search Topology</span>
        </button>

        <button
          onClick={() => setSelectedInfographic('funnel')}
          className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border-2 ${
            selectedInfographic === 'funnel'
              ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
              : 'bg-white text-[#0B0F0D] border-[#0B0F0D] hover:bg-[#F6F7F5]'
          }`}
        >
          <span>Infographic 03: 4-Stage Revenue Architecture Pipeline</span>
        </button>
      </div>

      {/* INFOGRAPHIC 1: AGENCY TRAP VS MILENWALL MODEL */}
      {selectedInfographic === 'comparison' && (
        <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
              Infographic 01 // Structural Misalignment Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
              The Agency Retainer Trap vs. The S. C. Milenwall Operating Model
            </h3>
            <p className="text-sm text-[#5B645F] mt-2 leading-relaxed">
              Australian businesses routinely waste tens of thousands on monthly marketing retainers because the agency’s business model rewards logged hours and retention, not pipeline creation.
            </p>
          </div>

          {/* Comparative Matrix Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* The Agency Retainer Trap Card */}
            <div className="rounded-xl border-2 border-[#0B0F0D] bg-[#FFF5F5] p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-red-200">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-editorial font-bold text-lg text-[#0B0F0D]">The Agency Retainer Model</span>
                </div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold border border-red-300">
                  Misaligned Incentives
                </span>
              </div>

              <div className="space-y-4 text-xs font-sans text-[#0B0F0D]">
                <div className="p-3 bg-white rounded-lg border-2 border-red-200">
                  <div className="font-bold text-red-800 uppercase font-mono text-[11px] mb-1">01. Pricing &amp; Financial Risk</div>
                  <p className="text-[#5B645F] leading-relaxed">
                    Open-ended monthly retainers ($3,000–$6,000/mo). Client absorbs all financial risk for delays and unproductive hours.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border-2 border-red-200">
                  <div className="font-bold text-red-800 uppercase font-mono text-[11px] mb-1">02. Account Staffing &amp; Delivery</div>
                  <p className="text-[#5B645F] leading-relaxed">
                    Senior director pitches; execution is handed to junior account managers juggling 15–20 accounts simultaneously with high employee churn.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border-2 border-red-200">
                  <div className="font-bold text-red-800 uppercase font-mono text-[11px] mb-1">03. Metrics Reported to Board</div>
                  <p className="text-[#5B645F] leading-relaxed">
                    Vanity impressions, raw clicks, and automated PDF keyword ranking graphs that have zero direct correlation with bank deposits.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border-2 border-red-200">
                  <div className="font-bold text-red-800 uppercase font-mono text-[11px] mb-1">04. Delivery Velocity</div>
                  <p className="text-[#5B645F] leading-relaxed">
                    Website redesigns drag out across 4 to 8 months due to endless client revision loops and vague scope definitions.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-red-100 border border-red-300 text-xs font-mono text-red-900">
                <strong>Annual Capital Drain:</strong> $36,000–$72,000+ per year with zero guaranteed scope completion.
              </div>
            </div>

            {/* S. C. Milenwall Operating Model Card */}
            <div className="rounded-xl border-2 border-[#0B0F0D] bg-[#082E24] text-white p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-white/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span className="font-editorial font-bold text-lg text-white">S. C. Milenwall Operating Model</span>
                </div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#0E4B3C] text-[#C9A961] font-bold border border-[#C9A961]/40">
                  Disciplined Revenue Systems
                </span>
              </div>

              <div className="space-y-4 text-xs font-sans text-[#F6F7F5]">
                <div className="p-3 bg-[#0B0F0D]/60 rounded-lg border-2 border-[#0B0F0D]">
                  <div className="font-bold text-[#C9A961] uppercase font-mono text-[11px] mb-1">01. Pricing &amp; Financial Risk</div>
                  <p className="text-[#F6F7F5]/90 leading-relaxed">
                    Guaranteed fixed-price milestone contracts ($2,500 websites, $1,500 sales systems). Milenwall carries the risk of timely completion.
                  </p>
                </div>

                <div className="p-3 bg-[#0B0F0D]/60 rounded-lg border-2 border-[#0B0F0D]">
                  <div className="font-bold text-[#C9A961] uppercase font-mono text-[11px] mb-1">02. Account Staffing &amp; Delivery</div>
                  <p className="text-[#F6F7F5]/90 leading-relaxed">
                    Direct execution by founder Sinisa Milenkovic (Ex-Mandiant, Fortinet enterprise quota holder). Absolute accountability, zero handoff.
                  </p>
                </div>

                <div className="p-3 bg-[#0B0F0D]/60 rounded-lg border-2 border-[#0B0F0D]">
                  <div className="font-bold text-[#C9A961] uppercase font-mono text-[11px] mb-1">03. Metrics Reported to Board</div>
                  <p className="text-[#F6F7F5]/90 leading-relaxed">
                    Phone enquiries, qualified quote requests, deal velocity, and pipeline conversion rates tracked live in your CRM.
                  </p>
                </div>

                <div className="p-3 bg-[#0B0F0D]/60 rounded-lg border-2 border-[#0B0F0D]">
                  <div className="font-bold text-[#C9A961] uppercase font-mono text-[11px] mb-1">04. Delivery Velocity</div>
                  <p className="text-[#F6F7F5]/90 leading-relaxed">
                    Turnkey websites deployed in 2–3 weeks; strategic 90-day roadmaps finalized within 14 business days.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0E4B3C] border-2 border-[#0B0F0D] text-xs font-mono text-[#C9A961]">
                <strong>Economic Outcome:</strong> Upfront fixed investment • Predictable cash flow • 3.4x capital efficiency.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INFOGRAPHIC 2: DUAL-ENGINE AI SEARCH TOPOLOGY */}
      {selectedInfographic === 'architecture' && (
        <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
              Infographic 02 // Generative Engine Optimization (GEO) Schematic
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
              Dual-Engine Search &amp; Entity Retrieval Topology (2026)
            </h3>
            <p className="text-sm text-[#5B645F] mt-2 leading-relaxed">
              Visualizing how Australian commercial buyers are routed through traditional Google SERP crawlers and Generative LLMs (ChatGPT, Perplexity, Google AI Overviews) via SCM’s Entity Authority Core.
            </p>
          </div>

          {/* Interactive Topology Diagram */}
          <div className="bg-[#082E24] text-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-8 space-y-6">
            <div className="text-center max-w-lg mx-auto pb-4 border-b-2 border-white/20">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9A961] font-bold">
                Inbound Buyer Discovery Request
              </span>
              <div className="text-base sm:text-lg font-editorial font-semibold text-white mt-1">
                &ldquo;Who is a reliable commercial supplier in Sydney NSW with fixed pricing?&rdquo;
              </div>
            </div>

            {/* Split Flow: Two Search Paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Path A: Traditional Google Search Engine */}
              <div className="bg-[#0B0F0D]/70 p-5 rounded-xl border-2 border-[#0B0F0D] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C9A961] uppercase font-bold">
                  <Search className="w-4 h-4" />
                  <span>Path A: Google Organic Search Index</span>
                </div>
                <div className="space-y-2 text-xs text-[#F6F7F5]/85">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>Googlebot Crawl Rate</span>
                    <span className="font-mono text-[#C9A961]">Weekly index refresh</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>Core Web Vitals Pass</span>
                    <span className="font-mono text-[#C9A961]">Under 1.2s LCP</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>Local Map Pack Rank</span>
                    <span className="font-mono text-[#C9A961]">Top 3 Sydney Grid</span>
                  </div>
                </div>
              </div>

              {/* Path B: Generative AI Answer Engine */}
              <div className="bg-[#0B0F0D]/70 p-5 rounded-xl border-2 border-[#0B0F0D] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C9A961] uppercase font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>Path B: ChatGPT / Perplexity / Gemini GEO</span>
                </div>
                <div className="space-y-2 text-xs text-[#F6F7F5]/85">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>RAG Knowledge Retrieval</span>
                    <span className="font-mono text-[#C9A961]">Zero-click answer synthesis</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>ASIC Entity Validation</span>
                    <span className="font-mono text-[#C9A961]">ABN / ACN match</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span>Conversational Citation</span>
                    <span className="font-mono text-[#C9A961]">Direct brand recommendation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Convergence: The SCM Entity Authority Core */}
            <div className="bg-white text-[#0B0F0D] p-6 rounded-xl border-2 border-[#0B0F0D] shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#0B0F0D] gap-2">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#0E4B3C]" />
                  <span className="font-editorial font-bold text-lg text-[#0B0F0D]">
                    The S. C. Milenwall Entity Authority Core
                  </span>
                </div>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-[#0E4B3C] text-white font-bold border-2 border-[#0B0F0D]">
                  Dual-Engine Convergence
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#F6F7F5] rounded-lg border-2 border-[#0B0F0D]">
                  <div className="text-[#0E4B3C] font-bold uppercase mb-1">01. Schema.org Entity Graph</div>
                  <p className="text-[#5B645F] font-sans">
                    Structured ProfessionalService &amp; Founder JSON-LD schema embedded across every route.
                  </p>
                </div>
                <div className="p-3 bg-[#F6F7F5] rounded-lg border-2 border-[#0B0F0D]">
                  <div className="text-[#0E4B3C] font-bold uppercase mb-1">02. Sydney Geo-Coordinates</div>
                  <p className="text-[#5B645F] font-sans">
                    Explicit postal code, service boundaries, and commercial radius satisfying Australian local intent.
                  </p>
                </div>
                <div className="p-3 bg-[#F6F7F5] rounded-lg border-2 border-[#0B0F0D]">
                  <div className="text-[#0E4B3C] font-bold uppercase mb-1">03. Sub-1.2s Static Payload</div>
                  <p className="text-[#5B645F] font-sans">
                    Instant rendering preventing AI web crawler timeouts during generative citation synthesis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INFOGRAPHIC 3: 4-STAGE REVENUE PIPELINE */}
      {selectedInfographic === 'funnel' && (
        <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
              Infographic 03 // Conversion Funnel Velocity
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
              The 4-Stage Inbound-to-Contract Revenue Pipeline
            </h3>
            <p className="text-sm text-[#5B645F] mt-2 leading-relaxed">
              Enterprise sales discipline adapted for Australian SMBs. Every inquiry moves through four non-negotiable stages with strict SLAs to eliminate pipeline drop-off.
            </p>
          </div>

          {/* 4 Pipeline Stage Steppers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                name: 'Anonymous Inbound Traffic',
                sla: 'Under 1.2s initial paint',
                benchmark: '100% of Visitors',
                desc: 'Buyer discovers your site via Google SEO, AI citation, or direct referral. Transparent pricing filters unviable leads immediately.',
                color: 'border-[#0B0F0D] bg-white',
              },
              {
                step: '02',
                name: 'Inbound Inquiry & Form Push',
                sla: 'Instant CRM Notification',
                benchmark: '4%–6% Conversion Rate',
                desc: 'Buyer submits project parameters or requests call. Automated webhook pushes inquiry directly into HubSpot/Pipedrive stages.',
                color: 'border-[#0B0F0D] bg-[#F6F7F5]',
              },
              {
                step: '03',
                name: '7-Minute Discovery Call',
                sla: 'Under 4 hours response SLA',
                benchmark: '68% Qualified Rate',
                desc: 'Rep applies 5-question enterprise script. Non-viable prospects are disqualified gracefully before proposal hours are burned.',
                color: 'border-[#0B0F0D] bg-[#0E4B3C]/10',
              },
              {
                step: '04',
                name: 'Fixed-Price Proposal Contract',
                sla: 'Within 48 hours guaranteed',
                benchmark: '74% Close Rate',
                desc: 'Client receives a written fixed-fee scope with defined milestones and SLAs. No hourly ambiguity. Immediate kickoff.',
                color: 'border-[#0B0F0D] bg-[#082E24] text-white',
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFunnelStage(idx)}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${stage.color} ${
                  activeFunnelStage === idx ? 'ring-2 ring-[#0E4B3C] shadow-md' : 'hover:border-[#0E4B3C]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#C9A961]">STAGE {stage.step}</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/10 font-semibold">
                    {stage.benchmark}
                  </span>
                </div>
                <h4 className="font-editorial font-bold text-base leading-snug">{stage.name}</h4>
                <div className="mt-3 pt-3 border-t border-black/10 space-y-1 text-xs">
                  <div className="font-mono font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A961]" />
                    <span>SLA: {stage.sla}</span>
                  </div>
                  <p className="text-xs opacity-80 mt-1 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="bg-[#F6F7F5] p-5 rounded-xl border-2 border-[#0B0F0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#0E4B3C] font-bold block">
                Total Cycle Velocity Benchmark
              </span>
              <p className="text-xs text-[#5B645F] mt-0.5">
                From initial web search to executed fixed-price agreement: <strong>average 6 to 12 business days</strong> (vs. 45+ days in traditional agency RFPs).
              </p>
            </div>
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] shrink-0 transition-colors shadow-sm"
            >
              <span>Audit Your Inbound Funnel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
