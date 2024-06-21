import React from 'react';

import styles from './loding.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
