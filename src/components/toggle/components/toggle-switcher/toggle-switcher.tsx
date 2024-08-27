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
    [styles.enabled]: checked,
    [styles.disabled]: !checked,
  });

  return (
    <label
      className={containerClassName}
      htmlFor="toggle-switch"
      data-testid="toggle-label"
    >
      <input
        type="checkbox"
        id="toggle-switch"
        data-testid="toggle-input"
        defaultChecked={invertedIconLogic ? !checked : checked}
        onChange={onChange}
      />
      <div />
    </label>
  );
};

export default ToggleSwitcher;
