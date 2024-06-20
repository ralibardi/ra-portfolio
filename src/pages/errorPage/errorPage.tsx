import React from 'react';

import styles from './errorPage.module.scss';

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPage__container}>
      <h1>Error</h1>
      <p>Something went wrong.</p>
    </div>
  );
};

export default ErrorPage;
