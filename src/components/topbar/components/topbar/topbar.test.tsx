import React, { FunctionComponent } from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import Topbar from './topbar';
import IRoute from '@type/route';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

const TesteabableComponent: FunctionComponent = () => {
  return <div />;
};

describe('Topbar', () => {
  const mockRoutes: IRoute[] = [
    {
      path: 'test',
      index: true,
      component: TesteabableComponent,
      labelKey: 'test',
      icon: faAccessibleIcon,
      enabled: true,
      hidden: false,
    },
    {
      path: 'test2',
      index: true,
      component: TesteabableComponent,
      labelKey: 'test2',
      icon: faAccessibleIcon,
      enabled: true,
      hidden: false,
    },
  ];

  it('renders without crashing', async () => {
    customRender(<Topbar routes={mockRoutes} />);

    const element = await act(() => screen.getByTestId('topbar-container'));

    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
  });

  it('renders the correct number of nav links', async () => {
    customRender(<Topbar routes={mockRoutes} />);

    const { element } = await act(() => {
      const element = screen.getAllByTestId('nav-link-label');

      return { element };
    });

    expect(element).not.toBeNull();
    expect(element.length).toBe(
      mockRoutes.filter((r) => r.enabled && !r.hidden).length,
    );
  });
});
