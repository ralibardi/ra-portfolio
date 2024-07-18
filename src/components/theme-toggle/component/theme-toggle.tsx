import React from 'react';
import { useTheme } from '@hooks/use-theme';
import { ToggleWithIcons } from '@components/toggle';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <ToggleWithIcons
      onClick={toggleTheme}
      checked={theme === 'dark'}
      iconLeft={faSun}
      iconRight={faMoon}
    />
  );
};

export default ThemeToggle;
