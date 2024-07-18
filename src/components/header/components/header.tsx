import React, { FunctionComponent, lazy } from 'react';

const Topbar = lazy(() => import('@components/topbar'));
const CompanyInfo = lazy(() => import('@components/company-info'));
const ThemeToggle = lazy(() => import('@components/theme-toggle'));

import styles from '../assets/header.module.scss';

const Header: FunctionComponent = () => {
  return (
    <header className={styles.container}>
      <div className={styles.topbar}>
        <Topbar />
      </div>
      <div className={styles.subContainer}>
        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>
        <div className={styles.companyInfo}>
          <CompanyInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
