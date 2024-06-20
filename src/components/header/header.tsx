import React from 'react';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.header__title}>Test</span>
    </header>
  );
};

export default Header;
