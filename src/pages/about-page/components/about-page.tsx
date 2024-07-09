import React, { FunctionComponent, lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/about-page.module.scss';

const AboutPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default AboutPage;
