import React, { FunctionComponent, useState } from 'react';
import cn from 'classnames';
import { IToggleWithIconsProps } from '../../types/toggle-with-icons-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion } from 'framer-motion';

import styles from '../../assets/toggle-with-icons.module.scss';

const ToggleWithIcons: FunctionComponent<IToggleWithIconsProps> = ({
  iconLeft,
  iconRight,
  checked = false,
  onClick,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOn(!isOn);
    onClick && onClick(event);
  };

  const iconLeftClassName = cn(styles.iconLeft, { [styles.disabled]: !isOn });
  const iconRightClassName = cn(styles.iconRight, { [styles.disabled]: isOn });

  return (
    <div
      className={styles.toggle}
      data-ison={isOn}
      onClick={toggleSwitch}
      data-testid="toggle-thumb-container"
    >
      {iconLeft && (
        <FontAwesomeIcon
          icon={iconLeft}
          className={iconLeftClassName}
          data-testid="toggle-icon-left"
        />
      )}
      <motion.div
        className={styles.thumb}
        data-testid="toggle-thumb"
        layout
        transition={spring}
      />
      {iconRight && (
        <FontAwesomeIcon
          icon={iconRight}
          className={iconRightClassName}
          data-testid="toggle-icon-right"
        />
      )}
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default ToggleWithIcons;
