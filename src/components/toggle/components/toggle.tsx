import React, { FunctionComponent, MouseEventHandler, useState } from 'react';
import cn from 'classnames';
import { IToggleProps } from '../types/toggle-props';

import styles from '../assets/toggle.module.scss';

const Toggle: FunctionComponent<IToggleProps> = ({
  label,
  checked = false,
  onClick,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    onClick(event);
    setIsChecked(!isChecked);
  };

  const className = cn(styles.toggle, { [styles.checked]: isChecked });

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={className} onClick={handleToggle}>
        <div className={styles.thumb} />
      </div>
    </div>
  );
};

export default Toggle;
