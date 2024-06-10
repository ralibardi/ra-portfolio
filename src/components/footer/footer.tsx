import React from 'react';
import { useTranslation } from 'react-i18next';
import {footerTransKey} from '@app/i18n/keys';
import FooterSocials from './components/footerSocials';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer__footer">
      <div className="footer__container">
        <p>
          {t(footerTransKey)}
        </p>
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
