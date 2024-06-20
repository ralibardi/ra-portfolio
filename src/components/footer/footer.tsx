import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footerTransKey } from '@app/i18n/keys';

const FooterSocials = lazy(() => import('./components/footerSocials'));

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer__footer}>
      <div className={styles.footer__container}>
        <p>{t(footerTransKey)}</p>
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
