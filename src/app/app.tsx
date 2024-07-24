import React, { FunctionComponent, useContext } from 'react';
import AllRoutes from '@app/routes/all-routes';
import '@app/i18n/config';
import ThemeContext from '@contexts/theme-context';

const App: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext) ?? {};

  return (
    <div className={theme} data-testid="app-container">
      <AllRoutes />
    </div>
  );
};

export default App;
