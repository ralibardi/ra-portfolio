import React, { FunctionComponent, useMemo } from 'react';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/get-app-routes';
import { useLocation } from 'react-router-dom';
import { ComponentArray } from '@utils/component-array';
import NavLink from '../nav-link/nav-link';

import styles from '../../assets/topbar.module.scss';

const Topbar: FunctionComponent = () => {
  const location = useLocation();
  const enabledRoutes = useMemo(
    () => getAppRoutes.filter((r) => r.enabled),
    [],
  );

  if (!enabledRoutes || enabledRoutes.length <= 1) {
    return null;
  }

  return (
    <nav className={styles.container} data-testid="topbar-container">
      <ComponentArray
        render={(route: IRoute) => (
          <NavLink
            key={route.path}
            route={route}
            isActive={location.pathname === route.path}
            data-testid="topbar-nav-link"
          />
        )}
        of={enabledRoutes}
      />
    </nav>
  );
};

export default Topbar;
