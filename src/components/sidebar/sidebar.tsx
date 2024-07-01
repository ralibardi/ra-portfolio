import React, { lazy } from 'react';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';

const IconLink = lazy(() => import('@components/iconLink'));
const CompanyInfo = lazy(() => import('@components/companyInfo'));

import styles from './assets/sidebar.module.scss';

const Sidebar: React.FC = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.companyLogo}>
        <CompanyInfo />
      </div>
      <div className={styles.links}>
        <Each
          render={(route: IRoute) => (
            <IconLink
              icon={route.icon}
              linkUrl={route.path}
              title={route.label}
            />
          )}
          of={getAppRoutes}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
