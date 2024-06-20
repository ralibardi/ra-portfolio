// Suggested code may be subject to a license. Learn more: ~LicenseLog:446422004.
import React, { lazy } from 'react';
import { Each } from '@utils/Each';
import { getSocialLinks } from '../utils/getSocialLinks';

const IconLink = lazy(() => import('@components/iconLink'));

import styles from './footerSocials.module.scss';

const FooterSocials: React.FC = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="col-md-4">
      <div className="footer-social">
        <Each
          render={({ icon, link }) => (
            <IconLink icon={icon} linkUrl={link} color={styles.iconColor}/>
          )}
          of={socialLinks.sort((a, b) => a.order - b.order)}
        />
      </div>
    </div>
  );
};

export default FooterSocials;
