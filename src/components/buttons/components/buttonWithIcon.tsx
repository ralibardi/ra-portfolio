import React, { lazy, memo } from 'react';
import { ButtonWithIconProps } from '../types/buttonWithIconProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = lazy(() => import('@components/loading'));

import styles from './buttonWithIcon.module.scss';

const ButtonWithIcon: React.FC<ButtonWithIconProps> = memo(
  ({ icon, onClick, children, isLoading, ...props }: ButtonWithIconProps) => {
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
          <div className={styles.button__content}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            {children}
          </div>
        )}
      </button>
    );
  }
);

export default ButtonWithIcon;
