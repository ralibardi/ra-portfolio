import React, { FunctionComponent } from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ThemeContext, { ThemeProvider } from './theme-context';
import { IThemeContext } from '@type/theme-context';
import { useTheme } from '@hooks/use-theme';

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    // ACT
    customRender(
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
    customRender(
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

    customRender(
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

describe('ThemeProvider - system theme preference and toggle functionality', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  it('initializes theme to light if system preference is light and no localStorage', () => {
    // ARRANGE
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(prefers-color-scheme: light)',
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    // ACT
    customRender(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>,
    );

    // ASSERT
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('toggles theme from light to dark and updates localStorage', async () => {
    // ARRANGE
    localStorage.setItem('theme', 'light');
    let themeContextValue: IThemeContext | null = null;
    const TestComponent: FunctionComponent = () => {
      themeContextValue = useTheme();
      const { toggleTheme } = themeContextValue;
      return (
        <button onClick={toggleTheme} data-testid="toggle-theme">
          Toggle Theme
        </button>
      );
    };

    // ACT
    customRender(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );
    const toggleButton = screen.getByTestId('toggle-theme');
    await userEvent.click(toggleButton);

    // ASSERT
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('toggles theme from dark to light and updates localStorage', async () => {
    // ARRANGE
    localStorage.setItem('theme', 'dark');
    let themeContextValue: IThemeContext | null = null;
    const TestComponent: FunctionComponent = () => {
      themeContextValue = useTheme();
      const { toggleTheme } = themeContextValue;
      return (
        <button onClick={toggleTheme} data-testid="toggle-theme">
          Toggle Theme
        </button>
      );
    };

    // ACT
    customRender(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );
    const toggleButton = screen.getByTestId('toggle-theme');
    await userEvent.click(toggleButton);

    // ASSERT
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('does not toggle theme when system preference is set and updates accordingly', () => {
    // ARRANGE
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(prefers-color-scheme: dark)',
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    // ACT
    customRender(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>,
    );

    // ASSERT
    expect(document.body.classList.contains('dark')).toBe(true);
  });
});

describe('ThemeProvider - localStorage and system preference', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  it('initializes theme from localStorage if available', () => {
    // ARRANGE
    localStorage.setItem('theme', 'dark');

    // ACT
    customRender(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>,
    );

    // ASSERT
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('initializes theme to dark if system preference is dark and no localStorage', () => {
    // ARRANGE
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(prefers-color-scheme: dark)',
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    // ACT
    customRender(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>,
    );

    // ASSERT
    expect(document.body.classList.contains('dark')).toBe(true);
  });
});
