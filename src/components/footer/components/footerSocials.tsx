import React, { lazy } from 'react';
import { Each } from '@utils/each';
import { getSocialLinks } from '../utils/getSocialLinks';

const IconLink = lazy(() => import('@components/iconLink'));

import _styles from '../assets/footerSocials.module.scss';

const FooterSocials: React.FC = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="col-md-4">
      <div className="footer-social">
        <Each
          render={({ icon, link }) => <IconLink icon={icon} linkUrl={link} />}
          of={socialLinks}
        />
      </div>
    </div>
  );
};

export default FooterSocials;
