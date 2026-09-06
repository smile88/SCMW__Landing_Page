import { FaqItem } from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'fixed-price-mechanism',
    category: 'Fixed-Price Model',
    badge: 'Core Guarantee',
    question: 'How does S. C. Milenwall’s fixed-price model work in practice?',
    answer:
      'Every project begins with a rigorous 20-minute diagnostic discussion followed by an itemised Statement of Work (SOW) delivered within 48 hours. The SOW explicitly defines every deliverable, technical integration, and milestone. The price stated in the agreement is the exact and final amount you pay. We do not operate an hourly billing meter, and you will never receive an unexpected invoice for meeting time, research, or email correspondence.',
    keyPoints: [
      'Guaranteed fixed fee locked in writing before commencement',
      'Zero hourly billing, meeting surcharges, or open-ended meters',
      'Detailed itemised deliverables with defined acceptance criteria',
    ],
  },
  {
    id: 'timeline-overrun-risk',
    category: 'Project Timelines',
    badge: 'Risk Reversal',
    question: 'What happens if a project takes longer than anticipated? Who pays?',
    answer:
      'S. C. Milenwall assumes 100% of the financial delivery risk. If a technical challenge, third-party API quirk, or design refinement requires additional hours to meet our enterprise-grade standard, we absorb those hours entirely. Your agreed fee does not increase under any circumstances for delays originating on our end.',
    keyPoints: [
      'We carry all financial risk of technical or production delays',
      'Your quoted fee remains strictly static regardless of hours worked',
      'Delivery deadlines are committed in writing at project kick-off',
    ],
  },
  {
    id: 'typical-timelines',
    category: 'Project Timelines',
    badge: 'Delivery Velocity',
    question: 'What are the typical project turnaround timelines for your services?',
    answer:
      'Because we eliminate agency layers and junior account churn, turnaround times are fast and predictable: High-Conversion Websites take 2 to 3 weeks; SEO & Generative Search Foundation audits take 10 business days; Sales Pipeline & CRM Integrations take 3 to 4 weeks; and Strategic Positioning Diagnostics are delivered within 5 to 7 business days.',
    keyPoints: [
      'Website Design & Build: 2 to 3 weeks from kick-off',
      'SEO & AI Search Foundation: 10 business days',
      'Sales Pipeline & CRM Architecture: 3 to 4 weeks',
      'Commercial Positioning Diagnostic: 5 to 7 business days',
    ],
  },
  {
    id: 'scope-changes',
    category: 'Scope & Governance',
    badge: 'Clear Boundaries',
    question: 'How do you handle scope creep or new feature requests midway through?',
    answer:
      'Each project includes structured feedback checkpoints for copy refinements and visual tuning. If your team discovers a completely new functional requirement mid-project (for example, introducing a custom member portal or third-party ERP integration not in the original scope), we never apply stealth hourly charges. Instead, we scope it as a standalone fixed-price addendum with clear timeline implications, requiring your written approval before any additional work begins.',
    keyPoints: [
      'Refinements and styling adjustments are built into the original scope',
      'New feature requests are quoted as discrete, optional fixed-fee addenda',
      'Work on new features begins only after mutual written sign-off',
    ],
  },
  {
    id: 'payment-schedule',
    category: 'Fixed-Price Model',
    badge: 'Transparent Terms',
    question: 'What is your payment structure and invoice schedule?',
    answer:
      'Fixed-price engagements operate on a simple two-stage milestone structure: 50% deposit upon formal agreement to secure your dedicated production window, and the remaining 50% upon final acceptance, staging sign-off, and live domain deployment. For ongoing search visibility, services are billed monthly in advance on a rolling 30-day agreement with zero long-term lock-in.',
    keyPoints: [
      '50% deposit to secure calendar sprint and initiate kick-off',
      '50% balance payable only upon final staging sign-off and launch',
      'Monthly search agreements feature no lock-ins and 14-day cancellation flexibility',
    ],
  },
  {
    id: 'fixed-vs-retainer',
    category: 'Fixed-Price Model',
    badge: 'Economic Alignment',
    question: 'Why do you offer fixed pricing instead of monthly agency retainers?',
    answer:
      'Traditional marketing agencies sell hours through recurring retainers, which creates an inherent conflict of interest: agencies profit by dragging work out and packing calendars with status meetings. S. C. Milenwall was founded by an enterprise tech sales veteran to operate with quota-carrying discipline: we are incentivised to deliver production-ready systems rapidly so your business starts capturing revenue immediately.',
    keyPoints: [
      'Eliminates agency incentive to prolong projects for billable hours',
      'Direct alignment: our profit is tied to execution velocity and quality',
      'Provides Australian business owners complete budget certainty for board reviews',
    ],
  },
  {
    id: 'client-time-commitment',
    category: 'Project Timelines',
    badge: 'Executive Efficiency',
    question: 'How much time is required from me and my internal staff?',
    answer:
      'We respect that you have a business to run. Our process is engineered to minimise executive drag: we require a single 60-minute kick-off interview to extract your positioning and customer context, administrative credentials to your domain or CRM, and 30-minute reviews at two scheduled milestones. We do not demand multi-hour weekly brainstorming sessions or delegate homework to your team.',
    keyPoints: [
      'One 60-minute initial discovery and positioning interview',
      'Two focused 30-minute milestone review checkpoints',
      'All heavy technical lifting, copywriting, and schema coding handled by us',
    ],
  },
  {
    id: 'client-feedback-delays',
    category: 'Project Timelines',
    badge: 'Operational Flexibility',
    question: 'What happens if our internal team is delayed in providing feedback or assets?',
    answer:
      'We understand that operational emergencies and client demands arise in small and medium businesses. If your team needs extra time to review copy or retrieve domain credentials, your project timeline simply pauses cleanly. We do not charge restart penalties, cancellation fees, or impose artificial deadline forfeitures.',
    keyPoints: [
      'Clean project pause with zero restart or penalty fees',
      'Sprint resumes seamlessly once your team provides milestone feedback',
      'Transparent milestone tracking via shared asynchronous status docs',
    ],
  },
  {
    id: 'hidden-costs-ownership',
    category: 'Scope & Governance',
    badge: 'Total Ownership',
    question: 'Are there hidden software markups, hosting fees, or proprietary lock-ins?',
    answer:
      'Zero. All third-party infrastructure (such as your Webflow or WordPress hosting, domain registrar, and CRM software seats) is established directly in your company’s name. You pay the direct vendor rates with zero agency markup. Upon final payment, 100% of the IP, code, graphics, and administrative credentials belong entirely to you.',
    keyPoints: [
      'No proprietary hosting lock-in or software reseller markups',
      'All accounts created directly in your business entity’s name',
      'Complete intellectual property and source code ownership transferred at launch',
    ],
  },
  {
    id: 'post-launch-warranty',
    category: 'Handoff & Support',
    badge: 'Commercial Warranty',
    question: 'What post-launch support and warranty is included once the project is finished?',
    answer:
      'Every fixed-price build includes a comprehensive 30-day commercial warranty following launch. If any functional bug, layout anomaly, or email routing error emerges within that window, we fix it promptly at zero cost. Additionally, we provide recorded video walkthroughs and administrative handover documentation so your internal team can make routine updates with complete autonomy.',
    keyPoints: [
      '30-day post-launch warranty covering all bugs and form routing at no charge',
      'Recorded 30-minute personalized video walkthrough of your new system',
      'Complete autonomy: your team can edit text and view leads without ongoing dependency',
    ],
  },
];
