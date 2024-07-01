import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';
import IRoute from '@type/route';

import styles from './container.module.scss';

const SidebarContent: React.FC = () => {
  return (
    <Each
      of={getAppRoutes}
      render={(item: IRoute) => {
        return (
          <a href={item.path} className={styles.container}>
            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
          </a>
        );
      }}
    />
  );
};

export default SidebarContent;
