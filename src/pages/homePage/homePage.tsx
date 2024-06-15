import React, { lazy } from 'react';
import './homePage.scss';

const Loading = lazy(() => import('@components/loading'));

const HomePage: React.FC = () => {
  return <Loading />;
};

export default HomePage;
