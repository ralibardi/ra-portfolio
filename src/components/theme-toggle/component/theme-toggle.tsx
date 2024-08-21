import React from 'react';
import { useTheme } from '@hooks/use-theme';
import { ToggleSwitcher } from '@components/toggle';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <ToggleSwitcher
      checked={theme === 'dark'}
      onChange={() => toggleTheme()}
      iconEnabled={faSun}
      iconDisabled={faMoon}
      invertedIconLogic={false}
    />
  );
};

export default ThemeToggle;
