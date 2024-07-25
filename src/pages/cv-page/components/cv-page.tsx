import React, { FunctionComponent, lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/cv-page.module.scss';

const CVPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default CVPage;
