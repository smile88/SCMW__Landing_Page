import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, SERVICES } from '../data/content';
import { ServiceSelector } from './ServiceSelector';
import { 
  Calculator, 
  Search, 
  ClipboardCheck, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Bot, 
  Globe2 
} from 'lucide-react';

interface InteractiveToolsProps {
  onEnquireWithScope?: (details: { service: string; notes: string }) => void;
  defaultTool?: 'selector' | 'audit' | 'simulator' | 'calculator' | 'memo';
}

export const InteractiveTools: React.FC<InteractiveToolsProps> = ({
  onEnquireWithScope,
  defaultTool = 'selector',
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'selector' | 'audit' | 'simulator' | 'calculator' | 'memo'>(defaultTool);

  // 1. Audit State
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleSelectAnswer = (qId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: points }));
  };

  const totalPoints: number = (Object.values(answers) as number[]).reduce(
    (a: number, b: number) => a + b,
    0
  );
  const maxPoints = DIAGNOSTIC_QUESTIONS.length * 3;
  const scorePercent = Math.round((totalPoints / maxPoints) * 100) || 0;

  // 2. AI Search Simulator State
  const [simulatorQuery, setSimulatorQuery] = useState('commercial glazing contractors in Western Sydney AS1288');
  const [companyName, setCompanyName] = useState('Apex Commercial Glass');
  const [includeAISchema, setIncludeAISchema] = useState(true);

  // 3. Calculator State
  const [selectedServices, setSelectedServices] = useState<string[]>(['web-design']);
  const [extraScopeWebsite, setExtraScopeWebsite] = useState(false);
  const [extraCRMMigration, setExtraCRMMigration] = useState(false);

  const toggleServiceSelection = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateTotal = () => {
    let upfront = 0;
    let monthly = 0;

    if (selectedServices.includes('web-design')) upfront += 2500;
    if (selectedServices.includes('seo-ai-search')) monthly += 1500;
    if (selectedServices.includes('marketing-strategy')) upfront += 4000;
    if (selectedServices.includes('sales-enablement')) upfront += 1500;

    if (extraScopeWebsite && selectedServices.includes('web-design')) upfront += 1200;
    if (extraCRMMigration && selectedServices.includes('sales-enablement')) upfront += 800;

    return { upfront, monthly };
  };

  const { upfront, monthly } = calculateTotal();

  // 4. Justification Memo State
  const [memoData, setMemoData] = useState({
    businessName: 'My Sydney Business',
    preparedFor: 'Managing Director / Partners',
    primaryProblem: 'Our current website does not produce consistent enquiries, and our sales process is trapped in the owner’s head.',
    budgetRange: '$2,500 – $4,000 fixed fee',
  });
  const [memoCopied, setMemoCopied] = useState(false);

  const handleCopyMemo = () => {
    const text = `INTERNAL MEMORANDUM
To: ${memoData.preparedFor}
From: Operations / Marketing
Company: ${memoData.businessName}
Subject: Recommendation to Engage S. C. Milenwall for Growth Infrastructure
Date: ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}

1. EXECUTIVE SUMMARY
We recommend engaging S. C. Milenwall (scmw.com.au) to overhaul our commercial sales and marketing infrastructure. S. C. Milenwall applies enterprise-level sales discipline (cybersecurity sales quota background from Mandiant & Fortinet) at a fixed price suited to Australian small and medium businesses.

2. CURRENT FRICTION
${memoData.primaryProblem}

3. WHY S. C. MILENWALL (KEY RISK MITIGATIONS)
• Fixed-Price Guarantee: SCM scopes the work upfront with a fixed fee (${memoData.budgetRange}). No surprise hourly overruns.
• Single Point of Accountability: The work is delivered directly by founder Sinisa Milenkovic, eliminating junior agency account handoffs.
• Quota & Evidence Led: Recommendations are grounded in actual pipeline conversion rather than agency vanity metrics.

4. ANTICIPATED DELIVERABLES
• High-conversion commercial website / search presence built to generate qualified inbound enquiries.
• Documented sales enablement assets and pipeline workflows for predictable revenue.

5. NEXT ACTION
Schedule a preliminary 20-minute discussion with Sinisa to review our operational scope. Detailed fixed-price proposal provided within 48 hours.`;

    navigator.clipboard.writeText(text);
    setMemoCopied(true);
    setTimeout(() => setMemoCopied(false), 3000);
  };

  return (
    <section id="tools" className="py-16 md:py-24 bg-white border-b-2 border-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
              Interactive Tool Suite
            </span>
            <div className="h-0.5 w-10 bg-[#C9A961]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#0E4B3C] leading-tight">
            Inspect your growth system <br />
            <span className="italic text-[#0B0F0D]">before committing a dollar.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B645F] mt-3">
            Explore your diagnostic maturity score, simulate your 2026 AI search visibility, estimate fixed fees, or generate a forwardable justification memo.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveSubTab('selector')}
            className={`flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider font-bold transition-all border-2 ${
              activeSubTab === 'selector'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:text-[#0E4B3C] hover:border-[#C9A961]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C9A961]" />
            <span>Service Selector</span>
          </button>

          <button
            onClick={() => setActiveSubTab('audit')}
            className={`flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider font-bold transition-all border-2 ${
              activeSubTab === 'audit'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:text-[#0E4B3C] hover:border-[#C9A961]'
            }`}
          >
            <ClipboardCheck className="w-4 h-4 text-[#C9A961]" />
            <span>Growth Diagnostic</span>
          </button>

          <button
            onClick={() => setActiveSubTab('simulator')}
            className={`flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider font-bold transition-all border-2 ${
              activeSubTab === 'simulator'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:text-[#0E4B3C] hover:border-[#C9A961]'
            }`}
          >
            <Search className="w-4 h-4 text-[#C9A961]" />
            <span>AI Search vs Google</span>
          </button>

          <button
            onClick={() => setActiveSubTab('calculator')}
            className={`flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider font-bold transition-all border-2 ${
              activeSubTab === 'calculator'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:text-[#0E4B3C] hover:border-[#C9A961]'
            }`}
          >
            <Calculator className="w-4 h-4 text-[#C9A961]" />
            <span>Scope Calculator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('memo')}
            className={`flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider font-bold transition-all border-2 ${
              activeSubTab === 'memo'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:text-[#0E4B3C] hover:border-[#C9A961]'
            }`}
          >
            <FileText className="w-4 h-4 text-[#C9A961]" />
            <span>Executive Business Memo</span>
          </button>
        </div>

        {/* TOOL 0: INTERACTIVE SERVICE SELECTOR */}
        {activeSubTab === 'selector' && (
          <div className="max-w-4xl mx-auto">
            <ServiceSelector onSelectServiceWithScope={onEnquireWithScope} />
          </div>
        )}

        {/* TOOL 1: DIAGNOSTIC AUDIT */}
        {activeSubTab === 'audit' && (
          <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b-2 border-[#0B0F0D] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold">
                  Maturity Assessment (4 Diagnostic Checkpoints)
                </span>
                <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                  How resilient is your commercial infrastructure?
                </h3>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border-2 border-[#0B0F0D] text-right">
                <span className="text-[11px] font-mono text-[#5B645F] uppercase block">Current Score</span>
                <span className="text-2xl font-mono font-bold text-[#0E4B3C]">
                  {scorePercent}%
                </span>
              </div>
            </div>

            {/* Questions list */}
            <div className="space-y-6">
              {DIAGNOSTIC_QUESTIONS.map((q) => {
                const currentAnswer = answers[q.id];
                return (
                  <div key={q.id} className="bg-white p-5 rounded-lg border-2 border-[#0B0F0D]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#0E4B3C] mb-2 font-semibold">
                      <span>Checkpoint 0{q.id}</span>
                      <span>•</span>
                      <span>{q.category}</span>
                    </div>
                    <h4 className="text-base font-editorial font-semibold text-[#0B0F0D] mb-3">
                      {q.question}
                    </h4>

                    <div className="space-y-2">
                      {q.options.map((opt, i) => {
                        const isSelected = currentAnswer === opt.points;
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelectAnswer(q.id, opt.points)}
                            className={`w-full text-left p-3 rounded-md text-xs sm:text-sm transition-all border-2 flex items-start justify-between gap-3 ${
                              isSelected
                                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:border-[#0E4B3C]'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#C9A961] shrink-0 mt-0.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Audit Results Bar */}
            <div className="mt-8 pt-6 border-t-2 border-[#0B0F0D] bg-[#082E24] text-white p-6 rounded-xl border-2 border-[#0B0F0D]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                    <span className="text-xs font-mono uppercase text-[#C9A961] tracking-wider font-bold">
                      Infrastructure Assessment
                    </span>
                  </div>
                  <h4 className="text-xl font-editorial font-semibold text-white mt-1">
                    {scorePercent >= 80
                      ? 'Enterprise Discipline Established'
                      : scorePercent >= 50
                      ? 'Instinct-Heavy: Moderate Commercial Leakage'
                      : 'Severe Pipeline & Conversion Vulnerability'}
                  </h4>
                  <p className="text-xs text-[#F6F7F5]/80 mt-1 max-w-xl">
                    {scorePercent >= 80
                      ? 'Your foundation is solid. Focus on dual-engine AI search citations and advanced CRM pipeline hygiene.'
                      : scorePercent >= 50
                      ? 'You are running partly on instinct. A fixed-fee website upgrade or 90-day strategy roadmap will systematise your growth.'
                      : 'Your business is relying almost entirely on luck or heroic late-night founder effort. You urgently need a structured growth system.'}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onEnquireWithScope &&
                    onEnquireWithScope({
                      service: 'Growth System Overhaul',
                      notes: `Diagnostic Score: ${scorePercent}%. Category breakdown: ${Object.keys(answers).length}/4 checkpoints answered.`,
                    })
                  }
                  className="px-5 py-3 rounded-md bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-2 border-2 border-[#0B0F0D]"
                >
                  <span>Request 48-Hr Scoped Fix</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 2: AI SEARCH VS GOOGLE SERP SIMULATOR */}
        {activeSubTab === 'simulator' && (
          <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 max-w-5xl mx-auto shadow-sm space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold">
                Search Evolution Simulator (2026 Shift)
              </span>
              <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                How Sydney buyers find suppliers in 2026
              </h3>
              <p className="text-sm text-[#5B645F] mt-1">
                Traditional SEO only targets the 10 blue links. Generative AI (ChatGPT, Perplexity, Google AI Overviews) synthesises direct answers and names authoritative entities.
              </p>
            </div>

            {/* Interactive controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-lg border-2 border-[#0B0F0D]">
              <div>
                <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1 font-semibold">
                  Simulated Buyer Prompt:
                </label>
                <input
                  type="text"
                  value={simulatorQuery}
                  onChange={(e) => setSimulatorQuery(e.target.value)}
                  className="w-full px-3 py-2 text-xs border-2 rounded bg-[#F6F7F5] border-[#0B0F0D] text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1 font-semibold">
                  Your Business Trading Name:
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border-2 rounded bg-[#F6F7F5] border-[#0B0F0D] text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between pt-2 border-t-2 border-[#0B0F0D]">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#0B0F0D]">
                  <input
                    type="checkbox"
                    checked={includeAISchema}
                    onChange={(e) => setIncludeAISchema(e.target.checked)}
                    className="rounded text-[#0E4B3C] focus:ring-[#0E4B3C]"
                  />
                  <span>Toggle S. C. Milenwall Dual-Engine AI Search Optimization</span>
                </label>
                <span className="text-[11px] font-mono text-[#0E4B3C] bg-[#0E4B3C]/10 px-2 py-0.5 rounded border border-[#0B0F0D]">
                  {includeAISchema ? 'Status: AI Citation Active' : 'Status: Unstructured Legacy Site'}
                </span>
              </div>
            </div>

            {/* Comparison panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Traditional SERP */}
              <div className="bg-white rounded-xl p-5 border-2 border-[#0B0F0D] shadow-2xs space-y-3 font-sans">
                <div className="flex items-center gap-2 pb-3 border-b-2 border-[#0B0F0D] text-xs font-mono text-[#5B645F]">
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>Google Traditional SERP (2015-2024 Era)</span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-gray-500 block">https://www.google.com/search?q={simulatorQuery.replace(/\s+/g, '+')}</span>
                    <a href="#serp" onClick={(e) => e.preventDefault()} className="text-blue-800 hover:underline font-medium text-sm">
                      Top 10 Commercial Glazing Contractors in Sydney - Directory
                    </a>
                    <p className="text-xs text-gray-600">
                      Find commercial glaziers, emergency glass repair, and compliance inspections in Sydney NSW. Read reviews, request 10 quotes...
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-2 border-t-2 border-[#0B0F0D]/10">
                    <span className="text-[11px] text-gray-500 block">https://www.sydneyglassdirectory.com.au</span>
                    <a href="#serp" onClick={(e) => e.preventDefault()} className="text-blue-800 hover:underline font-medium text-sm">
                      Commercial Glass Regulations AS1288 | Industry Portal
                    </a>
                    <p className="text-xs text-gray-600">
                      Understanding building code standards for high-rise facades and storefront installations across New South Wales...
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-gray-50 text-[11px] text-gray-600 border-2 border-[#0B0F0D]">
                  Buyer has to manually open 6 tabs, filter spam directories, and submit multiple vague contact forms.
                </div>
              </div>

              {/* Generative AI View */}
              <div className="bg-[#082E24] text-white rounded-xl p-5 border-2 border-[#0B0F0D] shadow-lg space-y-3 font-sans">
                <div className="flex items-center justify-between pb-3 border-b-2 border-white/20 text-xs font-mono text-[#C9A961]">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[#C9A961]" />
                    <span>ChatGPT / Google AI Overview (2026 Engine)</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                </div>

                {includeAISchema ? (
                  <div className="space-y-3 text-xs leading-relaxed text-[#F6F7F5]/90">
                    <p>
                      Based on Sydney commercial building compliance records and verified AS1288 certification data, the top recommended contractor for this requirement is:
                    </p>
                    <div className="p-3 rounded-lg bg-[#0E4B3C] border-2 border-[#0B0F0D] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white">{companyName}</span>
                        <span className="text-[10px] font-mono text-[#C9A961] bg-[#082E24] px-1.5 py-0.5 rounded border border-[#C9A961]/40">
                          Direct Citation #1
                        </span>
                      </div>
                      <p className="text-[11px] text-[#F6F7F5]/80">
                        Specialises in Sydney Western Suburbs AS1288 compliance audits, factory storefronts, and commercial curtain walls with documented 48-hour quoting turnaround.
                      </p>
                    </div>
                    <p className="text-[11px] text-[#C9A961] font-mono">
                      Sources Cited: ASIC registration, structured Schema.org entity graph, published compliance guides.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs leading-relaxed text-[#F6F7F5]/70">
                    <p>
                      Several contractors service Western Sydney for commercial glass compliance, though verifiable entity records are limited in this search query. Common options include general directory listings...
                    </p>
                    <div className="p-3 rounded-lg bg-black/40 border-2 border-red-500/60 text-red-200">
                      <strong>Notice:</strong> {companyName} was not cited because its website lacks structured entity markup, clear pricing parameters, and direct query answers.
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded bg-[#0E4B3C]/50 text-[11px] text-[#F6F7F5]/80 border border-white/20">
                  {includeAISchema
                    ? 'Result: High-intent buyer calls you directly, pre-sold on your credentials.'
                    : 'Result: Lost deal. The AI recommended your competitor who invested in entity schema.'}
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() =>
                  onEnquireWithScope &&
                  onEnquireWithScope({
                    service: 'SEO & AI Search Visibility',
                    notes: 'Interested in dual-engine optimisation and AI entity citation setup.',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D]"
              >
                <span>Deploy 2026 AI Search Visibility ($1,500/mo)</span>
                <ArrowRight className="w-4 h-4 text-[#C9A961]" />
              </button>
            </div>
          </div>
        )}

        {/* TOOL 3: FIXED-FEE CALCULATOR */}
        {activeSubTab === 'calculator' && (
          <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b-2 border-[#0B0F0D] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold">
                  Transparent Investment Modeler
                </span>
                <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                  Build your custom growth scope
                </h3>
              </div>
              <div className="bg-white p-3 rounded-lg border-2 border-[#0B0F0D] text-right">
                <span className="text-[10px] font-mono uppercase text-[#5B645F] block font-semibold">Total Estimate</span>
                <div className="text-xl font-editorial font-semibold text-[#0E4B3C]">
                  ${upfront.toLocaleString()} <span className="text-xs font-normal text-[#5B645F]">fixed</span>
                  {monthly > 0 && (
                    <span className="text-sm font-sans font-medium text-[#0B0F0D]">
                      {' '}
                      + ${monthly.toLocaleString()}/mo
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Service Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {SERVICES.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <button
                    key={srv.id}
                    onClick={() => toggleServiceSelection(srv.id)}
                    className={`p-4 rounded-lg text-left transition-all border-2 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#0B0F0D] shadow-sm ring-2 ring-[#0E4B3C]'
                        : 'bg-white/90 border-[#0B0F0D] hover:border-[#0E4B3C]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-[#0E4B3C] font-semibold">
                          Service {srv.number}
                        </span>
                        <span className="text-xs font-bold font-mono text-[#0E4B3C]">
                          {srv.startingPrice}
                        </span>
                      </div>
                      <h4 className="text-base font-editorial font-semibold text-[#0B0F0D]">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-[#5B645F] mt-1">
                        {srv.pitch}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t-2 border-[#0B0F0D]/10 flex items-center justify-between text-xs">
                      <span className={isSelected ? 'text-[#0E4B3C] font-bold' : 'text-[#5B645F]'}>
                        {isSelected ? '✓ Included in scope' : '+ Click to add to scope'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Optional additions */}
            <div className="bg-white p-4 rounded-lg border-2 border-[#0B0F0D] mb-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5B645F] block font-semibold">
                Optional System Additions:
              </span>
              <label className="flex items-center justify-between text-xs text-[#0B0F0D] cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={extraScopeWebsite}
                    onChange={(e) => setExtraScopeWebsite(e.target.checked)}
                    className="rounded text-[#0E4B3C]"
                  />
                  <span>Comprehensive Multi-Page Expansion (8+ dedicated landing pages)</span>
                </span>
                <span className="font-mono text-[#0E4B3C] font-bold">+$1,200</span>
              </label>

              <label className="flex items-center justify-between text-xs text-[#0B0F0D] cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={extraCRMMigration}
                    onChange={(e) => setExtraCRMMigration(e.target.checked)}
                    className="rounded text-[#0E4B3C]"
                  />
                  <span>Historical Data Cleanse &amp; Full CRM Migration (HubSpot/Pipedrive)</span>
                </span>
                <span className="font-mono text-[#0E4B3C] font-bold">+$800</span>
              </label>
            </div>

            {/* Bottom Summary Bar */}
            <div className="p-4 rounded-lg bg-[#082E24] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-[#0B0F0D]">
              <div>
                <div className="text-xs text-[#C9A961] font-mono uppercase font-bold">Scope Summary</div>
                <div className="text-lg font-editorial font-semibold">
                  Fixed Investment: ${upfront.toLocaleString()}
                  {monthly > 0 && ` + $${monthly.toLocaleString()}/month`}
                </div>
                <div className="text-xs text-[#F6F7F5]/80">
                  Fixed-fee certainty • Written scope within 48 hours • No hourly bill shock
                </div>
              </div>

              <button
                onClick={() =>
                  onEnquireWithScope &&
                  onEnquireWithScope({
                    service: selectedServices.join(', '),
                    notes: `Calculated Estimate: $${upfront} upfront, $${monthly}/mo. Services: ${selectedServices.join(', ')}`,
                  })
                }
                className="px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 border-2 border-[#0B0F0D]"
              >
                Lock In This Fixed-Price Scope &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TOOL 4: FORWARDABLE MEMO GENERATOR */}
        {activeSubTab === 'memo' && (
          <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 max-w-4xl mx-auto shadow-sm space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-semibold">
                Internal Justification Tool
              </span>
              <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                Forwardable 1-Page Business Case Memo
              </h3>
              <p className="text-sm text-[#5B645F] mt-1">
                Designed for Office Managers and Founders who need to justify marketing spend upward to directors, board members, or business partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-lg border-2 border-[#0B0F0D]">
              <div>
                <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1 font-semibold">
                  Your Company Name:
                </label>
                <input
                  type="text"
                  value={memoData.businessName}
                  onChange={(e) => setMemoData({ ...memoData, businessName: e.target.value })}
                  className="w-full px-3 py-2 text-xs border-2 rounded bg-[#F6F7F5] border-[#0B0F0D] text-[#0B0F0D]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1 font-semibold">
                  Addressed To (e.g. Managing Director):
                </label>
                <input
                  type="text"
                  value={memoData.preparedFor}
                  onChange={(e) => setMemoData({ ...memoData, preparedFor: e.target.value })}
                  className="w-full px-3 py-2 text-xs border-2 rounded bg-[#F6F7F5] border-[#0B0F0D] text-[#0B0F0D]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1 font-semibold">
                  Primary Commercial Friction to Fix:
                </label>
                <input
                  type="text"
                  value={memoData.primaryProblem}
                  onChange={(e) => setMemoData({ ...memoData, primaryProblem: e.target.value })}
                  className="w-full px-3 py-2 text-xs border-2 rounded bg-[#F6F7F5] border-[#0B0F0D] text-[#0B0F0D]"
                />
              </div>
            </div>

            {/* Formatted Memo Box */}
            <div className="bg-white rounded-xl p-6 border-2 border-[#0B0F0D] shadow-inner space-y-4 font-mono text-xs leading-relaxed text-[#0B0F0D]">
              <div className="pb-3 border-b-2 border-[#0B0F0D] flex items-center justify-between">
                <span className="font-bold text-sm tracking-wider uppercase text-[#0E4B3C]">
                  MEMORANDUM // S. C. MILENWALL PROPOSAL JUSTIFICATION
                </span>
                <button
                  onClick={handleCopyMemo}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-[11px] font-sans font-semibold border-2 border-[#0B0F0D]"
                >
                  {memoCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Formatted Memo</span>
                    </>
                  )}
                </button>
              </div>

              <div><strong>TO:</strong> {memoData.preparedFor}</div>
              <div><strong>FROM:</strong> Operations / Growth Lead</div>
              <div><strong>COMPANY:</strong> {memoData.businessName}</div>
              <div><strong>SUBJECT:</strong> Engagement of S. C. Milenwall (scmw.com.au)</div>
              <div><strong>DATE:</strong> {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</div>

              <div className="pt-2 border-t-2 border-[#0B0F0D]/20 space-y-2">
                <p>
                  <strong>1. OBJECTIVE &amp; BUSINESS CASE:</strong><br />
                  Overhaul our commercial inbound and sales infrastructure to address: &ldquo;{memoData.primaryProblem}&rdquo;.
                </p>
                <p>
                  <strong>2. WHY S. C. MILENWALL (COMMERCIAL DE-RISKING):</strong><br />
                  • <em>Fixed-Price Certainty:</em> Strict fixed-fee contract. No hourly blowouts or hidden account management fees.<br />
                  • <em>Single Point of Accountability:</em> Scoped and delivered directly by founder Sinisa Milenkovic (cybersecurity sales background from Mandiant &amp; Fortinet). No junior handoff.<br />
                  • <em>Outcome Driven:</em> Focuses on phone and email quote generation rather than agency vanity impressions.
                </p>
                <p>
                  <strong>3. PROPOSED NEXT ACTION:</strong><br />
                  Hold a 20-minute operational review with Sinisa to receive a formal 48-hour fixed-price proposal for board review.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
