import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import Topbar from './topbar';
import { getAppRoutes } from '@utils/get-app-routes';

describe('Topbar', () => {
  it('renders without crashing', async () => {
    customRender(<Topbar />);

    const element = await act(() => screen.getByTestId('topbar-container'));

    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
  });

  it('renders the correct number of nav links', async () => {
    customRender(<Topbar />);

    const element = await act(() => screen.getAllByTestId('nav-link-label'));

    expect(element).not.toBeNull();
    expect(element.length).toBe(getAppRoutes.filter((r) => r.enabled).length);
  });
});
