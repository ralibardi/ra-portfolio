import React, { lazy } from 'react';
import { useTheme } from '@hooks/use-theme';

const Toggle = lazy(() => import('@components/toggle'));

const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  const label = theme === 'light' ? 'Dark mode' : 'Light mode';

  return <Toggle onClick={toggleTheme} label={label} />;
};

export default ThemeToggle;
