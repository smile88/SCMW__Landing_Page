import React, { useState } from 'react';
import { INSIGHTS, BUSINESS_INFO } from '../data/content';
import { InsightArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Search, 
  Filter, 
  Tag, 
  User, 
  Share2, 
  Check, 
  FileCode, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface InsightsSectionProps {
  onEnquire: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onEnquire }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSchemaPreview, setShowSchemaPreview] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'SEO & AI Search', label: 'SEO & AI Search' },
    { id: 'Website Design', label: 'Website Design' },
    { id: 'Marketing Strategy', label: 'Marketing Strategy' },
    { id: 'Sales Enablement', label: 'Sales Enablement' },
    { id: 'Agency Model', label: 'Pricing & Governance' },
  ];

  const filteredArticles = INSIGHTS.filter((article) => {
    const matchesCat = activeCategory === 'all' || article.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === '' ||
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      (article.tags && article.tags.some(t => t.toLowerCase().includes(query)));
    return matchesCat && matchesSearch;
  });

  const handleShare = (article: InsightArticle) => {
    navigator.clipboard.writeText(`https://${BUSINESS_INFO.domain}/insights/${article.id}`);
    setCopiedId(article.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="insights" className="py-16 md:py-24 bg-[#F6F7F5] border-b border-[#0E4B3C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                Thought Leadership &amp; SEO Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0E4B3C] leading-tight">
              Practising the SEO and <br />
              <span className="italic text-[#0B0F0D]">content discipline we sell.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5B645F] mt-3">
              Actionable, practitioner-grade perspectives on 2026 AI search visibility, high-converting B2B web architecture, 90-day execution roadmaps, and quota-driven sales playbooks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-xs font-mono text-[#5B645F] bg-white px-3 py-2 rounded border border-[#0B0F0D]/10">
              Author: <strong className="text-[#0B0F0D]">Sinisa Milenkovic</strong> • Ex-Fortinet / Mandiant
            </div>
          </div>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-[#0B0F0D]/10 shadow-2xs">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#0E4B3C] text-white border-[#0E4B3C]'
                    : 'bg-[#F6F7F5] text-[#5B645F] border-[#0B0F0D]/5 hover:border-[#C9A961] hover:text-[#0B0F0D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#5B645F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search topics, keywords, AI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded bg-[#F6F7F5] border border-[#0B0F0D]/10 focus:outline-hidden focus:border-[#0E4B3C] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#5B645F] hover:text-[#0B0F0D]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Highlight Banner: Entity Search & SEO Authority */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-[#082E24] text-white border border-[#C9A961]/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C9A961]" />
                <span className="text-[11px] font-mono text-[#C9A961] uppercase tracking-wider font-bold">
                  2026 Commercial SEO Methodology
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-white">
                How S. C. Milenwall engineers organic authority for Sydney clients
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F7F5]/80 mt-1 leading-relaxed">
                We don’t produce generic keyword spam. Every published asset satisfies Google’s EEAT criteria, generates verified entity relationships for LLM citation in ChatGPT/Perplexity, and embeds clear commercial disqualification pathways.
              </p>
            </div>

            <button
              onClick={() => setShowSchemaPreview(!showSchemaPreview)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 text-[#C9A961] border border-white/10 text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <FileCode className="w-4 h-4" />
              <span>{showSchemaPreview ? 'Hide JSON-LD Schema' : 'Inspect Article Schema'}</span>
            </button>
          </div>

          {/* Collapsible Schema Preview */}
          {showSchemaPreview && (
            <div className="mt-6 pt-6 border-t border-white/10 font-mono text-[11px] bg-black/40 p-4 rounded text-[#C9A961] overflow-x-auto">
              <pre>{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "publisher": {
                  "@type": "ProfessionalService",
                  "name": BUSINESS_INFO.tradingName,
                  "founder": BUSINESS_INFO.founder,
                  "areaServed": "Sydney, NSW, Australia",
                  "priceRange": "$1,500 - $4,000"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sinisa Milenkovic",
                  "jobTitle": "Principal Operator",
                  "alumniOf": "Mandiant, Fortinet"
                },
                "inLanguage": "en-AU"
              }, null, 2)}</pre>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#0B0F0D]/10 p-12 text-center">
            <p className="text-base text-[#5B645F]">
              No articles match &ldquo;{searchQuery}&rdquo; under {activeCategory}.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl border border-[#0E4B3C]/15 hover:border-[#0E4B3C]/40 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#5B645F] mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#F6F7F5] text-[#0E4B3C] font-semibold border border-[#0B0F0D]/5">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-editorial font-semibold text-[#0B0F0D] group-hover:text-[#0E4B3C] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B645F] mt-2.5 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  {article.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {article.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-[#5B645F] bg-[#F6F7F5] px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 p-3 rounded bg-[#F6F7F5] border-l-2 border-[#C9A961] text-xs text-[#0B0F0D] italic">
                    <strong>Rule:</strong> {article.keyTakeaway}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#5B645F] font-mono">{article.date}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare(article)}
                      title="Copy share link"
                      className="p-1.5 rounded hover:bg-[#F6F7F5] text-[#5B645F] hover:text-[#0B0F0D] transition-colors"
                    >
                      {copiedId === article.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E4B3C] hover:text-[#082E24]"
                    >
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A961]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Full Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in-50">
            <div className="bg-white rounded-xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#0E4B3C]/20">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#5B645F] hover:text-[#0B0F0D] transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#5B645F] mb-3">
                    <span className="text-[#0E4B3C] font-semibold bg-[#0E4B3C]/10 px-2 py-0.5 rounded">
                      {selectedArticle.category}
                    </span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#0B0F0D] leading-snug">
                    {selectedArticle.title}
                  </h2>

                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#0B0F0D]/5 text-xs text-[#5B645F]">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>{selectedArticle.author || 'Sinisa Milenkovic'}</span>
                    </div>
                    <span>•</span>
                    <span>{selectedArticle.authorRole || 'Founder & Principal Operator, S. C. Milenwall'}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#082E24] text-white border border-[#C9A961]/30 text-xs sm:text-sm">
                  <div className="text-[11px] font-mono text-[#C9A961] uppercase tracking-wider mb-1">
                    Core Commercial Rule &amp; Thesis
                  </div>
                  <p className="italic text-[#F6F7F5]/90">
                    &ldquo;{selectedArticle.keyTakeaway}&rdquo;
                  </p>
                </div>

                <div className="space-y-6 text-[#0B0F0D] text-sm sm:text-base leading-relaxed font-sans">
                  {selectedArticle.content.map((sec, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-lg font-editorial font-semibold text-[#0E4B3C]">
                        {sec.sectionHeading}
                      </h4>
                      {sec.paragraphs.map((p, j) => (
                        <p key={j} className="text-[#0B0F0D]/90">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Article Tags */}
                {selectedArticle.tags && (
                  <div className="pt-4 border-t border-black/5 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-[#5B645F] flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      Topics:
                    </span>
                    {selectedArticle.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-mono text-[#0E4B3C] bg-[#F6F7F5] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Article Footer & Consultation CTA */}
                <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F6F7F5] p-5 rounded-lg">
                  <div>
                    <div className="text-xs font-bold text-[#0B0F0D]">
                      Have questions about implementing this in your business?
                    </div>
                    <div className="text-xs text-[#5B645F] mt-0.5">
                      Discuss directly with Sinisa during an honest 20-minute review.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      onEnquire();
                    }}
                    className="px-6 py-3 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs shrink-0"
                  >
                    Discuss With Sinisa
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

