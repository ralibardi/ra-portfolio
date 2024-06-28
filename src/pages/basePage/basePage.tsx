import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('@components/header'));
const Sidebar = lazy(() => import('@components/sidebar'));
const Footer = lazy(() => import('@components/footer'));

import styles from './assets/basePage.module.scss';

const BasePage: React.FC = () => {
  return (
    <main className={styles.basePage}>
      <Header />
      <div className={styles.basePage__content}>
        <Sidebar />
        <div className={styles.basePage__body}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default BasePage;
