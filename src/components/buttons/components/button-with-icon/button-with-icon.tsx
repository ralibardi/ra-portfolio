import React, { lazy, memo } from 'react';
import { ButtonWithIconProps } from '../../types/buttonWithIconProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = lazy(() => import('@components/loading'));

import styles from '../../assets/button-with-icon.module.scss';

const ButtonWithIcon: React.FC<ButtonWithIconProps> = memo(
  function buttonWithIcon({
    icon,
    onClick,
    label,
    isLoading,
    ...props
  }: ButtonWithIconProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!isLoading) {
        onClick(e);
      }
    };

    return (
      <button
        className={styles.button}
        id="button-with-icon"
        type="button"
        {...props}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.content}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </div>
        )}
      </button>
    );
  },
);

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
