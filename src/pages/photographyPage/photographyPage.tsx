import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from './assets/photographyPage.module.scss';

const PhotographyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default PhotographyPage;
