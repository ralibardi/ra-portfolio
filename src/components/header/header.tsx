import React from 'react';
import { useTranslation } from 'react-i18next';
import { headerTitleKey } from '@app/i18n/keys';

import styles from './header.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <span className={styles.header__title}>{t(headerTitleKey)}</span>
    </header>
  );
};

export default Header;
