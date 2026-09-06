import React, { useState } from 'react';
import { InfosheetItem } from '../../types';
import { X, Printer, Copy, Check, ShieldCheck, ArrowRight, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

interface InfosheetModalProps {
  infosheet: InfosheetItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const InfosheetModal: React.FC<InfosheetModalProps> = ({
  infosheet,
  onClose,
  onBookCall,
}) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!infosheet) return null;

  const handleCopyText = () => {
    const formatted = `
${infosheet.title.toUpperCase()}
${infosheet.subtitle}
Document Ref: ${infosheet.code} | Target Audience: ${infosheet.audience} | Last Updated: ${infosheet.lastUpdated}

SUMMARY:
${infosheet.summary}

KEY HIGHLIGHTS:
${infosheet.highlights.map((h) => `• ${h.label}: ${h.desc}`).join('\n')}

SECTIONS:
${infosheet.contentSections
  .map((s) => `\n[${s.heading}]\n${s.bullets.map((b) => `• ${b}`).join('\n')}`)
  .join('\n')}

COMMERCIAL ASSURANCE:
${infosheet.commercialAssurance}

Published by S. C. Milenwall (Sydney, Australia) - scmw.com.au
    `.trim();

    navigator.clipboard.writeText(formatted);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
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
      <div className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden text-[#0B0F0D]">
        {/* Header Bar */}
        <div className="bg-[#082E24] text-white p-4 sm:p-6 border-b-2 border-[#0B0F0D] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo variant="monogram" theme="emerald" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C9A961] font-bold tracking-widest uppercase">
                  {infosheet.code} • Executive 1-Pager
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#0E4B3C] border border-[#C9A961]/30 text-[#F6F7F5]/90 font-mono">
                  {infosheet.format}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-editorial font-semibold text-white truncate max-w-lg">
                {infosheet.title}
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

        {/* Scrollable Printable 1-Pager Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 print:p-0">
          {/* Document Header Card */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#0B0F0D] shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#0B0F0D] gap-2">
              <div>
                <span className="text-xs font-mono text-[#0E4B3C] uppercase tracking-wider font-bold">
                  Target Stakeholder: {infosheet.audience}
                </span>
                <h1 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B0F0D] mt-0.5">
                  {infosheet.title}
                </h1>
              </div>
              <div className="text-left sm:text-right text-xs font-mono text-[#5B645F] shrink-0">
                <div>Document ID: <strong>{infosheet.code}</strong></div>
                <div>Updated: {infosheet.lastUpdated}</div>
              </div>
            </div>

            <p className="text-sm text-[#5B645F] leading-relaxed">
              {infosheet.subtitle}
            </p>

            <div className="p-3.5 rounded-lg bg-[#F6F7F5] border-2 border-[#0B0F0D] text-xs text-[#0B0F0D] leading-relaxed">
              <strong>Executive Brief:</strong> {infosheet.summary}
            </div>
          </div>

          {/* Highlights 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infosheet.highlights.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-2 border-[#0B0F0D]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0E4B3C] font-bold uppercase mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-[#5B645F] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-4">
            {infosheet.contentSections.map((sec, sIdx) => (
              <div key={sIdx} className="bg-white p-6 rounded-xl border-2 border-[#0B0F0D] space-y-3">
                <h3 className="text-base font-editorial font-bold text-[#0B0F0D] pb-2 border-b-2 border-[#0B0F0D]/10">
                  {sec.heading}
                </h3>
                <div className="space-y-2.5">
                  {sec.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#0B0F0D] leading-relaxed">
                      <span className="text-[#0E4B3C] font-bold shrink-0 mt-0.5">▪</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Commercial Assurance Box */}
          <div className="bg-[#082E24] text-white p-4 rounded-lg border-2 border-[#0B0F0D] flex items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase text-[#C9A961] font-bold block">
                  Commercial Assurance
                </span>
                <p className="text-xs text-[#F6F7F5]/90 mt-0.5">
                  {infosheet.commercialAssurance}
                </p>
              </div>
            </div>
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] shrink-0 transition-colors"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0B0F0D]" />
                  <span>Copied Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#0B0F0D]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-white p-4 sm:p-6 border-t-2 border-[#0B0F0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#5B645F] font-mono">
            S. C. Milenwall (scmw.com.au) • Sydney, NSW • Fixed-Price Delivery
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
              <span>Enquire Regarding This Capability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
