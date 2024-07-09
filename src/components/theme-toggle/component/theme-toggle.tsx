import React, { lazy } from 'react';
import { useTheme } from '@hooks/use-theme';

const Toggle = lazy(() => import('@components/toggle'));

const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  const label = theme === 'light' ? 'Light mode' : 'Dark mode';

  return (
    <Toggle onClick={toggleTheme} label={label} checked={theme === 'dark'} />
  );
};

export default ThemeToggle;
