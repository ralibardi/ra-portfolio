import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footerCopyrightKey } from '@app/i18n/keys';

const FooterSocials = lazy(() => import('./components/footerSocials'));

import styles from './assets/footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
        <FooterSocials />
        <span className={styles.footer__copyright}>{t(footerCopyrightKey)}</span>
    </footer>
  );
};

export default Footer;
