import React, { lazy } from 'react';

const Topbar = lazy(() => import('@components/topbar'));
const CompanyInfo = lazy(() => import('@components/company-info'));
const ThemeToggle = lazy(() => import('@components/theme-toggle'));

import styles from '../assets/header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <CompanyInfo />
      </div>
      <div className={styles.subContainer}>
        <Topbar />
      </div>
      <div className={styles.subContainer}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
