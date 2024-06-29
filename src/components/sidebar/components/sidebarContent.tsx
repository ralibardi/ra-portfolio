import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAppRoutes } from '@utils/getAppRoutes';
import { Each } from '@utils/Each';
import IRoute from '@type/route';

import './container.scss';

const SidebarContent: React.FC = () => {
  return (
    <Each
      of={getAppRoutes}
      render={(item: IRoute) => {
        return (
          <a href={item.path} className="link__wrapper">
            <FontAwesomeIcon icon={item.icon} className="link__icon" />
            <span className="link__wrapper">{item.label}</span>
          </a>
        );
      }}
    />
  );
};

export default SidebarContent;
