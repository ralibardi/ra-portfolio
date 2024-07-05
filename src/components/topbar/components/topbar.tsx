import React, { useMemo } from 'react';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/getAppRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';
import { Each } from '@utils/each';

import styles from '../assets/topbar.module.scss';

const NavLink = ({ route, isActive }: { route: IRoute; isActive: boolean }) => (
  <Link
    to={route.path}
    className={classNames(styles.link, { [styles.active]: isActive })}
  >
    <div className={styles.icon}>
      <FontAwesomeIcon icon={route.icon} />
    </div>
    <div className={styles.label}>{route.label}</div>
  </Link>
);

const Topbar: React.FC = () => {
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
