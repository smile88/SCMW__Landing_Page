export type NavigationTab = 
  | 'home' 
  | 'services' 
  | 'selector'
  | 'testimonials'
  | 'about' 
  | 'insights' 
  | 'tools'
  | 'enablement'
  | 'contact' 
  | 'privacy' 
  | 'terms';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  pitch: string;
  startingPrice: string;
  billingType: 'fixed' | 'monthly';
  typicalTimeline: string;
  forWhom: string;
  whatsIncluded: string[];
  deliverables: string[];
  format: string;
}

export interface BuyerPersona {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  whatSCMProvides: string;
  recommendedService: string;
  idealOutcome: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  date: string;
  type?: 'article' | 'case-study';
  client?: string;
  industry?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  author?: string;
  authorRole?: string;
  tags?: string[];
  summary: string;
  markdownContent?: string;
  content?: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
  keyTakeaway: string;
}

export interface DiagnosticQuestion {
  id: number;
  category: 'Website' | 'Search & AI' | 'Strategy' | 'Sales Pipeline';
  question: string;
  options: {
    label: string;
    points: number;
    feedback: string;
  }[];
}

export interface TestimonialChapter {
  time: string;
  title: string;
}

export interface TestimonialTranscriptItem {
  time: string;
  speaker: string;
  text: string;
}

export interface TestimonialMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  industry: 'Construction & Trades' | 'B2B Tech & Cyber' | 'Professional Services' | 'Commercial Operations';
  serviceUsed: string;
  quote: string;
  challenge: string;
  solution: string;
  bottleneck?: string;
  deliveredSystem?: string;
  metrics: TestimonialMetric[];
  hasVideo?: boolean;
  videoDuration?: string;
  videoTranscript?: string;
  chapters?: TestimonialChapter[];
  transcript?: TestimonialTranscriptItem[];
}

export interface SelectorQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    description: string;
    serviceWeights: {
      'web-design'?: number;
      'seo-ai-search'?: number;
      'marketing-strategy'?: number;
      'sales-enablement'?: number;
    };
  }[];
}

export interface WhitepaperItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  readTime: string;
  pages: number;
  category: string;
  abstract: string;
  executiveSummary: string[];
  keyMetrics: { label: string; value: string; context: string }[];
  chapters: {
    number: string;
    title: string;
    summary: string;
    paragraphs: string[];
    callout?: string;
  }[];
  citation: string;
}

export interface InfosheetItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  audience: string;
  format: string;
  lastUpdated: string;
  summary: string;
  highlights: { label: string; desc: string }[];
  contentSections: {
    heading: string;
    bullets: string[];
  }[];
  commercialAssurance: string;
}

export interface InfographicItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  type: 'comparison' | 'architecture' | 'funnel';
  summary: string;
}

export interface ObjectionBattlecard {
  id: string;
  objection: string;
  category: 'Budget & Agency' | 'In-House vs Vendor' | 'Technology & AI' | 'Risk & Timelines';
  prospectMindset: string;
  recommendedResponse: string;
  mathematicalProof: string;
  actionableFollowup: string;
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'Fixed-Price Model' | 'Project Timelines' | 'Scope & Governance' | 'Handoff & Support';
  answer: string;
  keyPoints?: string[];
  badge?: string;
}

