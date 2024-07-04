import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/coding-page.module.scss';

const CodingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default CodingPage;
