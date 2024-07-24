import React, { FunctionComponent } from 'react';
import { act, render, screen } from '@testing-library/react';
import AllRoutes from './all-routes';
import { ThemeProvider } from '@contexts/theme-context';

jest.mock('@pages/base-page', () => {
  const BasePageMock = () => <div data-testid="root-route">Mock BasePage</div>;
  return BasePageMock;
});

jest.mock('@components/loading', () => {
  const BasePageMock = () => <div data-testid="loading">Mock Loading</div>;
  return BasePageMock;
});

const TestableComponent: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <AllRoutes />
    </ThemeProvider>
  );
};

describe('AllRoutes', () => {
  it('renders without crashing', async () => {
    render(<TestableComponent />);

    const element = await act(() => {
      const element = screen;
      return element;
    });

    expect(element).not.toBeNull();
  });

  it('renders the BasePage component', async () => {
    render(<TestableComponent />);

    const element = await act(() => {
      const element = screen.getByTestId('root-route');
      return element;
    });

    expect(element).toBeInTheDocument();
  });
});
