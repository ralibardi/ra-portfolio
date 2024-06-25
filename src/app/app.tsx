import React from 'react';
import AllRoutes from '@routes/allRoutes';
import { ErrorProvider } from '@contexts/errorContext';
import './i18n/config';

const App: React.FC = () => {
  return (
    <ErrorProvider>
      <AllRoutes />
    </ErrorProvider>
  );
};

export default App;
