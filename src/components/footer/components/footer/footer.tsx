import React, { FunctionComponent, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footer_copyright_key } from '@app/i18n/keys';
import { getSocialLinks } from '../../utils/getSocialLinks';

const FooterSocials = lazy(() => import('../footer-socials/footer-socials'));

import styles from '../../assets/footer.module.scss';

const Footer: FunctionComponent = () => {
  const { t } = useTranslation();
  const socialLinks = getSocialLinks();

  return (
    <footer className={styles.container} data-testid="footer">
      <FooterSocials socialLinks={socialLinks} />
      <span className={styles.copyright} data-testid="footer-copyright">
        {t(footer_copyright_key)}
      </span>
    </footer>
  );
};

export default Footer;
