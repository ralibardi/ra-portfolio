import React, { FunctionComponent } from 'react';
import IRoute from '@type/route';
import { useLocation } from 'react-router-dom';
import { ComponentArray } from '@utils/component-array';
import NavLink from '../nav-link/nav-link';
import { TopbarProps } from '../../types/topbar-props';

import styles from '../../assets/topbar.module.scss';

const Topbar: FunctionComponent<TopbarProps> = ({ routes }) => {
  const location = useLocation();

  return (
    <nav className={styles.container} data-testid="topbar-container">
      {routes && routes.length > 1 && (
        <ComponentArray
          render={(route: IRoute) => (
            <NavLink
              key={route.path}
              route={route}
              isActive={location.pathname === route.path}
              data-testid="topbar-nav-link"
            />
          )}
          of={routes}
        />
      )}
    </nav>
  );
};

export default Topbar;
