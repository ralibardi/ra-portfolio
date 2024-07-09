import React, { useContext } from 'react';
import AllRoutes from '@app/routes/all-routes';
import './i18n/config';
import ThemeContext, { ThemeProvider } from '@contexts/theme-context';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext) ?? {};
  return (
    <ThemeProvider>
      <div className={theme}>
        <AllRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
