import React, { memo } from 'react';
import Loading from '@components/loading';
import { ButtonWithIconProps } from '../../types/buttonWithIconProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../assets/button-with-icon.module.scss';

const ButtonWithIcon = memo(function buttonWithIcon({
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
      data-testid="button-with-icon-container"
      id="button-with-icon"
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
          data-testid="button-with-icon-label-container"
        >
          <FontAwesomeIcon
            icon={icon}
            className={styles.icon}
            data-testid="button-with-icon-icon"
          />
          <span className={styles.label} data-testid="button-with-icon-label">
            {label}
          </span>
        </div>
      )}
    </button>
  );
});

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
