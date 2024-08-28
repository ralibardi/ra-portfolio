import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { IToggleSwitcherProps } from '../../types/toggle-switcher-props';

import styles from '../../assets/toggle-switcher.module.scss';

const ToggleSwitcher: FunctionComponent<IToggleSwitcherProps> = ({
  checked,
  onChange,
  invertedIconLogic = false,
}) => {
  const containerClassName = cn(styles.container, {
    [styles.dark]: checked,
    [styles.light]: !checked,
  });

  return (
    <label className={containerClassName} data-testid="toggle-label">
      <input
        type="checkbox"
        data-testid="toggle-input"
        defaultChecked={invertedIconLogic ? !checked : checked}
        onChange={onChange}
      />
      <div />
    </label>
  );
};

export default ToggleSwitcher;
