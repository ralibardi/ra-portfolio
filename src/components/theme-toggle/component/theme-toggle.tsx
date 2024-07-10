import React from 'react';
import { useTheme } from '@hooks/use-theme';
import Toggle from '@components/toggle';

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
