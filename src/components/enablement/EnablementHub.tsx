import React, { useState } from 'react';
import { WHITEPAPERS, INFOSHEETS, INFOGRAPHICS } from '../../data/enablementData';
import { WhitepaperItem, InfosheetItem } from '../../types';
import { WhitepaperReaderModal } from './WhitepaperReaderModal';
import { InfosheetModal } from './InfosheetModal';
import { InfographicsView } from './InfographicsView';
import { SalesBattlecards } from './SalesBattlecards';
import {
  FileText,
  FileSpreadsheet,
  BarChart3,
  MessageSquare,
  Printer,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Download,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface EnablementHubProps {
  onSelectService?: (serviceId: string) => void;
  onBookCall?: () => void;
  defaultFilter?: 'all' | 'whitepapers' | 'infosheets' | 'infographics' | 'battlecards';
}

export const EnablementHub: React.FC<EnablementHubProps> = ({
  onSelectService,
  onBookCall = () => {},
  defaultFilter = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'whitepapers' | 'infosheets' | 'infographics' | 'battlecards'>(
    defaultFilter
  );
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<WhitepaperItem | null>(null);
  const [selectedInfosheet, setSelectedInfosheet] = useState<InfosheetItem | null>(null);

  return (
    <div className="w-full space-y-12">
      {/* Top Filter & Category Bar */}
      <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-4 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 ${
              activeFilter === 'all'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            All Collateral ({WHITEPAPERS.length + INFOSHEETS.length + INFOGRAPHICS.length + 1})
          </button>

          <button
            onClick={() => setActiveFilter('whitepapers')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 flex items-center gap-1.5 ${
              activeFilter === 'whitepapers'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Whitepapers ({WHITEPAPERS.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('infosheets')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 flex items-center gap-1.5 ${
              activeFilter === 'infosheets'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Executive 1-Pagers ({INFOSHEETS.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('infographics')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 flex items-center gap-1.5 ${
              activeFilter === 'infographics'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Infographics ({INFOGRAPHICS.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('battlecards')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 flex items-center gap-1.5 ${
              activeFilter === 'battlecards'
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Objection Battlecards</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#5B645F] shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-[#0E4B3C]" />
          <span>All assets formatted for print &amp; PDF export</span>
        </div>
      </div>

      {/* SECTION 1: EXECUTIVE WHITEPAPERS */}
      {(activeFilter === 'all' || activeFilter === 'whitepapers') && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#0B0F0D] gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
                  Executive Research &amp; Operations Series
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E4B3C] text-white font-bold border border-[#0B0F0D]">
                  2 In-Depth Papers
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
                Strategic Whitepapers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B645F] max-w-md text-left sm:text-right">
              Empirical playbooks written in Australian English analyzing the economics of agency retainers, pipeline conversion, and 2026 AI search retrieval.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {WHITEPAPERS.map((wp) => (
              <div
                key={wp.id}
                className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0E4B3C] font-bold">
                      {wp.code}
                    </span>
                    <span className="text-xs font-mono text-[#5B645F]">
                      {wp.readTime} • {wp.pages} Pages
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-editorial font-bold text-[#0B0F0D] leading-snug">
                      {wp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B645F] mt-1 font-sans leading-relaxed">
                      {wp.subtitle}
                    </p>
                  </div>

                  {/* Empirical Stat Box */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[#F6F7F5] border-2 border-[#0B0F0D]">
                    {wp.keyMetrics.map((km, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-editorial font-bold text-[#0E4B3C]">{km.value}</div>
                        <div className="text-[10px] font-mono text-[#0B0F0D] font-bold truncate">{km.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#0B0F0D] leading-relaxed line-clamp-3">
                    {wp.abstract}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t-2 border-[#0B0F0D]/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono text-[#5B645F] hidden sm:inline">
                    By {wp.author.split('(')[0].trim()}
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    <a
                      href={wp.id === 'enterprise-quota-to-smb' ? '/assets/collateral/whitepaper-pipeline-discipline.html' : '/assets/collateral/whitepaper-ai-search-2026.html'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#F6F7F5] hover:bg-white text-[#0B0F0D] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors"
                      title="Open standalone printable document / Save PDF"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#0E4B3C]" />
                      <span className="hidden md:inline">Print/PDF</span>
                    </a>
                    <button
                      onClick={() => setSelectedWhitepaper(wp)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Read Paper</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: EXECUTIVE INFOSHEETS & ONE-PAGERS */}
      {(activeFilter === 'all' || activeFilter === 'infosheets') && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#0B0F0D] gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
                  Printable Reference Briefings
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E4B3C] text-white font-bold border border-[#0B0F0D]">
                  3 Executive 1-Pagers
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
                Executive Infosheets &amp; Scorecards
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B645F] max-w-md text-left sm:text-right">
              One-page briefing documents formatted specifically for board reviews, internal justification, and sales qualification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFOSHEETS.map((info) => (
              <div
                key={info.id}
                className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0E4B3C]/10 text-[#0E4B3C] font-bold border border-[#0B0F0D]">
                      {info.code}
                    </span>
                    <span className="text-[11px] font-mono text-[#5B645F] uppercase">
                      {info.format}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-editorial font-bold text-[#0B0F0D] leading-snug">
                      {info.title}
                    </h3>
                    <div className="text-xs font-mono text-[#0E4B3C] font-semibold mt-1">
                      Audience: {info.audience}
                    </div>
                  </div>

                  <p className="text-xs text-[#5B645F] leading-relaxed line-clamp-3">
                    {info.summary}
                  </p>

                  {/* Highlights Mini-List */}
                  <div className="space-y-2 pt-2 border-t border-[#0B0F0D]/10 text-xs">
                    {info.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4B3C] shrink-0 mt-0.5" />
                        <span className="font-sans text-[#0B0F0D]">
                          <strong>{hl.label}:</strong> {hl.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t-2 border-[#0B0F0D]/10 flex items-center gap-2">
                  <a
                    href={
                      info.id === 'fixed-price-guarantee'
                        ? '/assets/collateral/infosheet-fixed-price-guarantee.html'
                        : info.id === 'dual-search-matrix'
                        ? '/assets/collateral/infosheet-dual-search-matrix.html'
                        : '/assets/collateral/infosheet-sales-playbook.html'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded bg-[#F6F7F5] hover:bg-white text-[#0B0F0D] border-2 border-[#0B0F0D] transition-colors"
                    title="Open standalone printable 1-pager / Save PDF"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#0E4B3C]" />
                  </a>
                  <button
                    onClick={() => setSelectedInfosheet(info)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#F6F7F5] hover:bg-[#0E4B3C] hover:text-white text-xs font-bold uppercase tracking-wider text-[#0B0F0D] border-2 border-[#0B0F0D] transition-colors"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>View 1-Pager</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: INTERACTIVE INFOGRAPHICS */}
      {(activeFilter === 'all' || activeFilter === 'infographics') && (
        <section className="space-y-6">
          <div className="pb-4 border-b-2 border-[#0B0F0D]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
                Visual Architecture &amp; Schematics
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E4B3C] text-white font-bold border border-[#0B0F0D]">
                3 Visual Diagrams
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
              Interactive Revenue &amp; Search Infographics
            </h2>
          </div>

          <InfographicsView onSelectService={onSelectService} onBookCall={onBookCall} />
        </section>
      )}

      {/* SECTION 4: LIVE OBJECTION BATTLECARDS */}
      {(activeFilter === 'all' || activeFilter === 'battlecards') && (
        <section className="space-y-6">
          <div className="pb-4 border-b-2 border-[#0B0F0D]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
                Sales Rep &amp; Founder Call Companion
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E4B3C] text-white font-bold border border-[#0B0F0D]">
                Live Script Assistant
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
              Commercial Objection Battlecards
            </h2>
          </div>

          <SalesBattlecards onBookCall={onBookCall} />
        </section>
      )}

      {/* Direct Engagement Callout Box */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#082E24] text-white border-2 border-[#0B0F0D] flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9A961] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Custom Sales Enablement Scopes</span>
          </div>
          <h3 className="text-2xl font-editorial font-bold text-white">
            Need a custom proposal kit or sales qualification playbook for your team?
          </h3>
          <p className="text-sm text-[#F6F7F5]/85 leading-relaxed font-sans">
            We adapt enterprise cybersecurity sales playbooks specifically for Australian SMB teams. Starting at $1,500 fixed-price with zero ongoing agency retainer fees.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectService && onSelectService('sales-enablement')}
            className="px-5 py-2.5 rounded bg-white text-[#0B0F0D] hover:bg-[#F6F7F5] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors"
          >
            Review Sales Playbook Scope
          </button>
          <button
            onClick={onBookCall}
            className="px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors shadow-sm"
          >
            Book 20-Min Call with Sinisa &rarr;
          </button>
        </div>
      </div>

      {/* Reader Modals */}
      <WhitepaperReaderModal
        whitepaper={selectedWhitepaper}
        onClose={() => setSelectedWhitepaper(null)}
        onBookCall={onBookCall}
      />

      <InfosheetModal
        infosheet={selectedInfosheet}
        onClose={() => setSelectedInfosheet(null)}
        onBookCall={onBookCall}
      />
    </div>
  );
};
