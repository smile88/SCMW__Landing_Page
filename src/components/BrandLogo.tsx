import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'stacked';
  theme?: 'light' | 'dark' | 'emerald';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme,
  className = '',
  size = 'md',
}) => {
  let isContextDark = false;
  try {
    const themeContext = useTheme();
    isContextDark = themeContext.isDark;
  } catch {
    // If rendered outside ThemeProvider fallback gracefully
  }

  const effectiveTheme = theme ?? (isContextDark ? 'dark' : 'light');
  const isDark = effectiveTheme === 'dark' || effectiveTheme === 'emerald';
  const wordmarkTextColor = isDark ? '#FFFFFF' : '#0B0F0D';
  const goldColor = '#C9A961';
  const emeraldColor = '#0E4B3C';
  const primaryMarkColor = isDark ? goldColor : emeraldColor;
  const keystoneMarkColor = isDark ? '#FFFFFF' : goldColor;

  const sizeClasses = {
    sm: { seal: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { seal: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { seal: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  // Monogram mark: The Bastion Citadel (architectural M-monolith with apex keystone)
  const MonogramSeal = () => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses.seal}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left Pylon */}
        <path d="M16 84 V28 L34 16 V84 H16 Z" fill={primaryMarkColor} />
        {/* Right Pylon */}
        <path d="M84 84 V28 L66 16 V84 H84 Z" fill={primaryMarkColor} />
        {/* Center Chevron Keystone */}
        <path d="M50 18 L62 38 H38 L50 18 Z" fill={keystoneMarkColor} />
        {/* Center Inverted Foundation Spear */}
        <path d="M50 48 L62 40 V72 L50 84 L38 72 V40 L50 48 Z" fill={primaryMarkColor} />
      </svg>
    </div>
  );

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <MonogramSeal />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center gap-2 ${className}`}>
        <MonogramSeal />
        <div className="flex flex-col items-center">
          <span
            className={`font-sans tracking-[0.25em] font-medium text-[11px] uppercase`}
            style={{ color: goldColor }}
          >
            S. C.
          </span>
          <span
            className="font-editorial font-semibold tracking-[0.08em] uppercase text-xl leading-tight"
            style={{ color: wordmarkTextColor }}
          >
            MILENWALL
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <MonogramSeal />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-sans tracking-[0.28em] font-semibold text-[10px] uppercase mb-0.5`}
          style={{ color: goldColor }}
        >
          S. C.
        </span>
        <span
          className={`font-editorial font-semibold tracking-[0.06em] uppercase ${sizeClasses.text} leading-none`}
          style={{ color: wordmarkTextColor }}
        >
          MILENWALL
        </span>
      </div>
    </div>
  );
};
