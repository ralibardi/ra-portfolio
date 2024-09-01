import React, { ReactNode, ReactElement, ComponentType } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  act,
  render,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  RenderResult,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from '@contexts/theme-context';
import { renderHook } from '@testing-library/react-hooks';

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
  return render(ui, { wrapper: allProviders, ...options });
}
function customRenderHook<TProps extends IAllProvidersProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
): RenderHookResult<TResult, TProps> {
  return renderHook(callback, {
    wrapper: allProviders as ComponentType<TProps>,
    ...options,
  });
}

export { customRender, customRenderHook, act, screen };
