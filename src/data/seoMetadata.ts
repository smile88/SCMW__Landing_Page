import { NavigationTab } from '../types';

export interface TabSeoConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogType: 'website' | 'article';
  canonicalPath: string;
  jsonLd: Record<string, any>;
}

export const SEO_METADATA: Record<NavigationTab, TabSeoConfig> = {
  home: {
    title: 'S. C. Milenwall | Enterprise-Grade Growth Systems for Small Business',
    description: 'Enterprise-grade growth systems built for small business budgets in Sydney. Fixed-price web design ($2,500), SEO & AI search ($1,500/mo), strategy, and sales playbooks. No open meters.',
    keywords: 'growth systems Sydney, B2B website design Sydney, fixed price SEO Australia, AI search visibility, sales enablement playbook, Sinisa Milenkovic, S. C. Milenwall',
    ogTitle: 'S. C. Milenwall | Enterprise-Grade Growth Systems for Small Business',
    ogDescription: 'Growth systems built like an enterprise sales team would build them — sized for a small business budget. By Sinisa Milenkovic, Sydney NSW.',
    ogType: 'website',
    canonicalPath: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'S. C. Milenwall',
      legalName: 'S. C. Milenwall Pty Ltd',
      url: 'https://scmw.com.au/',
      logo: 'https://scmw.com.au/icon.png',
      description: 'Enterprise-grade growth systems built for small business budgets in Sydney, NSW.',
      founder: {
        '@type': 'Person',
        name: 'Sinisa Milenkovic',
        jobTitle: 'Principal Operator',
        alumniOf: ['Mandiant', 'Fortinet'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      priceRange: '$1,500 - $4,000 AUD',
      openingHours: 'Mo-Fr 08:30-18:00',
      telephone: '+61 2 8000 0000',
      email: 'hello@scmw.com.au',
    },
  },
  services: {
    title: 'Fixed-Price Services & Transparent Rates | S. C. Milenwall Sydney',
    description: 'Explore our 4 fixed-price disciplines: High-Converting Websites ($2,500), SEO & AI Search ($1,500/mo), 90-Day Strategy Roadmaps ($4,000), and Sales Playbooks ($1,500).',
    keywords: 'fixed price web design Sydney, fixed fee SEO, sales enablement consulting, B2B marketing roadmap Sydney, transparent agency pricing',
    ogTitle: 'Fixed-Price Services & Transparent Rates | S. C. Milenwall',
    ogDescription: 'Four disciplined growth systems for Sydney businesses. Fixed scopes, enterprise calibre execution, and transparent rates with zero hourly billing surprises.',
    ogType: 'website',
    canonicalPath: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'S. C. Milenwall Growth Services',
      description: 'Four core commercial disciplines offered at fixed-price rates.',
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'Website Design & Development',
          offers: {
            '@type': 'Offer',
            price: '2500',
            priceCurrency: 'AUD',
            priceSpecification: 'Fixed fee one-off',
          },
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'SEO & AI Search Visibility',
          offers: {
            '@type': 'Offer',
            price: '1500',
            priceCurrency: 'AUD',
            priceSpecification: 'Rolling monthly, 3-month initial commitment',
          },
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'Marketing & Positioning Strategy',
          offers: {
            '@type': 'Offer',
            price: '4000',
            priceCurrency: 'AUD',
            priceSpecification: 'Fixed fee one-off',
          },
        },
        {
          '@type': 'Service',
          position: 4,
          name: 'Sales Enablement & Deal Acceleration',
          offers: {
            '@type': 'Offer',
            price: '1500',
            priceCurrency: 'AUD',
            priceSpecification: 'Fixed fee one-off',
          },
        },
      ],
    },
  },
  selector: {
    title: 'Service Matcher Engine | Find Your Exact Fixed-Fee Scope | S. C. Milenwall',
    description: 'Answer 4 operational questions to instantly discover which S. C. Milenwall system eliminates your specific commercial bottleneck. Calculate your fixed investment in 60 seconds.',
    keywords: 'growth service calculator, agency scope matcher, SMB marketing assessment Sydney, fixed fee recommendation engine',
    ogTitle: 'Interactive Service Recommendation Engine | S. C. Milenwall',
    ogDescription: 'Diagnose your operational constraints and calculate an exact fixed-scope recommendation and pricing package tailored to your business.',
    ogType: 'website',
    canonicalPath: '/selector',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'S. C. Milenwall Service Selector',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'AUD',
      },
    },
  },
  testimonials: {
    title: 'Client Proof & Verified Case Reviews | S. C. Milenwall Sydney',
    description: 'Read verified client outcomes and watch recorded walkthroughs from Sydney owner-operators and B2B leaders across construction, cyber, and professional services.',
    keywords: 'S. C. Milenwall reviews, B2B case studies Sydney, fixed fee web design results, SEO client proof Australia',
    ogTitle: 'Verified Client Outcomes & Case Reviews | S. C. Milenwall',
    ogDescription: 'Real feedback and quantifiable pipeline metrics from Sydney businesses that eliminated vague agency retainers with S. C. Milenwall growth systems.',
    ogType: 'website',
    canonicalPath: '/testimonials',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Client Testimonials & Recorded Case Walkthroughs',
      description: 'Verified testimonials and performance outcomes for S. C. Milenwall.',
    },
  },
  about: {
    title: 'About Sinisa Milenkovic | Principal Operator | S. C. Milenwall Sydney',
    description: 'Learn about Sinisa Milenkovic, founder of S. C. Milenwall. Bringing 10+ years of enterprise tech sales rigor (Mandiant, Fortinet) to Sydney small and medium businesses.',
    keywords: 'Sinisa Milenkovic, S. C. Milenwall founder, Mandiant sales, Fortinet sales, enterprise sales discipline SMB Sydney',
    ogTitle: 'About Sinisa Milenkovic | Principal Operator | S. C. Milenwall',
    ogDescription: 'Senior enterprise tech sales rigor, adapted for small business budgets. Single point of accountability with zero junior account manager handoffs.',
    ogType: 'website',
    canonicalPath: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Sinisa Milenkovic',
        jobTitle: 'Founder & Principal Operator',
        worksFor: {
          '@type': 'Organization',
          name: 'S. C. Milenwall',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sydney',
          addressRegion: 'NSW',
          addressCountry: 'Australia',
        },
      },
    },
  },
  insights: {
    title: 'SEO & Commercial Strategy Insights | S. C. Milenwall',
    description: 'Actionable perspectives on 2026 AI search visibility, high-converting B2B web architecture, 90-day execution roadmaps, and quota-driven sales playbooks.',
    keywords: 'AI search optimization, Perplexity SEO Sydney, B2B web conversion, sales playbook templates, agency fee models',
    ogTitle: 'SEO & Commercial Growth Insights | S. C. Milenwall',
    ogDescription: 'Practising the SEO and content discipline we sell. Written for Sydney operators who value precision, proof, and commercial honesty.',
    ogType: 'website',
    canonicalPath: '/insights',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'S. C. Milenwall Insights',
      description: 'Practitioner-grade perspectives on SEO, web design, marketing strategy, and sales enablement.',
    },
  },
  tools: {
    title: 'Interactive Diagnostic Suite & ROI Modeler | S. C. Milenwall',
    description: 'Free interactive growth tools: 8-point Commercial Diagnostic Audit, Retainer vs Fixed-Price Cost Simulator, Pipeline ROI Calculator, and Board Justification Memo.',
    keywords: 'growth diagnostic audit, agency retainer simulator, B2B pipeline calculator, board justification generator',
    ogTitle: 'Interactive Diagnostic Tools & ROI Modeler | S. C. Milenwall',
    ogDescription: 'Audit your marketing bottlenecks, simulate agency cost savings, and model pipeline ROI with our interactive tool suite.',
    ogType: 'website',
    canonicalPath: '/tools',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'S. C. Milenwall Diagnostic & ROI Suite',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
    },
  },
  contact: {
    title: 'Book a 20-Minute Direct Review | S. C. Milenwall Sydney',
    description: 'Speak directly with Sinisa Milenkovic. Honest evaluation of your commercial bottlenecks, with a written fixed-price proposal delivered within 48 hours.',
    keywords: 'contact S. C. Milenwall, book growth consultation Sydney, Sinisa Milenkovic contact, fixed price web proposal',
    ogTitle: 'Book a 20-Minute Direct Review with Sinisa Milenkovic',
    ogDescription: 'Direct operator consultation with Sinisa Milenkovic. No sales reps, no junior account managers. Response guaranteed within 1 business day.',
    ogType: 'website',
    canonicalPath: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact S. C. Milenwall',
      description: 'Book a focused 20-minute discussion directly with Sinisa Milenkovic.',
      url: 'https://scmw.com.au/contact',
    },
  },
  privacy: {
    title: 'Privacy Policy | Australian Privacy Principles | S. C. Milenwall',
    description: 'Privacy Policy and Australian Privacy Principles (APP) compliance statement for S. C. Milenwall Pty Ltd, Sydney Australia.',
    keywords: 'privacy policy, S. C. Milenwall privacy, Australian Privacy Principles',
    ogTitle: 'Privacy Policy | S. C. Milenwall',
    ogDescription: 'Australian Privacy Principles compliance and data governance commitment of S. C. Milenwall Pty Ltd.',
    ogType: 'website',
    canonicalPath: '/privacy',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: 'https://scmw.com.au/privacy',
    },
  },
  terms: {
    title: 'Terms of Engagement & Fixed-Price Guarantee | S. C. Milenwall',
    description: 'Commercial terms of engagement, fixed-price scope guarantees, intellectual property assignment, and delivery standards for S. C. Milenwall.',
    keywords: 'terms of engagement, fixed price guarantee, intellectual property assignment S. C. Milenwall',
    ogTitle: 'Terms of Engagement | S. C. Milenwall',
    ogDescription: 'Clear, transparent commercial terms and delivery guarantees from S. C. Milenwall Pty Ltd.',
    ogType: 'website',
    canonicalPath: '/terms',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms of Engagement',
      url: 'https://scmw.com.au/terms',
    },
  },
};
