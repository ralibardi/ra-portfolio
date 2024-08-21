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

export const ThemeProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme as Theme;
    } else {
      const preferedTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return preferedTheme ? 'dark' : 'light';
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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
