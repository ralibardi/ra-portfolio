import React, { FunctionComponent, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footerCopyrightKey } from '@app/i18n/keys';

const FooterSocials = lazy(() => import('../footer-socials/footer-socials'));

import styles from '../../assets/footer.module.scss';

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container} data-testid="footer">
      <FooterSocials />
      <span className={styles.copyright} data-testid="footer-copyright">
        {t(footerCopyrightKey)}
      </span>
    </footer>
  );
};

export default Footer;
