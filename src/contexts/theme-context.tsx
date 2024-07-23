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
    if (storedTheme) {
      return storedTheme as Theme;
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
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

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  const contextValue = React.useMemo(
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
