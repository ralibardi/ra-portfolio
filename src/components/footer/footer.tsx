import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { footerTransKey } from '@app/i18n/keys';

const FooterSocials = lazy(() => import('./components/footerSocials'));

import './footer.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer__footer">
      <div className="footer__container">
        <p>{t(footerTransKey)}</p>
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
