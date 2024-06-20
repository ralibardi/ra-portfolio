import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSidebarContentLinks } from '../utils/getSidebarContentLinks';
import { Each } from '@utils/Each';

import './sidebarContent.scss';

const SidebarContent: React.FC = () => {
  return (
    <Each
      of={getSidebarContentLinks}
      render={(item) => {
        return (
          <a href={item.path} className="sidebarContent__link__wrapper">
            <FontAwesomeIcon
              icon={item.icon}
              className="sidebarContent__link__icon"
            />
            <span className="sidebarContent__link__wrapper">{item.text}</span>
          </a>
        );
      }}
    />
  );
};

export default SidebarContent;
