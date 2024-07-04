import React, { lazy, memo } from 'react';
import { PrimaryButtonProps } from '../../types/primaryButtonProps';

const Loading = lazy(() => import('@components/loading'));

import styles from '../../assets/secondary-button.module.scss';

const SecondaryButton: React.FC<PrimaryButtonProps> = memo(
  function secondaryButton({
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
        id="secondary-button"
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

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
