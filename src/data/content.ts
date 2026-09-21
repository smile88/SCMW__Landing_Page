import { ServiceItem, BuyerPersona, InsightArticle, DiagnosticQuestion, TestimonialItem, SelectorQuestion } from '../types';

export const BUSINESS_INFO = {
  tradingName: 'S. C. Milenwall',
  legalEntity: 'S. C. Milenwall Pty Ltd',
  founder: 'Sinisa Milenkovic',
  location: 'Sydney, NSW, Australia',
  domain: 'scmw.com.au',
  email: 'hello@scmw.com.au',
  positioning: 'Enterprise-grade growth systems, built for small business budgets.',
  mission: 'To give small and medium businesses the same calibre of sales and marketing infrastructure that large enterprises take for granted — built at a price and pace that actually fits their size.',
  purpose: "Sinisa's career was built inside enterprise cybersecurity sales — Mandiant, Fortinet — carrying quota into disciplined, process-driven sales organisations. Small businesses almost never get access to that calibre of thinking; they're served by generalist freelancers or agencies that sell hours, not outcomes. S. C. Milenwall exists to close that gap: enterprise-grade discipline, applied at small business scale and price.",
  responseGuarantee: 'Response guaranteed within 1 business day. Detailed fixed-price proposal within 48 hours following your 20-minute discussion.',
};

export const CORE_VALUES = [
  {
    title: 'Fixed-Price Honesty',
    subtitle: 'No surprises. No open meters.',
    description: 'You know the exact fee before work starts. We assume the delivery risk. If a task takes longer to get right, the invoice does not change.',
  },
  {
    title: 'Single Point of Accountability',
    subtitle: 'The person who scopes it, builds it.',
    description: 'No bait-and-switch. You will never be sold by a director and handed over to an unsupervised junior coordinator.',
  },
  {
    title: 'Evidence Over Hype',
    subtitle: 'Real metrics, stated confidence.',
    description: "Recommendations are grounded in verifiable data and realistic expectations — not whatever marketing trend happens to be circulating this week.",
  },
  {
    title: 'Plain Language',
    subtitle: 'Zero enterprise fluff.',
    description: 'No inflated frameworks, no borrowed buzzwords, and no obfuscation. If an idea cannot be explained in simple English, it has no place in your business.',
  },
  {
    title: 'Enterprise Discipline, Small Business Scale',
    subtitle: 'Process without bureaucracy.',
    description: 'The throughline behind every project: taking the high-quota, process-driven rigor of tier-one tech sales and applying it cleanly at SMB scale.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    name: 'Website Design & Development',
    tagline: 'High-Conversion Digital Assets',
    pitch: 'A site built to generate enquiries, not just exist.',
    startingPrice: '$2,500',
    billingType: 'fixed',
    typicalTimeline: '2 to 3 weeks',
    forWhom: 'Businesses whose current website hasn’t changed in years or acts as a passive brochure rather than an enquiry engine.',
    whatsIncluded: [
      'Conversion-focused visual design and layout',
      'Mobile-first responsive engineering for phones and tablets',
      'Copywriting grounded in clear commercial positioning',
      'High-speed hosting setup on Webflow or clean WordPress',
      'Google Analytics 4 & Google Search Console installation',
      'Lead capture routing directly into your email and CRM',
    ],
    deliverables: [
      'Production-ready website on your domain',
      'Direct enquiry capture workflows and email notification triggers',
      'Recorded 30-minute handover video and documentation',
      'Full source code and account ownership transferred to you',
    ],
    format: 'Fixed-fee project scoped upfront with clear milestones.',
  },
  {
    id: 'seo-ai-search',
    number: '02',
    name: 'SEO & AI Search Visibility',
    tagline: 'Dual-Engine Visibility for 2026',
    pitch: 'Search optimisation that accounts for how customers now find businesses through ChatGPT and AI Overviews too.',
    startingPrice: '$1,500/mo',
    billingType: 'monthly',
    typicalTimeline: 'Ongoing monthly sprint (no lock-in contracts)',
    forWhom: 'Sydney SMBs wanting qualified search traffic from traditional Google organic SERPs and generative AI answers.',
    whatsIncluded: [
      'Technical SEO audit & Google Search Console foundation',
      'LLM citation readiness (ChatGPT, Perplexity, Google AI Overviews)',
      'High-intent local and regional Sydney search keyword targeting',
      'Structured entity data and schema markup implementation',
      'Monthly production of authoritative, problem-solving content',
      'Transparent monthly reporting on keyword positions and enquiry lift',
    ],
    deliverables: [
      'Monthly technical health and citation audit',
      'Published search assets and schema updates',
      'Direct rankings dashboard with zero vanity metrics',
      'Monthly 30-minute strategic review call',
    ],
    format: 'Monthly rolling agreement. You stay because it works, not because you are locked into a 12-month contract.',
  },
  {
    id: 'marketing-strategy',
    number: '03',
    name: 'Marketing Strategy & Positioning',
    tagline: 'Commercial Clarity & Execution Roadmap',
    pitch: 'A documented plan — audience, message, channels, a 90-day roadmap — not a deck that gets filed and forgotten.',
    startingPrice: '$4,000',
    billingType: 'fixed',
    typicalTimeline: '3 to 4 weeks',
    forWhom: 'Established business owners feeling scattered across disjointed tactics without knowing where their next deal originates.',
    whatsIncluded: [
      'Commercial positioning audit and competitor landscape review',
      'Buyer persona definition and high-leverage value proposition',
      'Channel rationalisation (focusing on the 2 channels that actually work)',
      'Practical 90-day execution roadmap with specific weekly actions',
      'Budget allocation framework tailored to your revenue model',
      'Executive one-pager summary for internal stakeholders and board',
    ],
    deliverables: [
      'Complete Strategy & Positioning Document (under 25 pages, pure utility)',
      'Interactive 90-Day Implementation Sprint Sheet',
      'Messaging matrix for all client-facing communications',
      'Two 60-minute implementation coaching sessions',
    ],
    format: 'Intensive discovery, stakeholder interviews, and an actionable fixed-price roadmap.',
  },
  {
    id: 'sales-enablement',
    number: '04',
    name: 'Sales Enablement & Marketing Systems',
    tagline: 'Quota-Calibre Infrastructure',
    pitch: 'Sales playbooks, CRM setup, brand assets and collateral — the tools a growing sales effort actually runs on.',
    startingPrice: '$1,500',
    billingType: 'fixed',
    typicalTimeline: '2 to 3 weeks',
    forWhom: 'Founders who just hired their first sales reps, or owner-operators whose pipeline is trapped inside their own heads.',
    whatsIncluded: [
      'B2B sales playbook: qualification criteria, script outlines, email templates',
      'CRM architecture setup and pipeline stage definition (HubSpot / Pipedrive)',
      'Follow-up cadence automation and objection handling guides',
      'High-impact sales collateral: case study summaries and proposal templates',
      'Lead handoff workflows between website, email, and pipeline',
      'Sales rep onboarding checklist and pipeline hygiene rules',
    ],
    deliverables: [
      'Documented Company Sales Playbook',
      'Fully configured CRM pipeline with stages mapped to your buyer cycle',
      'Set of 5 core follow-up templates and proposal template',
      'Recorded walkthrough training for your sales team',
    ],
    format: 'Fixed-price system build tailored to your existing sales motion.',
  },
];

export const PERSONAS: BuyerPersona[] = [
  {
    id: 'owner-operator',
    title: 'The Owner-Operator',
    subtitle: 'Trades, Professional Services, Independent Retail',
    description: 'You run the operations and do the selling and marketing yourself — usually at 9pm after the day’s work is done. You buy on trust and want a clear, fixed-fee outcome without agency fluff.',
    painPoints: [
      'Marketing happens when there is downtime, which means revenue rollercoasters.',
      'Sceptical of slick digital agencies that charge $3,000/month for vague "social presence".',
      'Needs a website that generates real quote requests without demanding daily management.',
    ],
    whatSCMProvides: 'A fixed-price website and local search presence that quietly captures and qualifies customer enquiries 24/7, with zero ongoing maintenance headaches.',
    recommendedService: 'Website Design & Development ($2,500) + Local SEO',
    idealOutcome: 'Consistent phone calls and email quote requests without wasting evenings fiddling with Canva or WordPress plugins.',
  },
  {
    id: 'growth-founder',
    title: 'The Growth-Stage Founder',
    subtitle: 'Tech & B2B Services Companies (10–40 Staff)',
    description: 'You have proven product-market fit and hired your first 1–3 sales reps. Now you realise pipeline is unpredictable because everyone sells differently and nothing is systematised.',
    painPoints: [
      'Every new salesperson invents their own pitch, discounting arbitrarily.',
      'CRM is an empty graveyard of uncontacted leads and neglected stages.',
      'Needs enterprise-level sales discipline without hiring an expensive $250k VP of Sales.',
    ],
    whatSCMProvides: 'A disciplined sales playbook, clean CRM pipeline architecture, and high-impact collateral built by someone who carried enterprise quotas at Fortinet and Mandiant.',
    recommendedService: 'Sales Enablement & Marketing Systems ($1,500) + Strategy ($4,000)',
    idealOutcome: 'A predictable, repeatable sales machine where new reps onboard in days and deals move predictably through pipeline stages.',
  },
  {
    id: 'office-manager',
    title: 'The Office Manager Buyer',
    subtitle: 'Managing Marketing Alongside Key Operations',
    description: 'You wear multiple hats and have been asked by the directors to organise the website or find a marketing partner. You need clear documentation and transparent fixed pricing to justify spend upward.',
    painPoints: [
      'Agencies provide vague pitch decks full of vanity metrics that partners reject.',
      'Fear of surprise hourly invoices blowing out the agreed budget.',
      'Needs professional, forwardable one-pagers that make the business case self-evident.',
    ],
    whatSCMProvides: 'Crystal-clear, fixed-price proposals with defined scopes, realistic timelines, and a single point of accountability you can confidently hand to the directors.',
    recommendedService: 'Website Design & Development ($2,500) with Fixed-Fee Guarantee',
    idealOutcome: 'A smooth, on-budget project completed without internal friction, making you look exceptionally capable to the leadership team.',
  },
];

import { INSIGHTS_DATA } from './insightsData';

export const INSIGHTS: InsightArticle[] = INSIGHTS_DATA;

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'case-trades',
    clientName: 'Mark Henderson',
    role: 'Managing Director & Licensee',
    company: 'Apex Electrical Infrastructure Pty Ltd',
    location: 'Silverwater, Sydney NSW',
    industry: 'Construction & Trades',
    serviceUsed: 'Website Design & Development ($2,500) + SEO Engine',
    quote: "Replaced our 9pm quoting scramble with a high-converting website and an enterprise 48-hour proposal SLA. Quoting speed improved 340%.",
    challenge: "Founder was doing all sales and quoting at 9pm after 10 hours on-site. The existing website was a broken 5-year-old brochure that leaked high-margin commercial tenders to larger competitors.",
    solution: "High-performance conversion website + automated enquiry qualification funnel + standardised 48-hour fixed-price commercial proposal template.",
    bottleneck: "Founder doing ad-hoc quoting at 9pm after 10h on-site; brochure site leaking tenders.",
    deliveredSystem: "High-speed conversion website + automated enquiry funnel + 48-hour proposal SLA kit.",
    metrics: [
      { label: "Quoting Turnaround", value: "+340%", detail: "From 6 days down to <24h" },
      { label: "Commercial Enquiries", value: "3.8x", detail: "Inbound tier-1 facility leads" },
      { label: "Pipeline Captured", value: "$240k+", detail: "In first 90 days post-launch" },
      { label: "Founder Time Saved", value: "14 hrs/wk", detail: "Eliminated 9pm quoting" }
    ],
    hasVideo: true,
    videoDuration: "03:42",
    videoTranscript: "“Before working with Sinisa, I was literally sitting at the kitchen table at 9:30 every night trying to draft electrical tenders on messy spreadsheets after being on-site since 6am. S. C. Milenwall completely rebuilt our web presence and gave us a modular 48-hour fixed proposal format. He didn't just build a site — he built a sales system. Within ninety days, we captured over $240,000 in new commercial contracts. The investment paid for itself ten times over on the first project.”",
    chapters: [
      { time: "0:00", title: "The 9pm Quoting Bottleneck & Lost Tenders" },
      { time: "1:15", title: "Deploying SCM's High-Speed Conversion Engine" },
      { time: "2:30", title: "$240k in Closed Commercial Pipeline" }
    ],
    transcript: [
      { time: "0:04", speaker: "Mark Henderson", text: "Before working with Sinisa, I was literally sitting at the kitchen table at 9:30 every night trying to draft electrical tenders on messy spreadsheets after being on-site since 6am." },
      { time: "0:38", speaker: "Mark Henderson", text: "We were losing major commercial fit-outs because competitors looked three times more professional online and returned quotes in 48 hours while we took a week." },
      { time: "1:18", speaker: "Mark Henderson", text: "S. C. Milenwall completely rebuilt our web presence and gave us a modular 48-hour fixed proposal format. He didn't just build a site — he built a sales system." },
      { time: "2:12", speaker: "Mark Henderson", text: "Within ninety days, we captured over $240,000 in new commercial contracts. The investment paid for itself ten times over on the first project." }
    ]
  },
  {
    id: 'case-cyber',
    clientName: 'Elena Rostova',
    role: 'Founder & Principal Consultant',
    company: 'Krypton Cyber & Compliance Advisory',
    location: 'Macquarie Park, Sydney NSW',
    industry: 'B2B Tech & Cyber',
    serviceUsed: 'Sales Enablement & Marketing Systems ($1,500) + Strategy ($4,000)',
    quote: "Sinisa brought genuine quota-carrying sales discipline into our CRM. Deal velocity doubled and win rates jumped to 92%.",
    challenge: "Small cybersecurity firm had just hired two junior sales reps who had no playbooks, pitched ad-hoc, and let deals stall indefinitely in an untracked pipeline.",
    solution: "Enterprise sales playbook + HubSpot deal stage qualification gates (MEDDIC adapted for SMB) + objection battlecard and executive capability deck.",
    bottleneck: "Junior sales reps improvising pitches; stalled deals in untracked CRM pipeline.",
    deliveredSystem: "Enterprise sales playbook + HubSpot qualification gates + objection battlecard kit.",
    metrics: [
      { label: "Sales Cycle Velocity", value: "-57%", detail: "From 68 days down to 29 days" },
      { label: "Proposal Win Rate", value: "92%", detail: "On qualified stage-2 deals" },
      { label: "Pipeline Hygiene", value: "100%", detail: "Zero deals lost in heads" },
      { label: "Closed Revenue", value: "$380k+", detail: "In certified compliance audits" }
    ],
    hasVideo: true,
    videoDuration: "04:15",
    videoTranscript: "“We had solid technical capability in ISO 27001 and Essential Eight compliance, but when we hired our first salespeople, they didn't know how to navigate commercial buyers. Most agencies give you creative brand advice. Sinisa has carried enterprise quota at Mandiant and Fortinet — he understands actual pipeline mechanics. He built us a concise sales playbook, qualification criteria, and objection battlecards that our reps use every day on discovery calls. Our sales cycle dropped from over two months down to under thirty days.”",
    chapters: [
      { time: "0:00", title: "Junior Reps Improvising & Stalled Deals" },
      { time: "1:22", title: "Implementing Mandiant-Calibre Sales Playbooks" },
      { time: "2:45", title: "57% Reduction in Deal Close Time" }
    ],
    transcript: [
      { time: "0:05", speaker: "Elena Rostova", text: "We had solid technical capability in ISO 27001 and Essential Eight compliance, but when we hired our first salespeople, they didn't know how to navigate commercial buyers." },
      { time: "0:45", speaker: "Elena Rostova", text: "Most agencies give you creative brand advice. Sinisa has carried enterprise quota at Mandiant and Fortinet — he understands actual pipeline mechanics." },
      { time: "1:30", speaker: "Elena Rostova", text: "He built us a concise sales playbook, qualification criteria, and objection battlecards that our reps use every day on discovery calls." },
      { time: "2:50", speaker: "Elena Rostova", text: "Our sales cycle dropped from over two months down to under thirty days. It gave our business true institutional maturity." }
    ]
  },
  {
    id: 'case-professional',
    clientName: 'David Thornton',
    role: 'Managing Partner',
    company: 'Vanguard Strata & Legal Advisory',
    location: 'Sydney CBD, NSW',
    industry: 'Professional Services',
    serviceUsed: 'Dual-Engine SEO & AI Search Visibility ($1,500/mo)',
    quote: "SCM engineered our AI search footprint. When Sydney property committees ask ChatGPT or Google AI for strata specialists, we get cited first.",
    challenge: "High-end legal advisory relied 100% on historical partner referrals. They had zero visibility in AI answer engines or modern commercial search, leaving millions in strata disputes on the table.",
    solution: "Dual-engine AI Search Architecture + Schema.org entity graph + authoritative legal field briefings + local Sydney citation networks.",
    bottleneck: "Referral ceiling; zero visibility in modern generative AI engines or local commercial search.",
    deliveredSystem: "Dual-engine AI search architecture + Schema.org entity graph + authoritative field briefings.",
    metrics: [
      { label: "AI Citation Share", value: "+280%", detail: "Recommended by ChatGPT & AIO" },
      { label: "Enterprise Inbounds", value: "14 RFPs", detail: "From tier-1 strata schemes" },
      { label: "Retainer Value", value: "$180k/yr", detail: "Secured in ongoing retainers" },
      { label: "Zero Jargon", value: "100%", detail: "Plain-language delivery" }
    ],
    hasVideo: true,
    videoDuration: "03:10",
    videoTranscript: "“As commercial lawyers, our instinct was that marketing didn't apply to high-end litigation. But we noticed commercial property managers were increasingly using AI search tools. Sinisa explained exactly how Google AI Overviews and ChatGPT look for verified entity schemas and legal citations rather than cheesy keyword stuffing. Within four months of deploying SCM's dual-engine SEO, we were being cited directly in AI syntheses for Sydney commercial strata disputes. That visibility produced fourteen institutional RFPs and added over $180,000 in annualised retainer fees.”",
    chapters: [
      { time: "0:00", title: "The Referral Ceiling in Professional Services" },
      { time: "1:08", title: "Structuring Entity Schema for Modern LLMs" },
      { time: "2:15", title: "Dominating Commercial Strata RFPs" }
    ],
    transcript: [
      { time: "0:04", speaker: "David Thornton", text: "As commercial lawyers, our instinct was that marketing didn't apply to high-end litigation. But we noticed commercial property managers were increasingly using AI search tools." },
      { time: "0:42", speaker: "David Thornton", text: "Sinisa explained exactly how Google AI Overviews and ChatGPT look for verified entity schemas and legal citations rather than cheesy keyword stuffing." },
      { time: "1:20", speaker: "David Thornton", text: "Within four months of deploying SCM's dual-engine SEO, we were being cited directly in AI syntheses for Sydney commercial strata disputes." },
      { time: "2:25", speaker: "David Thornton", text: "That visibility produced fourteen institutional RFPs and added over $180,000 in annualised retainer fees. Outstanding execution." }
    ]
  },
  {
    id: 'case-operations',
    clientName: 'Graham West',
    role: 'Operations Director',
    company: 'Pacific Cold-Chain & Logistics',
    location: 'Western Sydney, NSW',
    industry: 'Commercial Operations',
    serviceUsed: 'Website Design ($2,500) + SEO & AI Visibility ($1,500/mo)',
    quote: "No agency jargon, no open hourly billing. Sinisa delivered a sub-second logistics portal and secured our Google #1 placement in 3 weeks flat.",
    challenge: "Industrial cold-storage operator was paying a $4,500/month agency retainer for social media posts that brought zero pallet storage enquiries.",
    solution: "Sub-second responsive site + cold-chain capability matrix + Sydney industrial SEO + automated pallet rate estimator enquiry capture.",
    bottleneck: "Burning $4.5k/mo on agency social retainers with zero storage pallet enquiries.",
    deliveredSystem: "Sub-second industrial capability portal + Sydney logistics SEO + rate estimator.",
    metrics: [
      { label: "Agency Retainer Eliminated", value: "$54k/yr", detail: "Zero recurring agency waste" },
      { label: "Site Speed Index", value: "0.8s", detail: "100% Core Web Vitals pass" },
      { label: "Commercial Pallet Enquiries", value: "+410%", detail: "Direct warehousing RFQs" },
      { label: "Delivery Time", value: "19 Days", detail: "Fixed-price guaranteed finish" }
    ],
    hasVideo: true,
    videoDuration: "02:48",
    videoTranscript: "“We run 12,000 square metres of cold storage in Western Sydney. For two years, our previous agency sent us monthly PDFs with Instagram impressions. Not a single pallet of freight came from it. Sinisa audited our setup in twenty minutes, told us exactly what was broken, and rebuilt our commercial site in nineteen days for a flat $2,500 fee. We now rank at the top for refrigerated logistics Sydney and receive three to five qualified commercial freight enquiries every week.”",
    chapters: [
      { time: "0:00", title: "The $4.5k Agency Vanity Metric Waste" },
      { time: "1:02", title: "Building a Sub-Second Industrial Portal" },
      { time: "2:05", title: "410% Increase in Commercial Inbound Pallets" }
    ],
    transcript: [
      { time: "0:04", speaker: "Graham West", text: "We run 12,000 square metres of cold storage in Western Sydney. For two years, our previous agency sent us monthly PDFs with Instagram impressions. Not a single pallet of freight came from it." },
      { time: "0:48", speaker: "Graham West", text: "Sinisa audited our setup in twenty minutes, told us exactly what was broken, and rebuilt our commercial site in nineteen days for a flat $2,500 fee." },
      { time: "1:32", speaker: "Graham West", text: "He focused on fast mobile load times, clear pallet capability specs, and Sydney industrial search terms." },
      { time: "2:15", speaker: "Graham West", text: "We now rank at the top for refrigerated logistics Sydney and receive three to five qualified commercial freight enquiries every week. Best investment we've made." }
    ]
  }
];

export const SELECTOR_QUESTIONS: SelectorQuestion[] = [
  {
    id: 'primary-bottleneck',
    title: 'What is your single biggest commercial bottleneck right now?',
    subtitle: 'Select the constraint that most directly caps your revenue or wastes your operational hours.',
    options: [
      {
        id: 'outdated-website',
        label: 'Our website looks outdated or acts like a brochure that does not generate enquiries',
        description: 'Visitors land on your page, find no compelling commercial reason to engage, and leave without calling or submitting a quote request.',
        serviceWeights: { 'web-design': 4, 'seo-ai-search': 1 },
      },
      {
        id: 'invisible-search',
        label: 'We are invisible on Google and modern AI searches like ChatGPT and Perplexity',
        description: 'Competitors are winning inbound enquiries simply because your business has no structured entity visibility or search authority.',
        serviceWeights: { 'seo-ai-search': 4, 'web-design': 1 },
      },
      {
        id: 'unclear-strategy',
        label: 'No clear 90-day plan; marketing happens in sporadic bursts and revenue rollercoasters',
        description: 'You are juggling disjointed tactics without knowing which channel produces real pipeline, burning cash without accountability.',
        serviceWeights: { 'marketing-strategy': 4, 'sales-enablement': 1 },
      },
      {
        id: 'sales-friction',
        label: 'Sales process is ad-hoc; reps struggle, deals stall in pipeline, or proposals take too long',
        description: 'Pipeline is trapped inside the founder’s head, proposals are written from scratch every time, and deals slip through the cracks.',
        serviceWeights: { 'sales-enablement': 4, 'marketing-strategy': 1 },
      },
      {
        id: 'complete-growth-system',
        label: 'We need end-to-end infrastructure: a high-conversion site, search visibility, and sales tools',
        description: 'Starting fresh or overhauling an existing business to implement an enterprise-calibre commercial revenue engine.',
        serviceWeights: { 'web-design': 3, 'seo-ai-search': 3, 'sales-enablement': 2, 'marketing-strategy': 2 },
      },
    ],
  },
  {
    id: 'team-and-size',
    title: 'What best describes your business structure and decision-making model?',
    subtitle: 'This ensures our scope matches your operational reality and internal bandwidth.',
    options: [
      {
        id: 'owner-operator',
        label: 'Owner-Operator / Trade / Boutique (1–5 Staff)',
        description: 'You run operations and make decisions directly; you need a fixed-price setup that works 24/7 without demanding your daily time.',
        serviceWeights: { 'web-design': 2, 'seo-ai-search': 2 },
      },
      {
        id: 'growth-b2b',
        label: 'B2B Tech / Commercial Services (6–40 Staff, 1–4 Sales Reps)',
        description: 'Proven product/service with dedicated sales reps; you need repeatable playbooks, CRM hygiene, and predictable deal velocity.',
        serviceWeights: { 'sales-enablement': 3, 'marketing-strategy': 2 },
      },
      {
        id: 'office-manager-partner',
        label: 'Office Manager / Practice Partner coordinating with directors',
        description: 'You need crystal-clear, risk-free fixed scopes and justification one-pagers to present to partners or board members.',
        serviceWeights: { 'web-design': 2, 'marketing-strategy': 2 },
      },
    ],
  },
  {
    id: 'timeline-urgency',
    title: 'What is your preferred implementation timeframe?',
    subtitle: 'All S. C. Milenwall engagements are bounded by firm delivery dates.',
    options: [
      {
        id: 'fast-build',
        label: 'Fast Turnaround Sprint (2 to 3 Weeks)',
        description: 'Targeted fixed-price build to fix an immediate bottleneck (new site or sales playbook) before end of month.',
        serviceWeights: { 'web-design': 2, 'sales-enablement': 2 },
      },
      {
        id: 'strategic-90-day',
        label: 'Strategic Transformation (3 to 4 Weeks Discovery + 90-Day Execution)',
        description: 'Thorough commercial positioning audit, competitor landscape review, and a sequenced quarterly execution roadmap.',
        serviceWeights: { 'marketing-strategy': 3 },
      },
      {
        id: 'monthly-momentum',
        label: 'Ongoing Monthly Sprint (No Lock-In Contract)',
        description: 'Continuous month-over-month technical SEO, AI citation authority building, and content asset publishing.',
        serviceWeights: { 'seo-ai-search': 3 },
      },
    ],
  },
  {
    id: 'target-budget',
    title: 'What is your planned investment bracket for this initiative?',
    subtitle: 'We eliminate open-ended hourly billing; you receive guaranteed deliverables for a known fee.',
    options: [
      {
        id: 'fixed-core',
        label: '$1,500 – $2,500 Fixed Investment',
        description: 'Best suited for a dedicated sales playbook setup ($1,500) or high-conversion website build ($2,500).',
        serviceWeights: { 'sales-enablement': 2, 'web-design': 2 },
      },
      {
        id: 'monthly-search',
        label: '$1,500/Month Rolling Sprint',
        description: 'Continuous dual-engine SEO and AI search visibility without annual contract lock-ins.',
        serviceWeights: { 'seo-ai-search': 3 },
      },
      {
        id: 'strategic-tier',
        label: '$4,000+ Comprehensive Strategy & Positioning',
        description: 'Complete commercial repositioning, channel rationalization, and 90-day execution framework.',
        serviceWeights: { 'marketing-strategy': 3 },
      },
      {
        id: 'multi-discipline',
        label: '$5,000 – $8,000 Full-Stack Growth Engine',
        description: 'Combined website rebuild, local search foundation, and sales playbook architecture.',
        serviceWeights: { 'web-design': 2, 'seo-ai-search': 2, 'sales-enablement': 2 },
      },
    ],
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    category: 'Website',
    question: 'When was your company website last meaningfully updated with new positioning and conversion pathways?',
    options: [
      { label: 'Within the last 12 months, and it actively generates quality leads every week', points: 3, feedback: 'Strong website foundation.' },
      { label: '1 to 3 years ago; it looks fine but acts mostly as an online brochure', points: 2, feedback: 'Underperforming asset; likely leaking potential client enquiries.' },
      { label: 'Over 3 years ago or we do not have a dedicated site', points: 1, feedback: 'Critical gap; your website is actively depressing credibility and conversion.' },
    ],
  },
  {
    id: 2,
    category: 'Search & AI',
    question: 'If a potential client asks ChatGPT or Google AI Overviews for your specific service in Sydney, what happens?',
    options: [
      { label: 'We are regularly cited and named as a recommended provider', points: 3, feedback: 'Ahead of 95% of Sydney SMBs in AI entity search.' },
      { label: 'Our competitors are cited, or we have never tested it', points: 1, feedback: 'Vulnerable to 2026 conversational search disruption.' },
      { label: 'We only show up if someone searches our exact trading name', points: 2, feedback: 'Missing generic high-intent category search volume.' },
    ],
  },
  {
    id: 3,
    category: 'Strategy',
    question: 'Do you have a documented 90-day marketing plan with specific channels, messaging, and budgets?',
    options: [
      { label: 'Yes, documented and reviewed fortnightly with clear metrics', points: 3, feedback: 'High strategic discipline.' },
      { label: 'We have ideas in our heads or an old deck we no longer look at', points: 1, feedback: 'Operating on instinct; revenue will continue to fluctuate.' },
      { label: 'We rely 100% on word-of-mouth and referrals', points: 2, feedback: 'Great referral base, but fragile without a controllable inbound engine.' },
    ],
  },
  {
    id: 4,
    category: 'Sales Pipeline',
    question: 'How is your sales process currently managed when an enquiry arrives?',
    options: [
      { label: 'Documented CRM pipeline, structured qualification stages, and follow-up templates', points: 3, feedback: 'Enterprise-grade pipeline control.' },
      { label: 'Tracked in an email inbox, notes app, or sporadic spreadsheet', points: 1, feedback: 'Significant pipeline leakage; follow-ups are slipping through the cracks.' },
      { label: 'The founder does it all by memory and calls back whenever time permits', points: 2, feedback: 'Founder bottleneck; prevents smooth hiring of new sales capacity.' },
    ],
  },
];

