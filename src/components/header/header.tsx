import React, { lazy } from 'react';

const Topbar = lazy(() => import('@components/topbar'));

import styles from './assets/header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Topbar />
    </header>
  );
};

export default Header;
