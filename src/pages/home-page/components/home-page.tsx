import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/home-page.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default HomePage;
