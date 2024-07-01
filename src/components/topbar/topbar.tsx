import React from 'react';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';

import styles from './assets/topbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <Each
        render={(route: IRoute) => (
          <a href={route.path} className={styles.link}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={route.icon} />
            </div>
            <div className={styles.label}>{route.label}</div>
          </a>
        )}
        of={getAppRoutes}
      />
    </nav>
  );
};

export default Topbar;
