import React from 'react';
import { customRender, screen } from '@utils/test-utilities';
import Topbar from './topbar';
import { getAppRoutes } from '@utils/get-app-routes';

describe('Topbar', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      useLocation: jest.fn(() => ({ pathname: '/about' })),
    }));
  });

  it('customRenders without crashing', () => {
    customRender(<Topbar />);
  });

  it('customRenders the correct number of nav links', () => {
    customRender(<Topbar />);

    const navLinks = screen.getAllByRole('link');

    expect(navLinks.length).toBe(getAppRoutes.filter((r) => r.enabled).length);
  });
});
