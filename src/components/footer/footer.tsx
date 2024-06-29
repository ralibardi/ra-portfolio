import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footerCopyrightKey } from '@app/i18n/keys';

const FooterSocials = lazy(() => import('./components/footerSocials'));

import styles from './assets/footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <FooterSocials />
      <span className={styles.copyright}>{t(footerCopyrightKey)}</span>
    </footer>
  );
};

export default Footer;
