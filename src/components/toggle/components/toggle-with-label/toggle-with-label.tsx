import React, { FunctionComponent, useState } from 'react';
import { IToggleWithLabelProps } from '../../types/toggle-with-label-props';
import { motion } from 'framer-motion';

import styles from '../../assets/toggle.module.scss';

const ToggleWithLabel: FunctionComponent<IToggleWithLabelProps> = ({
  label,
  checked = false,
  onClick,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOn(!isOn);
    onClick && onClick(event);
  };

  return (
    <div className={styles.container} data-testid="toggle-container">
      <label className={styles.label} data-testid="toggle-label">
        {label}
      </label>
      <div
        className={styles.toggle}
        data-ison={isOn}
        onClick={toggleSwitch}
        data-testid="toggle-thumb-container"
      >
        <motion.div
          className={styles.thumb}
          data-testid="toggle-thumb"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  x: '2rem',
};

export default ToggleWithLabel;
