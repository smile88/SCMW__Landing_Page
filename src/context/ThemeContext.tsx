import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'paper' | 'emerald-dark';

export interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'scm_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
        if (saved === 'paper' || saved === 'emerald-dark') {
          return saved;
        }
        // Check system preference if no saved choice
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'emerald-dark';
        }
      } catch {
        // LocalStorage access may be restricted in sandboxes
      }
    }
    return 'paper';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      }
    } catch {
      // Ignore storage errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'paper' ? 'emerald-dark' : 'paper');
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const body = document.body;

    if (theme === 'emerald-dark') {
      root.setAttribute('data-theme', 'emerald-dark');
      root.classList.add('dark', 'theme-emerald-dark');
      body.classList.add('theme-emerald-dark');
      root.style.colorScheme = 'dark';
    } else {
      root.setAttribute('data-theme', 'paper');
      root.classList.remove('dark', 'theme-emerald-dark');
      body.classList.remove('theme-emerald-dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const isDark = theme === 'emerald-dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
