import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage__container}>
      <Loading />
    </div>
  );
};

export default HomePage;
