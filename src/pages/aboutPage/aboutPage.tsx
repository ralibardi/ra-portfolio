import React, { lazy } from 'react';

const Loading = lazy(() => import('@components/loading'));

import styles from './assets/aboutPage.module.scss';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default AboutPage;
