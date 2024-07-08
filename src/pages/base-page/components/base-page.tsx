import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('@components/header'));
const Footer = lazy(() => import('@components/footer'));

import styles from '../assets/base-page.module.scss';

const BasePage: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default BasePage;
