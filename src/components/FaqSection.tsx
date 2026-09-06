import React, { useState, useMemo } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { FaqItem } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Mail,
  Calendar
} from 'lucide-react';

interface FaqSectionProps {
  onBookCall?: () => void;
  onEnquire?: () => void;
  id?: string;
  className?: string;
  defaultCategory?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onBookCall,
  onEnquire,
  id = 'faq-section',
  className = '',
  defaultCategory = 'All',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(['fixed-price-mechanism', 'timeline-overrun-risk'])
  );

  const categories = useMemo(() => {
    return ['All', 'Fixed-Price Model', 'Project Timelines', 'Scope & Governance', 'Handoff & Support'];
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.keyPoints && item.keyPoints.some((kp) => kp.toLowerCase().includes(q))) ||
        (item.badge && item.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (faqId: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(faqId)) {
        next.delete(faqId);
      } else {
        next.add(faqId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 bg-[#F6F7F5] border-b-2 border-[#0B0F0D] font-sans ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/10 border-2 border-[#0B0F0D] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0E4B3C]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
              Commercial Clarity &amp; Governance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#0B0F0D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#5B645F] mt-3 leading-relaxed">
            Direct, binding answers addressing our fixed-price fee structure, delivery velocity guarantees, change management, and single point of accountability.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors border-2 ${
                    isActive
                      ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-sm'
                      : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:bg-neutral-100 hover:text-[#0B0F0D]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5B645F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pricing, timelines, risk..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white text-[#0B0F0D] rounded border-2 border-[#0B0F0D] focus:outline-none focus:ring-2 focus:ring-[#0E4B3C] font-sans placeholder-[#5B645F]/70"
            />
          </div>
        </div>

        {/* Status Counter & Bulk Toggles */}
        <div className="flex items-center justify-between text-xs text-[#5B645F] font-mono mb-4 pb-2 border-b-2 border-[#0B0F0D]/20">
          <div>
            Showing <strong className="text-[#0B0F0D]">{filteredFaqs.length}</strong> questions
            {activeCategory !== 'All' && <span> in <span className="text-[#0E4B3C] font-bold">{activeCategory}</span></span>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="hover:text-[#0E4B3C] transition-colors font-medium underline underline-offset-2"
            >
              Expand All
            </button>
            <span>|</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#0E4B3C] transition-colors font-medium underline underline-offset-2"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-lg border-2 border-[#0B0F0D]">
              <p className="text-sm text-[#5B645F] mb-3">
                No matching questions found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#0E4B3C] text-white border-2 border-[#0B0F0D]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-lg border-2 border-[#0B0F0D] transition-all overflow-hidden ${
                    isExpanded ? 'shadow-md' : 'hover:border-[#0E4B3C]'
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors focus:outline-none focus:bg-[#F6F7F5]"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5B645F] bg-[#F6F7F5] px-2 py-0.5 rounded border border-[#0B0F0D]/30 font-semibold">
                          {faq.category}
                        </span>
                        {faq.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#0E4B3C] bg-[#0E4B3C]/10 px-2 py-0.5 rounded border border-[#0E4B3C]/40 font-bold">
                            {faq.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B0F0D] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#0B0F0D] shrink-0 transition-transform duration-200 mt-1 ${
                        isExpanded
                          ? 'bg-[#0E4B3C] text-white rotate-180'
                          : 'bg-[#F6F7F5] text-[#0B0F0D]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 border-t-2 border-[#0B0F0D]/10 pt-4 animate-in fade-in-50 duration-150">
                      <p className="text-sm sm:text-base text-[#5B645F] leading-relaxed mb-4">
                        {faq.answer}
                      </p>

                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <div className="rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] p-4 space-y-2">
                          <div className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#0E4B3C]" />
                            <span>Key Commercial Commitments</span>
                          </div>
                          <ul className="space-y-1.5">
                            {faq.keyPoints.map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[#0B0F0D]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#0E4B3C] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Commercial Assurance Callout */}
        <div className="mt-12 rounded-xl bg-white border-2 border-[#0B0F0D] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
              <Clock className="w-3.5 h-3.5 text-[#0E4B3C]" />
              <span>Response Within 1 Business Day</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B0F0D]">
              Have a specific commercial constraint or launch deadline?
            </h4>
            <p className="text-xs sm:text-sm text-[#5B645F] leading-relaxed">
              Every business has unique internal workflows. Book a 20-minute direct conversation with founder Sinisa Milenkovic to review your exact requirements and receive a fixed-price proposal within 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            {onBookCall && (
              <button
                onClick={onBookCall}
                className="px-5 py-3 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Book 20-Min Call</span>
              </button>
            )}
            {onEnquire && (
              <button
                onClick={onEnquire}
                className="px-5 py-3 rounded bg-white text-[#0B0F0D] hover:bg-[#F6F7F5] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#0E4B3C]" />
                <span>Enquire Online</span>
                <ArrowRight className="w-3 h-3 text-[#0B0F0D]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
