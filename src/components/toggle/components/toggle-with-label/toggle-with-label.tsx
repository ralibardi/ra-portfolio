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

  const toggleSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOn(!isOn);
    onClick && onClick(event);
  };

  return (
    <div className={styles.container} data-testid="toggle-container">
      <label className={styles.label} data-testid="toggle-label">
        {label}
      </label>
      <button
        className={styles.toggle}
        data-ison={isOn}
        onClick={toggleSwitch}
        data-testid="toggle-switch-container"
      >
        <motion.div
          className={styles.switch}
          data-testid="toggle-switch"
          layout
          transition={spring}
        />
      </button>
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
