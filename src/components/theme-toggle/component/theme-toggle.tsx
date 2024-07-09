import React, { useContext } from 'react';
import ThemeContext from '@contexts/themeContext.tsx';

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { toggleTheme } = themeContext;

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
