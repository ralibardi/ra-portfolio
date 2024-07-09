import React from 'react';
import IRoute from '@type/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from '../../assets/nav-link.module.scss';

const NavLink = ({ route, isActive }: { route: IRoute; isActive: boolean }) => (
  <Link
    to={route.path}
    className={classNames(styles.link, { [styles.active]: isActive })}
  >
    <div className={styles.icon}>
      <FontAwesomeIcon icon={route.icon} />
    </div>
    <div className={styles.label}>{route.label}</div>
  </Link>
);

export default NavLink;
