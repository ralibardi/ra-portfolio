// Suggested code may be subject to a license. Learn more: ~LicenseLog:1145938011.
import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('@components/header'));
const Footer = lazy(() => import('@components/footer'));

import './basePage.scss';

const BasePage: React.FC = () => {
  return (
    <div className="basePage">
      <Header />
      <div className="basePage__content">
        <aside className="basePage__sidebar"></aside>
        <div className="basePage__body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasePage;
