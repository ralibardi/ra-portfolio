import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';
import IRoute from '@type/route';

import './sidebarContent.scss';

const SidebarContent: React.FC = () => {
  return (
    <Each
      of={getAppRoutes}
      render={(item: IRoute) => {
        return (
          <a href={item.path} className="sidebarContent__link__wrapper">
            <FontAwesomeIcon
              icon={item.icon}
              className="sidebarContent__link__icon"
            />
            <span className="sidebarContent__link__wrapper">{item.label}</span>
          </a>
        );
      }}
    />
  );
};

export default SidebarContent;
