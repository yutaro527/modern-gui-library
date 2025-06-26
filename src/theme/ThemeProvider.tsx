import React, { createContext, useContext, useEffect, useState } from 'react';
import './themes.css';

export type ThemeName = 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange';

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'blue',
  storageKey = 'modern-gui-theme'
}) => {
  const availableThemes: ThemeName[] = ['light', 'dark', 'blue', 'green', 'purple', 'orange'];
  
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeName;
      return availableThemes.includes(stored) ? stored : defaultTheme;
    }
    return defaultTheme;
  });

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // 既存のテーマクラスを削除
    availableThemes.forEach(themeName => {
      root.classList.remove(`theme-${themeName}`);
    });
    
    // 新しいテーマクラスを追加
    root.classList.add(`theme-${theme}`);
  }, [theme, availableThemes]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    availableThemes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};