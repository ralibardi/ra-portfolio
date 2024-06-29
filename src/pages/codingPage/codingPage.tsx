import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from './assets/codingPage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default HomePage;
