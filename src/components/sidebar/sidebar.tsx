import React, { lazy, useState } from "react";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';

const IconLink = lazy(() => import('@components/iconLink'));

import styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1331662132.
    <div className= {styles.sidebar}>
      {!sidebarOpen ? (
        <div className={styles.sidebar_icon} onClick={handleSidebarOpen}>
          <IconLink icon={faBars} color={styles.iconColor}/>
        </div>
      ) : (
        <div className={styles.sidebar_container}>
          <div className={styles.sidebar_icon} onClick={handleSidebarClose}>
            <IconLink icon={faCircleXmark} color={styles.iconColor}/>
          </div>
          <Each
            render={(route: IRoute) => <IconLink icon={route.icon} linkUrl={route.path} color={styles.iconColor} />}
            of={getAppRoutes}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;