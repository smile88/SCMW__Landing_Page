import React, { useState } from 'react';
import { WhitepaperItem } from '../../types';
import { X, Printer, Copy, Check, BookOpen, Clock, FileText, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

interface WhitepaperReaderModalProps {
  whitepaper: WhitepaperItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const WhitepaperReaderModal: React.FC<WhitepaperReaderModalProps> = ({
  whitepaper,
  onClose,
  onBookCall,
}) => {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!whitepaper) return null;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(whitepaper.citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0F0D]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden text-[#0B0F0D]">
        {/* Header Bar */}
        <div className="bg-[#082E24] text-white p-4 sm:p-6 border-b-2 border-[#0B0F0D] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <BrandLogo variant="monogram" theme="emerald" size="sm" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C9A961] font-bold tracking-widest uppercase">
                  {whitepaper.code} • Executive Research Paper
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#0E4B3C] border border-[#C9A961]/30 text-[#F6F7F5]/90 font-mono">
                  {whitepaper.readTime}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-editorial font-semibold text-white truncate max-w-xl">
                {whitepaper.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E4B3C] text-white hover:bg-[#0E4B3C]/80 text-xs font-semibold border-2 border-[#0B0F0D] transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#C9A961]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-white/10 text-white transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 print:p-0">
          {/* Document Masthead */}
          <div className="border-b-2 border-[#0B0F0D] pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold block mb-1">
              Category: {whitepaper.category} • Published {whitepaper.date}
            </span>
            <h1 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] leading-tight">
              {whitepaper.title}
            </h1>
            <p className="text-base sm:text-lg text-[#5B645F] font-sans mt-2 leading-relaxed">
              {whitepaper.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-[#5B645F] pt-4 border-t border-[#0B0F0D]/20">
              <span><strong>Author:</strong> {whitepaper.author}</span>
              <span>•</span>
              <span><strong>Publisher:</strong> S. C. Milenwall (Sydney, NSW)</span>
              <span>•</span>
              <span><strong>Citation Standard:</strong> Open Commercial Use</span>
            </div>
          </div>

          {/* Key Empirical Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {whitepaper.keyMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-2 border-[#0B0F0D]">
                <div className="text-2xl font-editorial font-bold text-[#0E4B3C]">{metric.value}</div>
                <div className="text-xs font-bold text-[#0B0F0D] mt-1">{metric.label}</div>
                <div className="text-[11px] text-[#5B645F] mt-1">{metric.context}</div>
              </div>
            ))}
          </div>

          {/* Executive Summary Box */}
          <div className="bg-[#082E24] text-white p-6 rounded-xl border-2 border-[#0B0F0D] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9A961] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Executive Briefing &amp; Key Findings</span>
            </div>
            <p className="text-sm font-sans text-[#F6F7F5]/90 italic leading-relaxed">
              &ldquo;{whitepaper.abstract}&rdquo;
            </p>
            <div className="space-y-2 pt-2 border-t border-white/20">
              <span className="text-xs font-mono text-[#C9A961] uppercase tracking-wider block font-bold">
                Core Strategic Implications:
              </span>
              <ul className="space-y-2">
                {whitepaper.executiveSummary.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-[#F6F7F5]/90">
                    <span className="text-[#C9A961] font-bold shrink-0 mt-0.5">▪</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chapter Navigation Tabs */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#0B0F0D] mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-bold">
                Chapter Index:
              </span>
              <span className="text-xs font-mono text-[#5B645F]">
                Viewing Chapter {activeChapter + 1} of {whitepaper.chapters.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {whitepaper.chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveChapter(idx)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all border-2 ${
                    activeChapter === idx
                      ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                      : 'bg-white text-[#0B0F0D] border-[#0B0F0D] hover:bg-[#F6F7F5]'
                  }`}
                >
                  <span className="font-mono text-[#C9A961] mr-1.5">{ch.number}.</span>
                  <span>{ch.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Chapter Content */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border-2 border-[#0B0F0D] space-y-4">
              <div className="pb-3 border-b-2 border-[#0B0F0D]/10">
                <span className="text-xs font-mono text-[#0E4B3C] font-bold uppercase">
                  Chapter {whitepaper.chapters[activeChapter].number}
                </span>
                <h3 className="text-xl font-editorial font-bold text-[#0B0F0D] mt-0.5">
                  {whitepaper.chapters[activeChapter].title}
                </h3>
                <p className="text-xs text-[#5B645F] italic mt-1 font-mono">
                  Key Thesis: {whitepaper.chapters[activeChapter].summary}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#0B0F0D] leading-relaxed">
                {whitepaper.chapters[activeChapter].paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {whitepaper.chapters[activeChapter].callout && (
                <div className="p-4 rounded-lg bg-[#F6F7F5] border-l-4 border-2 border-l-[#0E4B3C] border-[#0B0F0D] text-xs font-mono text-[#0B0F0D] mt-4">
                  {whitepaper.chapters[activeChapter].callout}
                </div>
              )}
            </div>
          </div>

          {/* Citation & Attribution Block */}
          <div className="bg-white p-4 rounded-lg border-2 border-[#0B0F0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#5B645F] block font-bold">
                Suggested Academic &amp; Commercial Citation:
              </span>
              <code className="text-xs font-mono text-[#0B0F0D] block mt-1">
                {whitepaper.citation}
              </code>
            </div>
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F6F7F5] hover:bg-[#0E4B3C]/10 text-xs font-semibold text-[#0E4B3C] border-2 border-[#0B0F0D] shrink-0"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0E4B3C]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Call to Action Bar */}
        <div className="bg-white p-4 sm:p-6 border-t-2 border-[#0B0F0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="text-xs font-mono uppercase text-[#0E4B3C] font-bold">
              Implement This Framework In Your Business
            </div>
            <div className="text-sm text-[#5B645F]">
              Review how fixed-price growth architecture eliminates agency retainer drag.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-xs font-bold text-[#5B645F] hover:text-[#0B0F0D] border-2 border-[#0B0F0D] bg-white transition-colors uppercase tracking-wider"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors shadow-sm"
            >
              <span>Book 20-Min Operational Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
