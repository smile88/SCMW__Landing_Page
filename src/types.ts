export type NavigationTab = 
  | 'home' 
  | 'services' 
  | 'selector'
  | 'testimonials'
  | 'about' 
  | 'insights' 
  | 'tools' 
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
  author?: string;
  authorRole?: string;
  tags?: string[];
  summary: string;
  content: {
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
  metrics: {
    label: string;
    value: string;
  }[];
  hasVideo?: boolean;
  videoDuration?: string;
  videoTranscript?: string;
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
