import React, { FunctionComponent } from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeContext, { ThemeProvider } from './theme-context';
import { IThemeContext } from '@type/theme-context';
import { useTheme } from '@hooks/use-theme';

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    // ACT
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>,
    );

    //ASSERT
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('provides a theme context value', () => {
    // ARRANGE
    let themeContextValue: IThemeContext | null = null;
    const TestComponent = () => {
      themeContextValue = React.useContext(ThemeContext);
      return null;
    };

    // ACT
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    // ASSERT
    expect(themeContextValue).not.toBeNull();
    expect(themeContextValue).toHaveProperty('theme');
    expect(themeContextValue!.theme).toBe('light');
  });

  it('allows theme to be toggled', async () => {
    // ARRANGE
    let themeContextValue: IThemeContext | null = null;
    const TestComponent: FunctionComponent = () => {
      themeContextValue = useTheme();
      const { toggleTheme } = themeContextValue;
      return (
        <button onClick={toggleTheme} data-testid="button">
          Toggle Theme
        </button>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    // ACT
    const { buttonContainer } = await act(async () => {
      const buttonContainer = screen.getByTestId('button');
      await userEvent.click(buttonContainer);

      return { buttonContainer };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(themeContextValue!.theme).toBe('dark');
  });
});
