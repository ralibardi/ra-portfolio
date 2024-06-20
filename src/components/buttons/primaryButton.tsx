import React, { lazy } from 'react';
import { PrimaryButtonProps } from './types/primaryButtonProps';

const Loading = lazy(() => import('@components/loading'));

import styles from './primaryButton.module.scss';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
  isLoading,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={styles.primary_button}
      id="primary-button"
      type="button"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        if (!isLoading) {
          onClick(e);
        }
      }}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default PrimaryButton;
