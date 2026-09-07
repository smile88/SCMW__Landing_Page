import React, { useState, useMemo } from 'react';
import Markdown from 'react-markdown';
import { INSIGHTS_DATA, INSIGHTS_TEMPLATE_MARKDOWN } from '../data/insightsData';
import { BUSINESS_INFO } from '../data/content';
import { InsightArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Search, 
  Tag, 
  User, 
  Share2, 
  Check, 
  FileCode, 
  Sparkles,
  TrendingUp,
  Building2,
  Plus,
  Eye,
  Code,
  Copy,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface InsightsSectionProps {
  onEnquire: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onEnquire }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeType, setActiveType] = useState<'all' | 'case-study' | 'article'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSchemaPreview, setShowSchemaPreview] = useState<boolean>(false);
  const [showDraftStudio, setShowDraftStudio] = useState<boolean>(false);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  // Draft Studio State for Sinisa to test/preview new markdown articles
  const [draftTitle, setDraftTitle] = useState<string>('Case Study: Scaling B2B Lead Velocity with Direct Answer Search Architecture');
  const [draftType, setDraftType] = useState<'article' | 'case-study'>('case-study');
  const [draftCategory, setDraftCategory] = useState<string>('SEO & AI Search');
  const [draftClient, setDraftClient] = useState<string>('Pacific Industrial Glazing');
  const [draftIndustry, setDraftIndustry] = useState<string>('Commercial Contracting');
  const [draftReadTime, setDraftReadTime] = useState<string>('5 min read');
  const [draftTags, setDraftTags] = useState<string>('Generative Engine Optimization, Sydney Commercial, Schema');
  const [draftSummary, setDraftSummary] = useState<string>('How engineering direct answers and statutory compliance schema generated 18 tier-1 commercial enquiries in 60 days.');
  const [draftKeyTakeaway, setDraftKeyTakeaway] = useState<string>('LLMs cite businesses that provide unambiguous technical facts, not creative marketing puffery.');
  const [draftMarkdown, setDraftMarkdown] = useState<string>(`## The Strategic Opportunity

When high-value commercial buyers query ChatGPT or Perplexity for certified suppliers in Sydney, they do not want to click through 10 vague links. They want verified credentials, compliance standards (AS1288, BCA), and transparent turnaround timelines.

### The 3-Step Execution

1. **Entity Reconciliation:** Cleaned up Australian Business Register (ABR) trading entities and aligned knowledge graph data.
2. **Tabular Specifications:** Replaced paragraph fluff with structured specification tables.
3. **Disqualification Microcopy:** Explicitly filtered out residential queries to preserve executive capacity.

| Channel / Metric | Traditional Agency | S. C. Milenwall Protocol |
| :--- | :--- | :--- |
| **Generative Citations** | 0% Mention Share | #1 Recommended Entity |
| **Qualified Tenders** | 2 / quarter | 18 / 60 days |
| **Fixed Cost** | $4,500/mo indefinite | $3,500 One-time Scope |

> "Structuring our commercial services as machine-readable facts transformed our pipeline quality in under two months."
`);
  const [draftActiveTab, setDraftActiveTab] = useState<'editor' | 'preview'>('preview');

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'SEO & AI Search', label: 'SEO & AI Search (GEO)' },
    { id: 'Marketing Strategy', label: 'Marketing Strategy' },
    { id: 'Website Design', label: 'B2B Web Systems' },
    { id: 'Sales Enablement', label: 'Sales Enablement' },
  ];

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter((article) => {
      const matchesType = 
        activeType === 'all' || 
        (activeType === 'case-study' && article.type === 'case-study') ||
        (activeType === 'article' && (article.type === 'article' || !article.type));
      
      const matchesCat = activeCategory === 'all' || article.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        (article.client && article.client.toLowerCase().includes(query)) ||
        (article.tags && article.tags.some(t => t.toLowerCase().includes(query)));
      
      return matchesType && matchesCat && matchesSearch;
    });
  }, [activeType, activeCategory, searchQuery]);

  const caseStudyCount = useMemo(() => {
    return INSIGHTS_DATA.filter(a => a.type === 'case-study').length;
  }, []);

  const articleCount = useMemo(() => {
    return INSIGHTS_DATA.filter(a => a.type === 'article' || !a.type).length;
  }, []);

  const handleShare = (article: InsightArticle) => {
    const url = `https://${BUSINESS_INFO.domain}/#insights/${article.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const copyTemplateToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(INSIGHTS_TEMPLATE_MARKDOWN);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2500);
    }
  };

  const copyDraftSnippet = () => {
    const tagArray = draftTags.split(',').map(t => t.trim()).filter(Boolean);
    const codeSnippet = `  {
    id: '${draftTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}',
    title: ${JSON.stringify(draftTitle)},
    type: '${draftType}',
    ${draftType === 'case-study' ? `client: ${JSON.stringify(draftClient)},\n    industry: ${JSON.stringify(draftIndustry)},` : ''}
    readTime: ${JSON.stringify(draftReadTime)},
    category: ${JSON.stringify(draftCategory)},
    date: 'October 2026',
    author: 'Sinisa Milenkovic',
    authorRole: 'Founder & Principal Operator, S. C. Milenwall',
    tags: ${JSON.stringify(tagArray)},
    summary: ${JSON.stringify(draftSummary)},
    keyTakeaway: ${JSON.stringify(draftKeyTakeaway)},
    markdownContent: \`${draftMarkdown.replace(/`/g, '\\`')}\`
  },`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeSnippet);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2500);
    }
  };

  return (
    <section id="insights" className="py-16 md:py-24 bg-[#F6F7F5] border-b-2 border-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Practitioner Byline & Capabilities */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                Insights &amp; Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0E4B3C] leading-tight">
              Practising the SEO and <br />
              <span className="italic text-[#0B0F0D]">content discipline we sell.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5B645F] mt-4 leading-relaxed">
              Practitioner-grade case studies, Generative Engine Optimization (GEO) playbooks, and commercial marketing strategies for Sydney B2B leaders. Written and executed by Sinisa Milenkovic.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="text-xs font-mono text-[#5B645F] bg-white px-3.5 py-2.5 rounded-lg border-2 border-[#0B0F0D] flex items-center gap-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0E4B3C]" />
              <span>Lead Author: <strong className="text-[#0B0F0D]">Sinisa Milenkovic</strong> • Ex-Fortinet / Mandiant</span>
            </div>

            <button
              onClick={() => setShowDraftStudio(!showDraftStudio)}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-[#0E4B3C] hover:text-white text-xs font-mono font-bold uppercase tracking-wider text-[#0B0F0D] border-2 border-[#0B0F0D] transition-colors shadow-xs"
              title="Open Markdown publishing guide & live preview tool"
            >
              <Code className="w-3.5 h-3.5 text-[#C9A961]" />
              <span>{showDraftStudio ? 'Hide Markdown Studio' : 'Markdown Publishing Hub'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Markdown Contributor Studio for Sinisa */}
        {showDraftStudio && (
          <div className="mb-12 bg-white rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#0B0F0D]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-bold">
                  <BookOpen className="w-4 h-4 text-[#C9A961]" />
                  <span>Sinisa&apos;s Markdown Editorial Studio</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                  Draft, Preview &amp; Add New Markdown Case Studies
                </h3>
                <p className="text-xs sm:text-sm text-[#5B645F] mt-1">
                  All insights in this section are driven by standard Markdown stored in <code className="font-mono text-[#0E4B3C] bg-[#F6F7F5] px-1.5 py-0.5 rounded border border-[#0B0F0D]">src/data/insightsData.ts</code>. You can write rich markdown, inspect the live rendering, and generate ready-to-paste objects.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={copyTemplateToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#F6F7F5] hover:bg-white text-xs font-mono font-semibold border-2 border-[#0B0F0D] text-[#0B0F0D] transition-colors"
                >
                  {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTemplate ? 'Copied Template!' : 'Copy Markdown Template'}</span>
                </button>
                <button
                  onClick={() => setShowDraftStudio(false)}
                  className="p-2 rounded border border-[#0B0F0D] hover:bg-[#F6F7F5] text-[#5B645F]"
                  aria-label="Close Studio"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Draft Form & Live Preview Tabs */}
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-[#0B0F0D] pb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDraftActiveTab('preview')}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider border-2 transition-colors ${
                      draftActiveTab === 'preview'
                        ? 'bg-[#0E4B3C] text-white border-[#0B0F0D]'
                        : 'bg-[#F6F7F5] text-[#5B645F] border-[#0B0F0D]'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 inline mr-1.5" />
                    Live Markdown Preview
                  </button>
                  <button
                    onClick={() => setDraftActiveTab('editor')}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider border-2 transition-colors ${
                      draftActiveTab === 'editor'
                        ? 'bg-[#0E4B3C] text-white border-[#0B0F0D]'
                        : 'bg-[#F6F7F5] text-[#5B645F] border-[#0B0F0D]'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5 inline mr-1.5" />
                    Edit Draft Fields
                  </button>
                </div>

                <button
                  onClick={copyDraftSnippet}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] text-xs font-bold uppercase tracking-wider border-2 border-[#0B0F0D] shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Generate Code Snippet</span>
                </button>
              </div>

              {draftActiveTab === 'editor' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                        Type
                      </label>
                      <select
                        value={draftType}
                        onChange={(e) => setDraftType(e.target.value as 'article' | 'case-study')}
                        className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                      >
                        <option value="case-study">Case Study</option>
                        <option value="article">Article / Guide</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                        Category
                      </label>
                      <select
                        value={draftCategory}
                        onChange={(e) => setDraftCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                      >
                        <option value="SEO & AI Search">SEO &amp; AI Search</option>
                        <option value="Marketing Strategy">Marketing Strategy</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Sales Enablement">Sales Enablement</option>
                      </select>
                    </div>
                  </div>

                  {draftType === 'case-study' && (
                    <>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                          Client Organization
                        </label>
                        <input
                          type="text"
                          value={draftClient}
                          onChange={(e) => setDraftClient(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                          Client Industry
                        </label>
                        <input
                          type="text"
                          value={draftIndustry}
                          onChange={(e) => setDraftIndustry(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                        />
                      </div>
                    </>
                  )}

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                      Summary (2 Sentences)
                    </label>
                    <input
                      type="text"
                      value={draftSummary}
                      onChange={(e) => setDraftSummary(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                      Key Takeaway Rule
                    </label>
                    <input
                      type="text"
                      value={draftKeyTakeaway}
                      onChange={(e) => setDraftKeyTakeaway(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#5B645F] mb-1">
                      Markdown Content (Supports ## Headings, Tables, Blockquotes, Lists, Bold, Code)
                    </label>
                    <textarea
                      rows={10}
                      value={draftMarkdown}
                      onChange={(e) => setDraftMarkdown(e.target.value)}
                      className="w-full p-3 font-mono text-xs rounded bg-[#F6F7F5] border-2 border-[#0B0F0D] text-[#0B0F0D]"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-lg bg-[#F6F7F5] border-2 border-[#0B0F0D]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#5B645F] mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#0E4B3C] text-white font-bold uppercase text-[10px]">
                      {draftType === 'case-study' ? 'Case Study' : 'Article'}
                    </span>
                    <span>•</span>
                    <span className="text-[#0E4B3C] font-semibold">{draftCategory}</span>
                    <span>•</span>
                    <span>{draftReadTime}</span>
                  </div>

                  <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                    {draftTitle}
                  </h3>

                  {draftType === 'case-study' && draftClient && (
                    <div className="mt-2 text-xs font-mono text-[#5B645F] flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Client: <strong className="text-[#0B0F0D]">{draftClient}</strong> ({draftIndustry})</span>
                    </div>
                  )}

                  <div className="mt-4 p-3 rounded bg-white border-l-4 border-l-[#C9A961] border border-[#0B0F0D] text-xs text-[#0B0F0D] italic">
                    <strong>Rule:</strong> {draftKeyTakeaway}
                  </div>

                  <div className="mt-6 pt-6 border-t-2 border-[#0B0F0D]">
                    <div className="markdown-body">
                      <Markdown>{draftMarkdown}</Markdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Filter Toolbar: Type Switcher, Category Chips, and Live Search */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border-2 border-[#0B0F0D] shadow-2xs">
            
            {/* Format / Type Segmented Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#F6F7F5] border-2 border-[#0B0F0D]">
              <button
                onClick={() => setActiveType('all')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeType === 'all'
                    ? 'bg-[#0E4B3C] text-white shadow-xs'
                    : 'text-[#5B645F] hover:text-[#0B0F0D]'
                }`}
              >
                All ({INSIGHTS_DATA.length})
              </button>
              <button
                onClick={() => setActiveType('case-study')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeType === 'case-study'
                    ? 'bg-[#0E4B3C] text-white shadow-xs'
                    : 'text-[#5B645F] hover:text-[#0B0F0D]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Case Studies ({caseStudyCount})</span>
              </button>
              <button
                onClick={() => setActiveType('article')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeType === 'article'
                    ? 'bg-[#0E4B3C] text-white shadow-xs'
                    : 'text-[#5B645F] hover:text-[#0B0F0D]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Articles ({articleCount})</span>
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#5B645F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, AI citations, roadmaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-lg bg-[#F6F7F5] border-2 border-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C] focus:bg-white text-[#0B0F0D] transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#5B645F] hover:text-[#0B0F0D]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#5B645F] uppercase tracking-wider font-semibold mr-1">
              Filter by Discipline:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all border-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-2xs'
                    : 'bg-white text-[#5B645F] border-[#0B0F0D] hover:border-[#C9A961] hover:text-[#0B0F0D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Methodology Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-[#06110D] text-white border-2 border-[#16654F] relative overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C9A961]" />
                <span className="text-[11px] font-mono text-[#C9A961] uppercase tracking-wider font-bold">
                  2026 Commercial SEO &amp; GEO Standards
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-white">
                How S. C. Milenwall engineers organic authority for Sydney businesses
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F7F5]/85 mt-2 leading-relaxed">
                We reject AI-generated generic spam. Every published asset satisfies Google&apos;s EEAT criteria, generates verified entity relationships for LLM citation in ChatGPT/Perplexity, and embeds clear commercial disqualification pathways.
              </p>
            </div>

            <button
              onClick={() => setShowSchemaPreview(!showSchemaPreview)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 text-[#C9A961] border-2 border-[#16654F] text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <FileCode className="w-4 h-4" />
              <span>{showSchemaPreview ? 'Hide JSON-LD Schema' : 'Inspect Article Schema'}</span>
            </button>
          </div>

          {/* Collapsible Schema Preview */}
          {showSchemaPreview && (
            <div className="mt-6 pt-6 border-t-2 border-[#16654F] font-mono text-[11px] bg-black/60 p-4 rounded-lg text-[#C9A961] overflow-x-auto border-2 border-[#16654F]">
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
                "articleSection": ["Generative Engine Optimization", "B2B Marketing Strategy", "Sales Enablement"],
                "inLanguage": "en-AU"
              }, null, 2)}</pre>
            </div>
          )}
        </div>

        {/* Articles & Case Studies Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-[#0B0F0D] p-12 text-center">
            <p className="text-base text-[#5B645F]">
              No entries match &ldquo;{searchQuery}&rdquo; under {activeCategory}.
            </p>
            <button
              onClick={() => { setActiveType('all'); setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono uppercase tracking-wider text-[#0E4B3C] font-bold underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const isCaseStudy = article.type === 'case-study';

              return (
                <div
                  key={article.id}
                  className={`rounded-xl border-2 border-[#0B0F0D] transition-all p-6 sm:p-7 flex flex-col justify-between shadow-xs group ${
                    isCaseStudy ? 'bg-white hover:border-[#C9A961] relative' : 'bg-white'
                  }`}
                >
                  <div>
                    {/* Top Metadata Badge Row */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#5B645F] mb-3">
                      <div className="flex items-center gap-1.5">
                        {isCaseStudy ? (
                          <span className="px-2.5 py-0.5 rounded bg-[#0E4B3C] text-[#C9A961] font-bold uppercase text-[10px] tracking-wider border border-[#0B0F0D] flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Case Study
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded bg-[#F6F7F5] text-[#0E4B3C] font-semibold border border-[#0B0F0D]">
                            {article.category}
                          </span>
                        )}
                      </div>

                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Case Study Client Callout if applicable */}
                    {isCaseStudy && article.client && (
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-mono text-[#5B645F]">
                        <Building2 className="w-3.5 h-3.5 text-[#C9A961]" />
                        <span>Client: <strong className="text-[#0B0F0D]">{article.client}</strong></span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-editorial font-semibold text-[#0B0F0D] group-hover:text-[#0E4B3C] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#5B645F] mt-2.5 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Metrics Bar for Case Studies */}
                    {isCaseStudy && article.metrics && (
                      <div className="grid grid-cols-2 gap-2 mt-4 p-2.5 rounded-lg bg-[#06110D] border-2 border-[#16654F] text-white">
                        {article.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="text-sm font-editorial font-bold text-[#C9A961]">{m.value}</div>
                            <div className="text-[10px] font-mono text-[#F6F7F5]/80 uppercase">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    {article.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {article.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono text-[#5B645F] bg-[#F6F7F5] px-2 py-0.5 rounded border border-[#0B0F0D]">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key Takeaway Rule */}
                    <div className="mt-4 p-3 rounded bg-[#F6F7F5] border-l-4 border-l-[#C9A961] border border-[#0B0F0D] text-xs text-[#0B0F0D] italic">
                      <strong>Rule:</strong> {article.keyTakeaway}
                    </div>
                  </div>

                  {/* Card Footer: Date, Share, and Read Button */}
                  <div className="pt-5 mt-5 border-t-2 border-[#0B0F0D] flex items-center justify-between">
                    <span className="text-[11px] text-[#5B645F] font-mono">{article.date}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(article)}
                        title="Copy share link"
                        className="p-1.5 rounded border border-[#0B0F0D] hover:bg-[#F6F7F5] text-[#5B645F] hover:text-[#0B0F0D] transition-colors"
                      >
                        {copiedId === article.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E4B3C] hover:text-[#082E24] group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>{isCaseStudy ? 'Read Case Study' : 'Read Article'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C9A961]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Full Article / Case Study Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in-50">
            <div className="bg-white rounded-xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto border-2 border-[#0B0F0D]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#5B645F] hover:text-[#0B0F0D] transition-colors border-2 border-[#0B0F0D]"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Header Metadata */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#5B645F] mb-3">
                    {selectedArticle.type === 'case-study' ? (
                      <span className="px-2.5 py-0.5 rounded bg-[#0E4B3C] text-[#C9A961] font-bold uppercase tracking-wider text-[11px] border border-[#0B0F0D]">
                        Case Study
                      </span>
                    ) : (
                      <span className="text-[#0E4B3C] font-semibold bg-[#0E4B3C]/10 px-2.5 py-0.5 rounded border border-[#0B0F0D]">
                        {selectedArticle.category}
                      </span>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                      {selectedArticle.readTime}
                    </span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[#0B0F0D] leading-snug">
                    {selectedArticle.title}
                  </h2>

                  {/* Client & Author Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 pt-4 border-t-2 border-[#0B0F0D] text-xs text-[#5B645F]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#C9A961]" />
                      <span>By <strong className="text-[#0B0F0D]">{selectedArticle.author || 'Sinisa Milenkovic'}</strong> • {selectedArticle.authorRole || 'Founder & Principal Operator'}</span>
                    </div>

                    {selectedArticle.client && (
                      <div className="flex items-center gap-1.5 font-mono text-[#0E4B3C]">
                        <Briefcase className="w-3.5 h-3.5 text-[#C9A961]" />
                        <span>Client: <strong>{selectedArticle.client}</strong></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Case Study Metrics Grid Banner */}
                {selectedArticle.type === 'case-study' && selectedArticle.metrics && (
                  <div className="p-4 sm:p-6 rounded-xl bg-[#06110D] border-2 border-[#16654F] text-white">
                    <div className="text-[11px] font-mono text-[#C9A961] uppercase tracking-wider font-bold mb-3">
                      Verified Client Outcomes &amp; Performance Metrics
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {selectedArticle.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-[#030806] border border-[#16654F] text-center">
                          <div className="text-xl sm:text-2xl font-editorial font-bold text-[#C9A961]">{m.value}</div>
                          <div className="text-[10px] font-mono text-[#F6F7F5]/80 uppercase mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Thesis / Key Takeaway Callout */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#06110D] text-white border-2 border-[#16654F] text-xs sm:text-sm">
                  <div className="text-[11px] font-mono text-[#C9A961] uppercase tracking-wider mb-1 font-bold">
                    Core Commercial Rule &amp; Thesis
                  </div>
                  <p className="italic text-[#F6F7F5]/90 text-sm sm:text-base leading-relaxed">
                    &ldquo;{selectedArticle.keyTakeaway}&rdquo;
                  </p>
                </div>

                {/* Markdown or Structured Content Rendering */}
                <div className="pt-2">
                  {selectedArticle.markdownContent ? (
                    <div className="markdown-body">
                      <Markdown>{selectedArticle.markdownContent}</Markdown>
                    </div>
                  ) : selectedArticle.content ? (
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
                  ) : null}
                </div>

                {/* Article Tags */}
                {selectedArticle.tags && (
                  <div className="pt-6 border-t-2 border-[#0B0F0D] flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-[#5B645F] flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-[#C9A961]" />
                      Focus Topics:
                    </span>
                    {selectedArticle.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-mono text-[#0E4B3C] bg-[#F6F7F5] px-2.5 py-1 rounded border border-[#0B0F0D]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Article Footer & Consultation Pathway CTA */}
                <div className="pt-6 border-t-2 border-[#0B0F0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F6F7F5] p-5 sm:p-6 rounded-xl border-2 border-[#0B0F0D]">
                  <div>
                    <div className="text-sm font-bold text-[#0B0F0D]">
                      Have questions about deploying this architecture in your business?
                    </div>
                    <div className="text-xs text-[#5B645F] mt-0.5">
                      Discuss directly with Sinisa during an honest 20-minute review. No pitch, just clear numbers.
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => handleShare(selectedArticle)}
                      className="px-3 py-2 rounded bg-white hover:bg-neutral-100 text-xs font-mono font-semibold border-2 border-[#0B0F0D] text-[#0B0F0D] transition-colors inline-flex items-center gap-1.5"
                    >
                      {copiedId === selectedArticle.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedId === selectedArticle.id ? 'Copied' : 'Share'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onEnquire();
                      }}
                      className="px-6 py-3 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs shrink-0 border-2 border-[#0B0F0D]"
                    >
                      Discuss With Sinisa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
