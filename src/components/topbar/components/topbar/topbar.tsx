import React, { FunctionComponent, useMemo } from 'react';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/get-app-routes';
import { useLocation } from 'react-router-dom';
import { Each } from '@utils/each';
import NavLink from '../nav-link/nav-link';

import styles from '../../assets/topbar.module.scss';

const Topbar: FunctionComponent = () => {
  const location = useLocation();
  const routes = useMemo(() => getAppRoutes, []);

  return (
    <nav className={styles.container}>
      <Each
        render={(route: IRoute) => (
          <NavLink
            key={route.path}
            route={route}
            isActive={location.pathname === route.path}
          />
        )}
        of={routes}
      />
    </nav>
  );
};

export default Topbar;
