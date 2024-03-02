import { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleDarkMode = () =>
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
