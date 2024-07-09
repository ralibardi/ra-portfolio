import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLinkProps } from '../types/icon-link-props';

import styles from '../assets/icon-link.module.scss';

const IconLink = memo(function buttonWithIcon({
  icon,
  linkUrl,
  title,
}: IconLinkProps) {
  if (!linkUrl) {
    return null;
  }

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title ?? icon?.iconName ?? 'Link'}
      className={styles.container}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {title && <span className={styles.label}>{title}</span>}
    </a>
  );
});

IconLink.displayName = 'IconLink';

export default IconLink;
