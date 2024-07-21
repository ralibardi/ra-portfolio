import React, { memo } from 'react';
import Loading from '@components/loading';
import { SecondaryButtonProps } from '../../types/secondary-button-props';

import styles from '../../assets/secondary-button.module.scss';

const SecondaryButton = memo(function secondaryButton({
  onClick,
  label,
  isLoading = false,
  ...props
}: SecondaryButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoading) {
      onClick(e);
    }
  };

  return (
    <button
      className={styles.button}
      data-testid="secondary-button-container"
      id="secondary-button"
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
          data-testid="secondary-button-label-container"
        >
          <span className={styles.label} data-testid="secondary-button-label">
            {label}
          </span>
        </div>
      )}
    </button>
  );
});

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
