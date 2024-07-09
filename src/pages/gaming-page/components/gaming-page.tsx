import React, { FunctionComponent, lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/gaming-page.module.scss';

const GamingPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default GamingPage;
