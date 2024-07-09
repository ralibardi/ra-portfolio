import React, { lazy } from 'react';
import { Each } from '@utils/each';
import { getSocialLinks } from '../../utils/getSocialLinks';

const IconLink = lazy(() => import('@components/icon-link'));

import styles from '../../assets/footer-socials.module.scss';

const FooterSocials: React.FC = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className={styles.container}>
      <Each
        render={({ icon, link }) => <IconLink icon={icon} linkUrl={link} />}
        of={socialLinks}
      />
    </div>
  );
};

export default FooterSocials;
