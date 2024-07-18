import React from 'react';
import CompanyInfo from './company-info';
import { act, customRender, screen } from '@utils/test-utilities';
import ThemeContext from '@contexts/theme-context';
import { IThemeContext } from '@type/theme-context';

describe('CompanyInfo', () => {
  let mockToggleTheme: jest.Mock;
  let contextValue: IThemeContext;

  beforeEach(() => {
    mockToggleTheme = jest.fn();
    contextValue = {
      theme: 'light',
      toggleTheme: mockToggleTheme,
    };
  });

  const renderHeader = () =>
    customRender(
      <ThemeContext.Provider value={contextValue}>
        <CompanyInfo />
      </ThemeContext.Provider>,
    );

  test('should render without label', async () => {
    renderHeader();

    const { logo } = await act(() => {
      const logo = screen.getByTestId('company-info-logo');

      return { logo };
    });

    expect(logo).not.toBeNull();
  });

  test('should render with label', async () => {
    renderHeader();

    const { logo, label } = await act(() => {
      const logo = screen.getByTestId('company-info-logo');
      const label = screen.getByTestId('company-info-label');

      return { logo, label };
    });

    expect(logo).not.toBeNull();
    expect(label).not.toBeNull();
  });
});
