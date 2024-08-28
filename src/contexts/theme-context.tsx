import { Theme } from '@type/theme';
import { IThemeContext } from '@type/theme-context';
import React, {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
  useCallback,
  useMemo,
} from 'react';

const ThemeContext = createContext<IThemeContext | null>(null);

const getPreferredTheme = () => {
  const preferredTheme = localStorage.getItem('theme') as Theme;

  if (preferredTheme) {
    return preferredTheme;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return prefersDark ? 'dark' : 'light';
};

export const ThemeProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.body.classList.toggle(
      'dark-mode',
      theme === 'dark' || (theme === 'system' && prefersDark),
    );
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
