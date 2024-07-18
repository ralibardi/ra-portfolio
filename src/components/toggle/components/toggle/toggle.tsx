import React, { FunctionComponent, useState } from 'react';
import { IToggleProps } from '../../types/toggle-props';
import { motion } from 'framer-motion';

import styles from '../../assets/toggle.module.scss';

const Toggle: FunctionComponent<IToggleProps> = ({
  checked = false,
  onClick,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOn(!isOn);
    onClick && onClick(event);
  };

  return (
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
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  x: '2rem',
};

export default Toggle;
