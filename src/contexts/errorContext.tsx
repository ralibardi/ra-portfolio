import { createContext, useState, ReactNode } from 'react';

interface ErrorState {
  error: Error | null;
}

interface ErrorContextType extends ErrorState {
  setError: (error: Error | null) => void;
}

export const ErrorContext = createContext<ErrorContextType | null>(null);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<Error | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
