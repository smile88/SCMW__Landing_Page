import React, { useState } from 'react';
import { OBJECTION_BATTLECARDS } from '../../data/enablementData';
import { ObjectionBattlecard } from '../../types';
import { ShieldCheck, Copy, Check, MessageSquare, Calculator, HelpCircle, ArrowRight } from 'lucide-react';

interface SalesBattlecardsProps {
  onBookCall?: () => void;
}

export const SalesBattlecards: React.FC<SalesBattlecardsProps> = ({ onBookCall }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCardId, setActiveCardId] = useState<string>(OBJECTION_BATTLECARDS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Budget & Agency', 'In-House vs Vendor', 'Technology & AI', 'Risk & Timelines'];

  const filteredCards =
    selectedCategory === 'All'
      ? OBJECTION_BATTLECARDS
      : OBJECTION_BATTLECARDS.filter((c) => c.category === selectedCategory);

  const activeCard = OBJECTION_BATTLECARDS.find((c) => c.id === activeCardId) || OBJECTION_BATTLECARDS[0];

  const handleCopy = (card: ObjectionBattlecard) => {
    const text = `
OBJECTION: "${card.objection}"

RECOMMENDED RESPONSE:
${card.recommendedResponse}

MATHEMATICAL PROOF:
${card.mathematicalProof}

FOLLOW-UP QUESTION:
${card.actionableFollowup}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-10 shadow-sm space-y-8">
      <div className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
          Sales Enablement Toolkit // Live Call Companion
        </span>
        <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B0F0D] mt-1">
          Live Commercial Objection Battlecards
        </h3>
        <p className="text-sm text-[#5B645F] mt-2 leading-relaxed">
          Tactical playbooks designed for founders, sales reps, and commercial leads during prospect calls or email exchanges. Click any objection to review the verified counter-response, unit economics proof, and redirect question.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b-2 border-[#0B0F0D]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all border-2 ${
              selectedCategory === cat
                ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Two-Column Grid: Left list, Right active battlecard details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Objection List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredCards.map((card) => {
            const isSelected = card.id === activeCard.id;
            return (
              <button
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#082E24] text-white border-[#0B0F0D] shadow-md ring-2 ring-[#0E4B3C]'
                    : 'bg-[#F6F7F5] text-[#0B0F0D] border-[#0B0F0D] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${
                      isSelected
                        ? 'bg-[#0E4B3C] text-[#C9A961] border-[#C9A961]/30'
                        : 'bg-white text-[#0E4B3C] border-[#0B0F0D]'
                    }`}
                  >
                    {card.category}
                  </span>
                </div>
                <div className="font-editorial font-bold text-sm leading-snug">
                  &ldquo;{card.objection}&rdquo;
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Card Breakdown */}
        <div className="lg:col-span-7 bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#0B0F0D] gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-bold">
                {activeCard.category} Strategy
              </span>
              <h4 className="text-xl font-editorial font-bold text-[#0B0F0D] mt-0.5">
                &ldquo;{activeCard.objection}&rdquo;
              </h4>
            </div>
            <button
              onClick={() => handleCopy(activeCard)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] shrink-0 transition-colors"
            >
              {copiedId === activeCard.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Copied Script</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Script</span>
                </>
              )}
            </button>
          </div>

          {/* Prospect Mindset */}
          <div className="bg-white p-4 rounded-lg border-2 border-[#0B0F0D] space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5B645F] uppercase font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-[#0E4B3C]" />
              <span>Underlying Prospect Psychology:</span>
            </div>
            <p className="text-xs text-[#0B0F0D] leading-relaxed font-sans italic">
              {activeCard.prospectMindset}
            </p>
          </div>

          {/* Recommended Counter-Response */}
          <div className="bg-white p-5 rounded-lg border-2 border-[#0B0F0D] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0E4B3C] uppercase font-bold">
              <MessageSquare className="w-4 h-4 text-[#C9A961]" />
              <span>Verified Verbal &amp; Email Response:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#0B0F0D] leading-relaxed font-sans">
              {activeCard.recommendedResponse}
            </p>
          </div>

          {/* Mathematical Proof */}
          <div className="bg-[#082E24] text-white p-4 rounded-lg border-2 border-[#0B0F0D] space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A961] uppercase font-bold">
              <Calculator className="w-4 h-4" />
              <span>Unit Economics &amp; Mathematical Proof:</span>
            </div>
            <p className="text-xs text-[#F6F7F5]/90 font-mono leading-relaxed">
              {activeCard.mathematicalProof}
            </p>
          </div>

          {/* Actionable Follow-up Question */}
          <div className="p-4 rounded-lg bg-white border-2 border-[#0B0F0D] space-y-1">
            <span className="text-xs font-mono uppercase text-[#0E4B3C] font-bold block">
              Redirect Follow-Up Question:
            </span>
            <p className="text-xs sm:text-sm font-editorial font-semibold text-[#0B0F0D]">
              {activeCard.actionableFollowup}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
