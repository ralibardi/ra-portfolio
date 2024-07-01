import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from './assets/iconLink.module.scss';

interface IIconLinkProps {
  icon: IconDefinition;
  linkUrl?: string;
  title?: string;
}

const IconLink: React.FC<IIconLinkProps> = ({icon, linkUrl, title}) => {
  // Early return if no linkUrl is provided
  if (!linkUrl) {
    return null; 
  }

  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title ?? icon.iconName ?? 'Link'}
      className={styles.iconLink}
    >
      <FontAwesomeIcon icon={icon} className={styles.iconLink__icon} />
      {title && <span className={styles.iconLink__label}>{title}</span>}
    </a>
  );
};

export default IconLink;
