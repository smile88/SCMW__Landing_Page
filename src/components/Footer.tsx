import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { NavigationTab } from '../types';
import { Shield, ArrowUp, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectService: (serviceId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F0D] text-[#F6F7F5] pt-16 pb-12 border-t-2 border-[#0B0F0D] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-2 border-white/20">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="full" theme="dark" size="md" />
            <p className="text-sm text-[#F6F7F5]/70 max-w-sm leading-relaxed">
              {BUSINESS_INFO.positioning}
            </p>
            <p className="text-xs text-[#F6F7F5]/60 max-w-sm leading-relaxed">
              Founded by Sinisa Milenkovic. Enterprise cybersecurity sales quota background from Mandiant and Fortinet, bringing rigorous sales systems to Sydney small and medium businesses.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#F6F7F5]/80 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A961]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#C9A961] underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>{BUSINESS_INFO.legalEntity}</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A961] font-semibold">
              Services &amp; Pricing
            </h4>
            <ul className="space-y-2 text-sm text-[#F6F7F5]/80">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full"
                  >
                    <span>{srv.name.split(' ')[0]} {srv.name.split(' ')[1] || ''}</span>
                    <span className="text-[11px] font-mono text-[#C9A961]/90">{srv.startingPrice}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A961] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F6F7F5]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  All Services &amp; Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('selector')} className="hover:text-white transition-colors">
                  Service Selector Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      const el = document.getElementById('services-faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('enablement')} className="hover:text-white transition-colors text-[#C9A961] font-semibold">
                  Sales Toolkit &amp; Whitepapers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-white transition-colors">
                  Client Proof &amp; Video Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-white transition-colors">
                  SEO &amp; Thought Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-white transition-colors">
                  Diagnostic Tools &amp; Modeler
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Sinisa Milenkovic
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Book 20-Min Call
                </button>
              </li>
            </ul>
          </div>

          {/* Discipline Commitments & Theme Switcher */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A961] font-semibold">
              Operating Standard
            </h4>
            <div className="p-4 rounded bg-[#082E24] border-2 border-white/20 text-xs text-[#F6F7F5]/80 space-y-2 font-sans">
              <div className="font-semibold text-white">Fixed-Price Honesty</div>
              <p className="text-[11px] text-[#F6F7F5]/70">
                Scopes locked in writing before commencement. Zero surprise hourly invoices.
              </p>
              <div className="font-semibold text-white pt-1">Single Point of Contact</div>
              <p className="text-[11px] text-[#F6F7F5]/70">
                Delivered directly by Sinisa. No junior account handoffs.
              </p>
            </div>

            {/* High contrast theme selector in footer */}
            <ThemeToggle variant="footer" className="pt-1" />
          </div>
        </div>

        {/* Bottom Professional Polish bar */}
        <div className="pt-8 mt-6 border-t-2 border-white/20 flex flex-col lg:flex-row justify-between items-center text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.legalEntity}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[10px] sm:text-[11px] tracking-widest text-white/60">
            <span>Fixed-Price Honesty</span>
            <span className="text-white/20">|</span>
            <span>Single Point of Accountability</span>
            <span className="text-white/20">|</span>
            <span>Evidence Over Hype</span>
          </div>

          <div className="text-[#C9A961] font-medium tracking-[0.15em]">
            Enterprise Discipline. SMB Scale.
          </div>
        </div>

        {/* Legal links and top button */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#F6F7F5]/40 gap-4">
          <div className="text-[11px]">
            Sydney, NSW, Australia • scmw.com.au
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 border border-white/20"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#C9A961]" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
