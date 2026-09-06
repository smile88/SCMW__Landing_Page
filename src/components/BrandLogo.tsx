import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'stacked';
  theme?: 'light' | 'dark' | 'emerald';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark' || theme === 'emerald';
  const wordmarkTextColor = isDark ? '#FFFFFF' : '#0E4B3C';
  const goldColor = '#C9A961';
  const emeraldColor = '#0E4B3C';
  const shieldBg = theme === 'emerald' ? '#082E24' : isDark ? '#0E4B3C' : '#0E4B3C';

  const sizeClasses = {
    sm: { seal: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { seal: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { seal: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  // Monogram seal: geometric shield with subtle nod to cybersecurity & enterprise discipline
  const MonogramSeal = () => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses.seal}`}>
      <svg viewBox="0 0 40 44" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield outline */}
        <path
          d="M20 2L36 7.5V23C36 32.5 28.5 38.5 20 42C11.5 38.5 4 32.5 4 23V7.5L20 2Z"
          fill={shieldBg}
          stroke={goldColor}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner geometric security grid line */}
        <path
          d="M20 6.5L32 10.5V22C32 29 26.5 34.5 20 37.5C13.5 34.5 8 29 8 22V10.5L20 6.5Z"
          stroke={goldColor}
          strokeWidth="0.75"
          strokeOpacity="0.4"
          strokeDasharray="2 2"
        />
        {/* Interlocking SCM monogram */}
        <text
          x="20"
          y="25.5"
          textAnchor="middle"
          fill={goldColor}
          fontFamily="'Spectral', serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.5"
        >
          SCM
        </text>
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
