import React, { FunctionComponent } from 'react';
import IRoute from '@type/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from '../../assets/nav-link.module.scss';

interface INavLinkProps {
  route: IRoute;
  isActive: boolean;
}

const NavLink: FunctionComponent<INavLinkProps> = ({ route, isActive }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={route.path}
      className={cn(styles.link, { [styles.active]: isActive })}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon icon={route.icon} />
      </div>
      <div className={styles.label}>{t(route.label)}</div>
    </Link>
  );
};

export default NavLink;
