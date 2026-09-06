import { WhitepaperItem, InfosheetItem, InfographicItem, ObjectionBattlecard } from '../types';

export const WHITEPAPERS: WhitepaperItem[] = [
  {
    id: 'enterprise-quota-to-smb',
    code: 'WP-2026-01',
    title: 'From Enterprise Quota to SMB Pipeline',
    subtitle: 'Replacing Open-Ended Marketing Retainers with Disciplined Unit Economics & Fixed-Price Certainty',
    date: 'February 2026',
    author: 'Sinisa Milenkovic (Ex-Mandiant, Ex-Fortinet)',
    readTime: '14 min read',
    pages: 18,
    category: 'Commercial Strategy & Operations',
    abstract:
      'Australian small and medium enterprises routinely spend between $36,000 and $72,000 annually on digital marketing agency retainers that yield vanity impressions rather than qualified commercial pipeline. This whitepaper translates the rigorous quota-carrying sales methodologies of tier-one cybersecurity vendors into an actionable operating system for Australian commercial suppliers and professional services firms.',
    executiveSummary: [
      'The traditional agency retainer model misaligns economic incentives: agencies are rewarded for logged hours and vanity activity, while clients require qualified quote opportunities and deal velocity.',
      'A true revenue system connects inbound discovery directly to sales qualification within 7 minutes, eliminating the 4-day lag that kills 78% of B2B inbound deal momentum.',
      'Fixed-price milestone structures transfer delivery and scope risk back to the vendor, forcing radical operational efficiency and eliminating scope blowouts.',
      'Australian SMBs carrying $1M–$10M in turnover achieve superior ROI by deploying a lightweight, high-speed digital asset backed by structured CRM stage hygiene rather than bloated monthly retainers.',
    ],
    keyMetrics: [
      { label: 'Avg Agency Retainer Churn', value: '4.8 Months', context: 'Standard tenure before an Australian SMB cancels due to lack of attributable pipeline' },
      { label: 'Inbound Decay Rate', value: '78%', context: 'Drop in B2B buyer close probability if not contacted with a qualified quote within 4 hours' },
      { label: 'Fixed-Price Capital Efficiency', value: '3.4x', context: 'Direct pipeline generated per dollar spent compared to traditional open hourly billing' },
    ],
    chapters: [
      {
        number: '01',
        title: 'The Economic Pathology of the Agency Retainer',
        summary: 'Why time-and-materials contracts incentivize operational bloat and junior staffing handoffs.',
        paragraphs: [
          'The traditional digital marketing agency model in Australia operates on a billable-hours arbitrage. Senior directors pitch the engagement, but delivery is immediately handed down to junior account coordinators managing 14 to 20 client accounts simultaneously. Under this structure, the agency’s financial health relies on retaining accounts for as many monthly billing cycles as possible, regardless of whether commercial revenue was created.',
          'When commercial results stagnate, typical agency responses involve generating 40-page PDF reports detailing impressions, click-through rates, and algorithmic "visibility scores". None of these metrics reflect gross margin, inbound quote volume, or contract close rates.',
          'For Australian business owners with between 5 and 50 staff, this creates severe commercial friction: capital leaves the balance sheet monthly without producing attributable pipeline, while internal sales teams complain that incoming leads are tire-kickers seeking price shopping comparisons.',
        ],
        callout: 'An agency billing you $3,000/month across 12 months costs $36,000 in capital, plus an estimated $45,000 in internal founder distraction and missed opportunity cost.',
      },
      {
        number: '02',
        title: 'Cybersecurity Sales Disciplines Applied to SMB Operations',
        summary: 'How quota holders qualify deals, enforce stage hygiene, and eliminate speculative sales chasing.',
        paragraphs: [
          'In enterprise cybersecurity firms such as Mandiant and Fortinet, a sales executive carries multi-million dollar annual quotas. Every sales engineer hour, proof-of-concept deployment, and proposal draft carries a steep opportunity cost. As a result, enterprise sales teams operate under non-negotiable qualification criteria: MEDDPICC, strict stage entry/exit gates, and ruthless disqualification.',
          'Australian SMBs rarely apply this level of discipline. Inquiries arriving via generic web forms often sit in a shared info@ inbox for 24 to 72 hours. When followed up, reps treat all inquiries equally, spending hours creating bespoke 15-page proposals for prospects who have no approved budget, no decision timeline, and no compelling event.',
          'By standardising inbound capture directly into a unified CRM pipeline (HubSpot or Pipedrive) with automated notification triggers, businesses can implement a mandatory 7-minute qualification script that filters genuine commercial buyers from exploratory researchers.',
        ],
      },
      {
        number: '03',
        title: 'The Modern High-Conversion Web Architecture',
        summary: 'Replacing sluggish WordPress page-builders with sub-second static payloads and transparent pricing.',
        paragraphs: [
          'The corporate website is not a creative brand brochure; it is an automated frontline sales qualification terminal. Most Australian SMB websites suffer from severe page weight (averaging 4.5MB to 8MB) caused by bloated WordPress plugins, uncompressed stock photography, and tracking tags that delay initial paint beyond 3.5 seconds on mobile 4G.',
          'Modern commercial buyers research on mobile devices between client meetings. If pricing is concealed behind a mandatory "Contact Us for a Quote" barrier and the page requires 4 seconds to load, 62% of executive decision-makers bounce back to search results to review the next competitor.',
          'S. C. Milenwall implements a zero-bloat architecture with sub-1.2 second load times, clear fixed starting price expectations, and immediate calendar scheduling. This transparent framing attracts buyers who respect efficiency and repels low-margin bargain hunters before sales rep time is consumed.',
        ],
      },
      {
        number: '04',
        title: 'The Fixed-Price Contract: Realigning Commercial Risk',
        summary: 'Why transferring delivery risk to the vendor creates mutual accountability and rapid execution.',
        paragraphs: [
          'Under an hourly or monthly retainer agreement, any inefficiency, delay, or scope creep is billed directly to the client. The vendor faces no economic penalty for dragging a website redesign across 6 months instead of 3 weeks.',
          'A strict fixed-price engagement reverses this dynamic. Because the total investment is locked upfront with defined deliverables, the vendor is incentivized to execute with surgical precision and eliminate unnecessary review committees.',
          'For the Australian SMB, this provides absolute cash flow predictability. The business knows the exact capital commitment required to stand up an inbound revenue system, with clear milestones and direct accountability from a single principal operator.',
        ],
      },
    ],
    citation: 'Milenkovic, S. (2026). "From Enterprise Quota to SMB Pipeline: Replacing Open-Ended Marketing Retainers with Disciplined Unit Economics & Fixed-Price Certainty." S. C. Milenwall Research & Enablement Series, scmw.com.au/enablement.',
  },
  {
    id: 'generative-engine-optimization-2026',
    code: 'WP-2026-02',
    title: 'Generative Engine Optimization (GEO) & The Australian Entity Graph',
    subtitle: 'How ChatGPT, Perplexity, and Google AI Overviews Index and Recommend B2B Vendors in 2026',
    date: 'January 2026',
    author: 'Sinisa Milenkovic',
    readTime: '12 min read',
    pages: 15,
    category: 'Search & Generative AI Systems',
    abstract:
      'Search behavior is undergoing its most radical transformation since 1998. Commercial buyers in Sydney increasingly bypass standard Google organic results to ask conversational queries directly in ChatGPT Search, Perplexity Pro, and Google AI Overviews. This whitepaper outlines the technical criteria required for Australian commercial businesses to establish entity authority and win conversational citations.',
    executiveSummary: [
      'Generative AI engines do not rely on keyword density or legacy backlink counts; they synthesize answers from trusted entity knowledge graphs, ASIC corporate registries, and structured JSON-LD schemas.',
      'Over 41% of commercial B2B supplier inquiries in Australia now originate from or touch a generative AI summary prior to form submission.',
      'Businesses lacking explicit Schema.org entity nesting and consistent Australian Business Register (ABR) verification are completely invisible to generative AI answer engines.',
      'Winning AI search visibility requires a dual-engine architecture that satisfies both Google’s traditional crawler index and conversational semantic extraction models.',
    ],
    keyMetrics: [
      { label: 'Generative Search Adoption', value: '41%', context: 'Australian commercial buyers using AI answer engines to shortlist B2B service providers' },
      { label: 'Zero-Click SERP Rate', value: '64%', context: 'Google searches resolved within the AI Overview panel without clicking external links' },
      { label: 'Entity Schema Lift', value: '2.8x', context: 'Increase in citation frequency when complete Schema.org ProfessionalService graph is implemented' },
    ],
    chapters: [
      {
        number: '01',
        title: 'The Death of the Ten Blue Links',
        summary: 'How user search habits shifted from keyword browsing to conversational synthesis in 2025–2026.',
        paragraphs: [
          'For over two decades, search engine optimization focused on a single objective: ranking in the top three organic results for high-volume keywords. Business owners paid monthly retainers to build low-tier guest post backlinks and churn out generic 800-word blog posts.',
          'In 2026, that playbook is obsolete. With Google AI Overviews occupying prime screen real estate and tools like Perplexity and ChatGPT Search answering complex multi-attribute queries (e.g. "Who is a fixed-price commercial HVAC contractor in Western Sydney with ASIC accreditation?"), the searcher receives a direct synthesized recommendation.',
          'If your business is not cited inside that synthesized paragraph, your website might as well not exist, even if you rank #4 organically beneath the AI fold.',
        ],
      },
      {
        number: '02',
        title: 'How LLMs Retrieve and Verify Commercial Entities',
        summary: 'The technical mechanics of retrieval-augmented generation (RAG) and citation validation.',
        paragraphs: [
          'Large language models do not hallucinate supplier recommendations randomly in commercial search modes. When queried about Australian commercial vendors, models execute retrieval over trusted knowledge graphs and authoritative indexes.',
          'The retrieval pipeline looks for high-confidence entity corroboration: matching company name, ABN/ACN registry verification on ASIC, consistent physical address markers in Sydney NSW, verified customer reviews on neutral platforms, and clear pricing or service taxonomy.',
          'Websites with ambiguous service descriptions or hidden pricing receive low confidence scores during entity extraction and are excluded from citation lists in favor of competitors with explicit schema definitions.',
        ],
      },
      {
        number: '03',
        title: 'The Dual-Engine Technical Implementation Blueprint',
        summary: 'The exact code and structure required to satisfy Google crawlers and AI answer engines simultaneously.',
        paragraphs: [
          'A dual-engine search strategy requires three concrete implementation pillars:',
          '1. Nested JSON-LD Schema: Every page must inject unambiguous Schema.org markup specifying @type: ProfessionalService, founder details, geographic service radius, postal coordinates, and direct pricing range.',
          '2. High-Density Informational Answers: Content must lead with direct, declarative answers in the first 40 words of each section, followed by structured tables and empirical proof.',
          '3. Sub-Second Mobile Payloads: AI web crawlers (such as GPTBot, ClaudeBot, and Google-Extended) operate on strict latency budgets. Pages that load slowly or require heavy client-side JavaScript hydration often time out during retrieval indexing.',
        ],
        callout: 'Technical Tip: Validate your site weekly against major AI user-agents to ensure your robots.txt allows responsible entity ingestion without blocking algorithmic discovery.',
      },
      {
        number: '04',
        title: 'Measuring AI Search Visibility & Commercial Impact',
        summary: 'Replacing obsolete keyword ranking grids with referral tracking and conversational citation audits.',
        paragraphs: [
          'Traditional SEO agencies supply reports containing 50 keyword positions that have zero correlation to commercial cash flow. In the generative era, tracking requires monitoring conversational citation frequency, brand entity sentiment, and direct referral traffic from AI platforms (e.g., chatgpt.com, perplexity.ai).',
          'Furthermore, your CRM must log the specific answer engine that introduced the buyer. In practice, buyers arriving from AI search engines convert at nearly double the rate of generic organic visitors because the AI has already pre-qualified your capabilities against their specific constraints.',
        ],
      },
    ],
    citation: 'Milenkovic, S. (2026). "Generative Engine Optimization (GEO) & The Australian Entity Graph." S. C. Milenwall Research & Enablement Series, scmw.com.au/enablement.',
  },
];

export const INFOSHEETS: InfosheetItem[] = [
  {
    id: 'capability-statement',
    code: 'INFO-01',
    title: 'Commercial Capability Statement & Engagement Summary',
    subtitle: 'Executive 1-Pager for Managing Directors, General Managers & Board Review',
    audience: 'Managing Directors, Operations Leads, Board Members',
    format: 'Executive 1-Page Briefing',
    lastUpdated: 'February 2026',
    summary:
      'A concise, one-page commercial briefing detailing S. C. Milenwall’s fixed-price scope structure, enterprise sales heritage, core disciplines, and operational guarantees for Australian businesses.',
    highlights: [
      { label: 'Single Point of Accountability', desc: 'Direct scoping and delivery by founder Sinisa Milenkovic (Ex-Mandiant, Fortinet). Zero junior account manager handoffs.' },
      { label: 'Fixed-Price Certainty', desc: 'Guaranteed upfront pricing on all engagements. No hourly meters, no retainer bloat, no surprise invoicing.' },
      { label: 'Rapid Turnaround SLAs', desc: 'Full custom website builds delivered in 2–3 weeks; strategic 90-day roadmaps delivered in 14 days.' },
      { label: 'Commercial First Focus', desc: 'Designed purely to generate phone calls, email quote requests, and measurable pipeline velocity.' },
    ],
    contentSections: [
      {
        heading: 'Core Service Disciplines & Guaranteed Fixed Rates',
        bullets: [
          'High-Conversion Website Design & Build: $2,500 fixed. Sub-1.2s load speed, WCAG AA compliance, direct CRM lead integration.',
          'Dual-Engine SEO & AI Search Visibility: $1,500/month fixed sprint. Entity graph schema, local Sydney intent, ChatGPT/Perplexity citation readiness.',
          '90-Day Marketing Strategy & Positioning Roadmap: $4,000 fixed. One-page operational plan, two-channel execution focus, fortnightly sprints.',
          'Sales Enablement Playbook & Pipeline Infrastructure: $1,500 fixed. HubSpot/Pipedrive setup, 7-minute qualification script, standardized proposal templates.',
        ],
      },
      {
        heading: 'Operational Governance & Pedigree',
        bullets: [
          'Founded by Sinisa Milenkovic, former enterprise sales quota holder at global cybersecurity leaders Mandiant and Fortinet.',
          'Registered Australian Pty Ltd operating out of Sydney, NSW with full ASIC transparency and professional indemnity coverage.',
          'Strict 48-hour formal proposal guarantee following initial 20-minute operational review.',
        ],
      },
    ],
    commercialAssurance: 'All engagements operate under a written fixed-scope agreement. Scope adjustments require bilateral written sign-off before any additional investment is committed.',
  },
  {
    id: 'website-audit-checklist',
    code: 'INFO-02',
    title: '10-Point Technical & Commercial Website Audit Scorecard',
    subtitle: 'Diagnostic Checklist to Benchmark Your B2B Digital Inbound Architecture',
    audience: 'Office Managers, Marketing Leads, Business Owners',
    format: 'Diagnostic 1-Page Scorecard',
    lastUpdated: 'January 2026',
    summary:
      'The exact 10 criteria used by S. C. Milenwall during initial inbound diagnostic reviews to determine whether an Australian B2B website is driving qualified pipeline or leaking commercial revenue.',
    highlights: [
      { label: 'Speed & Mobile Payload', desc: 'Pages must render initial paint in under 1.2 seconds on standard Australian 4G mobile networks.' },
      { label: 'Pricing Transparency', desc: 'Clear starting rates or range indicators to establish trust and filter unviable prospects.' },
      { label: 'Entity Schema Verification', desc: 'Structured JSON-LD schema linking your business directly to ASIC registry and Sydney coordinates.' },
      { label: 'CRM Push Automation', desc: 'Zero manual email forwarding. Form inquiries must push instantly into structured CRM pipeline stages.' },
    ],
    contentSections: [
      {
        heading: 'The 10 Non-Negotiable Inspection Checkpoints',
        bullets: [
          '01. Mobile Performance: Does the site achieve 90+ on Google PageSpeed Mobile with zero layout shifts?',
          '02. First 5-Second Test: Does the homepage clearly state who you serve, what commercial friction you fix, and your geographic remit?',
          '03. Pricing Clarity: Are starting investments or pricing tiers visible to filter tire-kickers upfront?',
          '04. Disqualification Filters: Does the contact mechanism ask 2–3 qualifying questions (e.g. project scope, budget range) to prevent wasted sales time?',
          '05. Direct Meeting Scheduling: Can qualified buyers book a calendar review directly without 3 days of email ping-pong?',
          '06. Schema.org Entity Graph: Is complete ProfessionalService and Organization JSON-LD markup embedded for AI search retrieval?',
          '07. Frictionless Phone & Contact: Is the phone number click-to-call with clear Sydney office hours and response time guarantees?',
          '08. Social Proof & Case Studies: Are case studies formatted with concrete baseline metrics (before/after revenue or conversion impact) rather than vague compliments?',
          '09. Security & Governance: Does the site run on modern HTTPS, zero outdated WordPress plugins, and strict privacy policy disclosures?',
          '10. Single Point of Accountability: Is there a human face and verified background behind the service offering?',
        ],
      },
    ],
    commercialAssurance: 'Websites meeting 8 or more checkpoints consistently report 2.5x higher inquiry-to-quote conversion rates compared to generic brochure sites.',
  },
  {
    id: 'sales-qualification-matrix',
    code: 'INFO-03',
    title: 'The 7-Minute Qualification Script & Disqualification Matrix',
    subtitle: 'Sales Enablement Cheat Sheet to Stop Wasting Quota on Low-Margin Prospects',
    audience: 'Founders, Sales Representatives, Business Development Leads',
    format: 'Sales Rep Cheat Sheet',
    lastUpdated: 'February 2026',
    summary:
      'An enterprise-grade qualification playbook that empowers Australian sales teams and founders to determine whether an inbound prospect is worth investing proposal hours into within the first 7 minutes of conversation.',
    highlights: [
      { label: 'Speed to Disqualification', desc: 'The faster you identify a non-fit prospect, the more capacity you protect for high-margin, high-velocity deals.' },
      { label: 'The 5 Diagnostic Questions', desc: 'Scripted questions that uncover true budget authority, compelling events, and decision maker consensus.' },
      { label: 'Proposal Guardrail', desc: 'Never write a custom proposal without verified mutual agreement on scope, timeline, and commercial investment.' },
    ],
    contentSections: [
      {
        heading: 'The 5 Critical Inbound Questions',
        bullets: [
          'Question 1 (Compelling Event): "What changed in the business this month that made fixing this an active priority rather than something to revisit in Q3?"',
          'Question 2 (Cost of Inaction): "If you leave your current marketing or web setup exactly as it is for the next 6 months, what does that cost the business in lost revenue or operational friction?"',
          'Question 3 (Decision Structure): "Besides yourself, who else will review the fixed-price scope before board approval or financial sign-off?"',
          'Question 4 (Budget Baseline): "Our fixed scopes typically start between $2,500 and $4,000 depending on depth. Is that in line with what the partners have allocated for this solution?"',
          'Question 5 (Timeline & Next Step): "If the proposal matches your operational requirements exactly, are you positioned to commence within the next 14 days?"',
        ],
      },
      {
        heading: 'Red Flags: Immediate Disqualification Signals',
        bullets: [
          'Prospect refuses to share budget expectations and insists on "just giving me your cheapest quote".',
          'Decision maker refuses to attend the 20-minute operational review and delegates conversation to an intern.',
          'Prospect demands open-ended hourly billing or asks for speculative spec work prior to engagement.',
          'Prospect has cycled through 3 different marketing agencies in the past 12 months (indicates chronic internal misalignment).',
        ],
      },
    ],
    commercialAssurance: 'Disciplined qualification prevents the #1 killer of SMB sales productivity: unpaid custom proposal generation for unviable prospects.',
  },
];

export const INFOGRAPHICS: InfographicItem[] = [
  {
    id: 'agency-trap-vs-milenwall',
    code: 'INFO-GRA-01',
    title: 'The Agency Retainer Trap vs. The S. C. Milenwall Operating Model',
    subtitle: 'A Direct Visual Comparison of Financial Alignment, Accountability, and Business Outcomes',
    type: 'comparison',
    summary:
      'Exposes why traditional digital marketing agency contracts create structural misalignment and shows how fixed-price milestone delivery protects Australian small business cash flow.',
  },
  {
    id: 'dual-engine-search-topology',
    code: 'INFO-GRA-02',
    title: 'Dual-Engine Search & Entity Retrieval Topology (2026)',
    subtitle: 'How Modern Buyers Find B2B Suppliers via Traditional Google SERPs + Generative AI Answer Engines',
    type: 'architecture',
    summary:
      'Maps the flow of commercial buyer discovery through traditional organic crawlers and generative AI engines (ChatGPT, Perplexity, Gemini), detailing the central role of the SCM Entity Knowledge Graph.',
  },
  {
    id: 'four-stage-revenue-pipeline',
    code: 'INFO-GRA-03',
    title: 'The 4-Stage Revenue Architecture Pipeline',
    subtitle: 'From Cold Anonymous Traffic to Signed Fixed-Price Contract: Benchmarks & Conversion SLAs',
    type: 'funnel',
    summary:
      'Visualizes the step-by-step conversion funnel with strict SLAs, qualification gates, and conversion percentage benchmarks for Sydney commercial firms.',
  },
];

export const OBJECTION_BATTLECARDS: ObjectionBattlecard[] = [
  {
    id: 'hire-inhouse',
    objection: 'Why not just hire an in-house marketing coordinator for $85k/year?',
    category: 'In-House vs Vendor',
    prospectMindset: 'Believes an in-house employee is always cheaper and more dedicated than an external specialist.',
    recommendedResponse:
      'An $85,000 employee actually costs your business approximately $115,000 once you calculate 11.5% superannuation, payroll tax, workers comp, software licenses, laptop hardware, and recruitment fees. Furthermore, a single coordinator cannot possess deep technical web development, enterprise sales pipeline architecture, and advanced AI entity search expertise simultaneously. S. C. Milenwall provides principal-level enterprise execution for a fraction of that annual overhead with zero employment liability and fixed-scope guarantees.',
    mathematicalProof: 'In-House Cost: ~$115k/yr + 3-month ramp-up vs. S. C. Milenwall: $2,500 fixed build + $1,500/mo sprint ($20,500 total yr 1) = $94,500 annual capital savings.',
    actionableFollowup: 'Ask: "Do you have the operational capacity right now to mentor and direct a junior marketing coordinator full-time, or do you need a turnkey system built and working within 3 weeks?"',
  },
  {
    id: 'standard-agency',
    objection: 'Why shouldn’t we hire a 25-person digital marketing agency with a fancy office?',
    category: 'Budget & Agency',
    prospectMindset: 'Associates team size and expensive agency offices with quality and reliability.',
    recommendedResponse:
      'In a 25-person agency, senior leadership pitches you, but your account is immediately assigned to a junior coordinator managing 15 other clients who is learning on your dime. You are paying heavily for their office rent, account directors, and internal meetings. At S. C. Milenwall, you work directly with founder Sinisa Milenkovic, who carried multi-million dollar sales quotas in enterprise cybersecurity. You receive senior strategic acumen, zero handoffs, and strict fixed-price contracts.',
    mathematicalProof: 'Agency Retainer: $4,000/mo x 12 = $48,000 (often producing 20-page impression reports) vs. SCM Fixed Scopes: $2,500 build + milestone strategy = Guaranteed deliverables without open-ended hourly fees.',
    actionableFollowup: 'Ask: "When you have a critical sales question, do you want to submit a ticket to an agency helpdesk, or message the founder who built your system directly?"',
  },
  {
    id: 'paid-ads-only',
    objection: 'Why not just put all our budget into Google Ads or LinkedIn Ads?',
    category: 'Technology & AI',
    prospectMindset: 'Believes paid advertising is an instant magic faucet that fixes revenue issues.',
    recommendedResponse:
      'Paid ads amplify whatever sales infrastructure you already have. If your website is slow, lacks pricing clarity, or drops inbound inquiries into a neglected inbox, sending expensive $18-per-click Google Ads traffic to it is like pouring water into a leaky bucket. S. C. Milenwall builds the conversion engine and pipeline discipline first. Once your website converts visitors at 5%+ and your qualification process responds in 7 minutes, every advertising dollar you spend yields predictable, compounding returns.',
    mathematicalProof: 'Sending 500 clicks at $15 ($7,500 ad spend) to a 1% converting site yields 5 inquiries. Fix the conversion architecture to 4% and the exact same $7,500 yields 20 inquiries (4x efficiency).',
    actionableFollowup: 'Ask: "What is your current website conversion rate from visitor to phone enquiry? If we don’t measure that accurately today, paid ad spend is purely speculative."',
  },
  {
    id: 'cheap-offshore',
    objection: 'We can get a WordPress website built offshore for $600. Why pay $2,500?',
    category: 'Risk & Timelines',
    prospectMindset: 'Views a website as a graphic design commodity rather than an enterprise sales asset.',
    recommendedResponse:
      'A $600 offshore website is built using pirated or bloated WordPress themes stuffed with security vulnerabilities, stock American photography, and sluggish scripts that fail Australian mobile PageSpeed tests. More critically, offshore developers do not understand Sydney commercial buyer psychology, Australian business legislation, or enterprise sales qualification. S. C. Milenwall builds high-performance, secure digital assets engineered to turn skeptical Australian managing directors into paying clients.',
    mathematicalProof: 'A single commercial contract won through a fast, credible website pays for the entire $2,500 investment 3x to 10x over in your first 60 days.',
    actionableFollowup: 'Ask: "Would you trust a $600 marketing setup to represent your reputation when pitching a $50,000 commercial client?"',
  },
];
