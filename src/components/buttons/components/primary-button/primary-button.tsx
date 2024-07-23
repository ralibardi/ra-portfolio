import React, { memo } from 'react';
import Loading from '@components/loading';
import { PrimaryButtonProps } from '../../types/primary-button-props';

import styles from '../../assets/primary-button.module.scss';

const PrimaryButton = memo(function primaryButton({
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
      data-testid="primary-button-container"
      id="primary-button"
      type="button"
      {...props}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={styles.content}
          data-testid="primary-button-label-container"
        >
          <span className={styles.label} data-testid="primary-button-label">
            {label}
          </span>
        </div>
      )}
    </button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
