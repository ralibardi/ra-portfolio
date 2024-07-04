import React, { lazy, memo } from 'react';
import { PrimaryButtonProps } from '../types/primaryButtonProps';

const Loading = lazy(() => import('@components/loading'));

import styles from '../assets/secondaryButton.module.scss';

const SecondaryButton: React.FC<PrimaryButtonProps> = memo(
  function SecondaryButton({
    onClick,
    children,
    isLoading,
    ...props
  }: PrimaryButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!isLoading) {
        onClick(e);
      }
    };

    return (
      <button
        className={styles.primaryButton}
        id="primary-button"
        type="button"
        {...props}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? <Loading /> : children}
      </button>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
