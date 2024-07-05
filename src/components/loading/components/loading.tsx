import React from 'react';

import styles from '../assets/loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.container} data-testid="loading-container">
      <div className={styles.spinner} data-testid="loading-spinner"></div>
    </div>
  );
};

export default Loading;
