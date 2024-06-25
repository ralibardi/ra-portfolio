import { useContext } from 'react';
import { ErrorContext } from '@contexts/errorContext';

const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

export default useError;
