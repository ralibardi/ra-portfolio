import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from './iconLink.module.scss';

interface IIconLinkProps {
  icon: IconDefinition;
  color: string;
  linkUrl?: string;
  title?: string;
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2608763062.
const IconLink: React.FC<IIconLinkProps> = ({icon, linkUrl, title, color}) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.iconName}
    >
      <FontAwesomeIcon icon={icon} className={styles['icon-link__icon']} color={color}/>
      {title && <span className={styles['icon-link__label']}>{title}</span>}
    </a>
  );
};

export default IconLink;
