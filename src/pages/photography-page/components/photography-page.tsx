import React, { FunctionComponent, lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/photography-page.module.scss';

const PhotographyPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default PhotographyPage;
