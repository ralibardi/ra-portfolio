import React, { FunctionComponent, lazy } from 'react';
import { ComponentArray } from '@utils/component-array';
import { getSocialLinks } from '../../utils/getSocialLinks';

const IconLink = lazy(() => import('@components/icon-link'));

import styles from '../../assets/footer-socials.module.scss';

const FooterSocials: FunctionComponent = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className={styles.container}>
      <ComponentArray
        render={({ icon, link }) => <IconLink icon={icon} linkUrl={link} />}
        of={socialLinks}
      />
    </div>
  );
};

export default FooterSocials;
