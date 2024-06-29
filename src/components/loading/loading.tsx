import React from 'react';

import styles from './assets/loding.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
