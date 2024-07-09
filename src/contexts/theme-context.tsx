import { Theme } from '@type/theme';
import { IThemeContext } from '@type/theme-context';
import React, {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
} from 'react';

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark && theme === 'system') {
      setTheme('dark');
    } else if (!prefersDark && theme === 'system') {
      setTheme('light');
    }

    document.body.classList.toggle(
      'dark-mode',
      theme === 'dark' || (theme === 'system' && prefersDark),
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;