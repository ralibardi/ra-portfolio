import React, { lazy, memo } from 'react';
import { PrimaryButtonProps } from '../../types/primaryButtonProps';

const Loading = lazy(() => import('@components/loading'));

import styles from '../../assets/primary-button.module.scss';

const PrimaryButton: React.FC<PrimaryButtonProps> = memo(
  function primaryButton({
    onClick,
    label,
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
        className={styles.button}
        id="primary-button"
        type="button"
        {...props}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.content}>
            <span className={styles.label}>{label}</span>
          </div>
        )}
      </button>
    );
  },
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
