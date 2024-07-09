import React, { FunctionComponent, useContext } from 'react';
import AllRoutes from '@app/routes/all-routes';
import './i18n/config';
import ThemeContext from '@contexts/theme-context';

const App: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext) ?? {};

  return (
    <div className={theme}>
      <AllRoutes />
    </div>
  );
};

export default App;
