import React, { lazy, useState } from 'react';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import IRoute from '@type/route';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';

const IconLink = lazy(() => import('@components/iconLink'));
const CompanyInfo = lazy(() => import('@components/companyInfo'));

const Sidebar: React.FC = () => {
  const [sidebarOpen] = useState(false);

  // const handleSidebarOpen = () => {
  //   setSidebarOpen(true);
  // };

  // const handleSidebarClose = () => {
  //   setSidebarOpen(false);
  // };

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-top-wrapper">
          <CompanyInfo />
          <IconLink icon={sidebarOpen ? faCircleXmark : faBars} />
        </div>
        <div className="sidebar-links">
        <Each
            render={(route: IRoute) => <IconLink icon={route.icon} linkUrl={route.path} />}
            of={getAppRoutes}
          />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
