// Suggested code may be subject to a license. Learn more: ~LicenseLog:1145938011.
import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('@components/header'));
const Footer = lazy(() => import('@components/footer'));

import "./basePage.scss"

const BasePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default BasePage;
