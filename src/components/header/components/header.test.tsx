import React, { FunctionComponent } from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import Header from './header';

// Mock components
jest.mock('@components/company-info', () => {
  const CompanyInfoMock: FunctionComponent = () => (
    <div data-testid="company-info">Mock CompanyInfo</div>
  );
  return CompanyInfoMock;
});

jest.mock('@components/topbar', () => {
  const TopbarMock: FunctionComponent = () => (
    <div data-testid="topbar">Mock Topbar</div>
  );
  return TopbarMock;
});

jest.mock('@components/theme-toggle', () => {
  const ThemeToggleMock: FunctionComponent = () => (
    <div data-testid="theme-toggle">Mock ThemeToggle</div>
  );
  return ThemeToggleMock;
});

describe('Header', () => {
  test('renders without crashing', async () => {
    await act(() => customRender(<Header />));
  });

  test('renders the Topbar component', async () => {
    customRender(<Header />);

    const { topbarElement } = await act(() => {
      const topbarElement = screen.getByTestId('topbar');

      return { topbarElement };
    });

    expect(topbarElement).not.toBeNull();
  });

  test('renders the CompanyInfo component', async () => {
    customRender(<Header />);

    const { companyInfoElement } = await act(() => {
      const companyInfoElement = screen.getByTestId('company-info');

      return { companyInfoElement };
    });

    expect(companyInfoElement).not.toBeNull();
  });

  test('renders the ThemeToggle component', async () => {
    customRender(<Header />);

    const { themeToggleElement } = await act(() => {
      const themeToggleElement = screen.getByTestId('theme-toggle');

      return { themeToggleElement };
    });

    expect(themeToggleElement).not.toBeNull();
  });
});
