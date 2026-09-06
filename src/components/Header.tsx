import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { NavigationTab } from '../types';
import { Menu, X, ArrowUpRight, PhoneCall, Shield } from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenContactWithService?: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenContactWithService,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'selector', label: 'Matcher' },
    { id: 'enablement', label: 'Sales Toolkit' },
    { id: 'testimonials', label: 'Client Proof' },
    { id: 'insights', label: 'SEO & Insights' },
    { id: 'about', label: 'About' },
    { id: 'tools', label: 'Audit Suite' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F7F5]/95 backdrop-blur-md border-b-2 border-[#0B0F0D] transition-colors">
      {/* Top micro-bar: Sydney status & fixed-price assurance */}
      <div className="bg-[#0E4B3C] text-white text-[12px] py-1.5 px-4 hidden sm:block border-b border-[#0B0F0D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
            <span>Sydney, NSW • Fixed-price growth systems for Australian SMBs</span>
          </div>
          <div className="flex items-center gap-4 text-[#F6F7F5]/80">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#C9A961]" />
              No Junior Account Handoff
            </span>
            <span className="text-[#C9A961]">•</span>
            <span>hello@scmw.com.au</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
        {/* Brand wordmark logo with guaranteed breathing room and crisp architectural divider */}
        <div className="flex items-center shrink-0 pr-6 lg:pr-8 border-r-2 border-[#0B0F0D]">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden group"
            aria-label="S. C. Milenwall Home"
          >
            <div className="flex items-center gap-3">
              <BrandLogo variant="full" size="md" />
            </div>
          </button>
        </div>

        {/* Desktop navigation items - spacious separation from logo and crisp styling */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-5 text-[11px] xl:text-xs font-semibold tracking-wider uppercase text-[#5B645F] pl-2 xl:pl-3">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all pb-1 border-b-2 uppercase tracking-wider whitespace-nowrap px-1 ${
                  isActive
                    ? 'text-[#0E4B3C] border-[#0B0F0D] font-bold'
                    : 'text-[#5B645F] border-transparent hover:text-[#0E4B3C] hover:border-[#0B0F0D]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA actions with visible dark borders */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle variant="header" />
          <button
            onClick={() => {
              if (onOpenContactWithService) onOpenContactWithService();
              else handleNavClick('contact');
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-all shadow-sm border-2 border-[#0B0F0D]"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0F0D]" />
          </button>
        </div>

        {/* Mobile menu hamburger toggle & quick theme button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle variant="header" className="px-2 py-1 text-[10px]" />
          <button
            onClick={() => {
              if (onOpenContactWithService) onOpenContactWithService();
              else handleNavClick('contact');
            }}
            className="px-3.5 py-1.5 rounded bg-[#0E4B3C] text-white text-xs font-medium border border-[#0B0F0D]"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md text-[#0E4B3C] hover:bg-[#0E4B3C]/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-hidden border border-[#0B0F0D]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F7F5] border-b-2 border-[#0B0F0D] px-6 pt-4 pb-8 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base py-2.5 px-3 rounded-md transition-colors min-h-[44px] flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-[#0E4B3C] text-white font-medium'
                    : 'text-[#0B0F0D] hover:bg-black/5'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Palette selection in mobile drawer */}
          <div className="pt-3 pb-2 border-t border-[#0B0F0D]/20 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5B645F] font-semibold">
              Palette Mode
            </span>
            <ThemeToggle variant="segmented" />
          </div>

          <div className="pt-2 border-t border-[#0E4B3C]/10 flex flex-col gap-3">
            <div className="text-xs text-[#5B645F] mb-1">
              Direct Contact: <a href="mailto:hello@scmw.com.au" className="font-semibold text-[#0E4B3C]">hello@scmw.com.au</a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0E4B3C] text-white font-medium text-sm shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-[#C9A961]" />
              <span>Schedule 20-Min Conversation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
