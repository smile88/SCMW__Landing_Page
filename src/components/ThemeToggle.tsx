import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'header' | 'segmented' | 'compact' | 'footer';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'header',
}) => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-lg border-2 border-[#0B0F0D] bg-white transition-colors ${className}`}
        role="group"
        aria-label="Theme selector"
      >
        <button
          type="button"
          onClick={() => setTheme('paper')}
          aria-pressed={theme === 'paper'}
          className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
            theme === 'paper'
              ? 'bg-[#0E4B3C] text-white shadow-xs'
              : 'text-[#5B645F] hover:text-[#0B0F0D]'
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-[#C9A961]" />
          <span>Paper</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('emerald-dark')}
          aria-pressed={theme === 'emerald-dark'}
          className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
            theme === 'emerald-dark'
              ? 'bg-[#0E4B3C] text-white shadow-xs'
              : 'text-[#5B645F] hover:text-[#0B0F0D]'
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-[#C9A961]" />
          <span>Deep Emerald</span>
        </button>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <span className="text-xs font-mono uppercase tracking-widest text-[#C9A961] font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
          <span>Interface Palette</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme('paper')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider border-2 transition-all ${
              theme === 'paper'
                ? 'bg-[#C9A961] text-[#0B0F0D] font-bold border-[#C9A961]'
                : 'bg-transparent text-[#F6F7F5]/70 border-white/20 hover:border-[#C9A961] hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Paper</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme('emerald-dark')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider border-2 transition-all ${
              theme === 'emerald-dark'
                ? 'bg-[#C9A961] text-[#0B0F0D] font-bold border-[#C9A961]'
                : 'bg-transparent text-[#F6F7F5]/70 border-white/20 hover:border-[#C9A961] hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Deep Emerald</span>
          </button>
        </div>
      </div>
    );
  }

  // Header / default variant: sleek pill button with visible high contrast and gold indicator
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-md border-2 border-[#0B0F0D] bg-white text-[#0B0F0D] hover:bg-[#F6F7F5] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C9A961] ${className}`}
      title={isDark ? 'Switch to Paper Light Theme' : 'Switch to Deep Emerald / Ink Dark Theme'}
      aria-label={isDark ? 'Switch to Paper Light Theme' : 'Switch to Deep Emerald / Ink Dark Theme'}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-[#C9A961] transition-transform group-hover:rotate-12" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#C9A961] transition-transform group-hover:rotate-45" />
        )}
      </div>

      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold">
        <span className="hidden sm:inline text-[#5B645F] group-hover:text-[#0B0F0D]">Theme:</span>
        <span className="text-[#0E4B3C] font-bold">
          {isDark ? 'Deep Emerald' : 'Paper'}
        </span>
      </div>

      {/* Brand-compliant gold indicator dot */}
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#C9A961] shrink-0"
        title="Gold accent active"
      />
    </button>
  );
};
