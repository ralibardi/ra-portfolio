import React from 'react';
import { useTheme } from '@hooks/use-theme';
import { ToggleSwitcher } from '@components/toggle';
import { IThemeContext } from '@type/theme-context';

const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext as IThemeContext;

  return <ToggleSwitcher checked={theme === 'dark'} onChange={toggleTheme} />;
};

export default ThemeToggle;
