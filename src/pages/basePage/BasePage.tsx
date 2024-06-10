// Suggested code may be subject to a license. Learn more: ~LicenseLog:1145938011.
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

const BasePage: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasePage;
