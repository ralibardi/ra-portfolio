import React from 'react';
import { customRender, screen } from '@utils/test-utilities';
import NavLink from './nav-link';
import IRoute from '@type/route';
import { faHome } from '@fortawesome/free-solid-svg-icons';

describe('NavLink', () => {
  const route: IRoute = {
    path: '/home',
    label: 'Home',
    index: false,
    component: () => null,
    icon: faHome,
  };

  it('should customRender the NavLink component', () => {
    customRender(<NavLink route={route} isActive={false} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should customRender the correct label', () => {
    customRender(<NavLink route={route} isActive={false} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveTextContent('Home');
  });

  it('should have the active class when isActive is true', () => {
    customRender(<NavLink route={route} isActive={true} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('active');
  });

  it('should not have the active class when isActive is false', () => {
    customRender(<NavLink route={route} isActive={false} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).not.toHaveClass('active');
  });
});
