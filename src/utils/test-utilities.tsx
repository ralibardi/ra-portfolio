import React, { ReactNode, ReactElement, ComponentType } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  act,
  render,
  RenderOptions,
  RenderResult,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from '@contexts/theme-context';

interface IAllProvidersProps {
  children: ReactNode;
}

function allProviders({ children }: IAllProvidersProps): ReactElement {
  return (
    <Router>
      <ThemeProvider>{children}</ThemeProvider>
    </Router>
  );
}

function customRender(ui: ReactElement, options?: RenderOptions): RenderResult {
  return render(ui, { wrapper: allProviders as ComponentType, ...options });
}

export { customRender, act, screen };
