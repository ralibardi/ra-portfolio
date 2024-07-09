import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from '../assets/loading.module.scss';

interface ILoadingProps {
  size?: 'small' | 'medium' | 'large';
}

const Loading: FunctionComponent<ILoadingProps> = ({ size = 'small' }) => {
  const className = cn(styles.spinner, styles[size]);

  return (
    <div className={styles.container} data-testid="loading-container">
      <div className={className} data-testid="loading-spinner"></div>
    </div>
  );
};

export default Loading;
