import React, { useContext } from 'react';
import ThemeContext from '@contexts/theme-context';

import Toggle from '@components/toggle/components/toggle';

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  const label = theme === 'light' ? 'Dark mode' : 'Light mode';

  return <Toggle onClick={toggleTheme} label={label} />;
};

export default ThemeToggle;
