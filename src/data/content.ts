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
    id: 'julian-commercial-glazing',
    clientName: 'Julian R.',
    role: 'Managing Director',
    company: 'Apex Architectural Glazing & Facades',
    location: 'Silverwater, Western Sydney',
    industry: 'Construction & Trades',
    serviceUsed: 'Website Design & Development ($2,500) + SEO Engine',
    quote: "Before S. C. Milenwall, our website was a 6-year-old brochure that brought in zero business. Sinisa rebuilt it in 18 days on a fixed price. Within 6 weeks, we landed two tier-one commercial facade tenders directly through the site enquiry form. The enterprise background is real — he talks like a commercial partner, not an agency creative.",
    challenge: "Lacked digital credibility; Tier-1 construction contractors could not find compliance specs or request tenders online.",
    solution: "Conversion-engineered responsive website with AS1288 architectural compliance pathways, fast spec download forms, and high-intent Western Sydney commercial SEO.",
    metrics: [
      { label: 'Inbound Tender Enquiries', value: '+340%' },
      { label: 'Fixed Build Delivery', value: '18 Days' },
      { label: 'Won Commercial Projects', value: '$380k+' },
      { label: 'Budget Variance', value: '$0.00' },
    ],
    hasVideo: true,
    videoDuration: '1 min 45 sec',
    videoTranscript: "“We run a tight commercial fabrication shop in Silverwater. Every agency we spoke to wanted a $4k monthly retainer with zero deliverables in writing. Sinisa gave us a fixed $2,500 quote, mapped out the exact layout, and delivered it ahead of schedule. The site actually closes deals for us. Best money we've spent on marketing in a decade.”",
  },
  {
    id: 'david-cyber-consultancy',
    clientName: 'David K.',
    role: 'Co-Founder & CEO',
    company: 'Vanguard Cyber & Cloud Defense',
    location: 'North Sydney, NSW',
    industry: 'B2B Tech & Cyber',
    serviceUsed: 'Sales Enablement & Marketing Systems ($1,500) + Strategy ($4,000)',
    quote: "Finding someone who understands enterprise tech sales and small business reality is virtually impossible. Sinisa built our HubSpot pipeline architecture, cold qualification talk tracks, and our 90-day positioning playbook. Our sales cycle dropped from 42 days to 18 days because our reps finally knew how to qualify and follow up.",
    challenge: "Hired two account executives who were discounting ad-hoc and leaving deals stuck in qualification for over a month.",
    solution: "Comprehensive B2B sales playbook, qualification criteria scorecard, multi-touch follow-up email cadences, and proposal templates.",
    metrics: [
      { label: 'Sales Cycle Velocity', value: '-57%' },
      { label: 'Pipeline Close Rate', value: '31% (up from 14%)' },
      { label: 'Rep Ramp Time', value: '7 Days' },
      { label: 'Playbook Adoption', value: '100%' },
    ],
    hasVideo: true,
    videoDuration: '2 min 10 sec',
    videoTranscript: "“Because Sinisa came out of Mandiant and Fortinet, he speaks the exact language of B2B pipeline discipline. He didn't give us a 50-page theory paper — he gave us working scripts, deal qualification stages, and proposal decks that our reps could use on Monday morning. Total game changer.”",
  },
  {
    id: 'marcus-acoustic-engineering',
    clientName: 'Marcus T.',
    role: 'Operations Director',
    company: 'Resonance Acoustic Engineers',
    location: 'Parramatta & Sydney CBD',
    industry: 'Professional Services',
    serviceUsed: 'Marketing Strategy & Positioning ($4,000)',
    quote: "We were burned by an agency that charged us $3,500 a month for 8 months with zero transparency. S. C. Milenwall came in, conducted a rigorous positioning audit, cut 3 vanity marketing channels, and gave us a single 90-day execution roadmap. We signed 4 corporate acoustic testing contracts within 90 days.",
    challenge: "Scattered marketing tactics, zero channel accountability, and frustration with hourly billing bloat from previous agency.",
    solution: "Channel rationalization focusing on developer direct outreach and technical organic search; 90-day execution sprint sheet and buyer positioning matrix.",
    metrics: [
      { label: 'Wasted Agency Spend Cut', value: '$42,000/yr' },
      { label: 'Corporate Contracts', value: '4 Signed' },
      { label: 'Strategy Delivery', value: 'Under 3 Weeks' },
      { label: 'Executive Clarity', value: '10/10' },
    ],
    hasVideo: false,
  },
  {
    id: 'michael-commercial-hvac',
    clientName: 'Michael P.',
    role: 'Principal & Director',
    company: 'KoolFlow Commercial Air & Energy',
    location: 'Alexandria, South Sydney',
    industry: 'Commercial Operations',
    serviceUsed: 'Website Design ($2,500) + SEO & AI Visibility ($1,500/mo)',
    quote: "I was sceptical about AI search until Sinisa showed me how facility managers in Sydney were using ChatGPT to shortlist HVAC contractors. He rebuilt our web engine and structured our entity data. Now when facility managers ask AI assistants for commercial HVAC in South Sydney, KoolFlow is cited first. No lock-in contracts either.",
    challenge: "Completely invisible on generative AI search engines and losing commercial maintenance contracts to larger competitors.",
    solution: "Engineered high-speed web application with structured schema markup, local Sydney commercial HVAC content, and monthly citation sprints.",
    metrics: [
      { label: 'Monthly Maintenance Contracts', value: '+5 New Facilities' },
      { label: 'ChatGPT / Perplexity Citations', value: 'Top 3 Cited' },
      { label: 'Mobile Page Speed Score', value: '98/100' },
      { label: 'Contract Flexibility', value: 'Rolling Monthly' },
    ],
    hasVideo: true,
    videoDuration: '1 min 30 sec',
    videoTranscript: "“As an owner-operator, I don't have time to understand algorithms. I just need my phone to ring with facility managers who have real budget. S. C. Milenwall built us a weapon of a site and keeps our search presence locked in month after month. Honest, straight-talking, and delivers.”",
  },
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

