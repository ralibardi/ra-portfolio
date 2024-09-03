import React, { FunctionComponent, lazy } from 'react';
import { ComponentArray } from '@utils/component-array';
import { ISocialLink } from '@components/footer/utils/getSocialLinks';

const IconLink = lazy(() => import('@components/icon-link'));

import styles from '../../assets/footer-socials.module.scss';

interface IFooterSocials {
  socialLinks: ISocialLink[];
}

const FooterSocials: FunctionComponent<IFooterSocials> = ({ socialLinks }) => {
  return (
    <div className={styles.container} data-testid="test">
      <ComponentArray
        render={({ icon, link }) => <IconLink icon={icon} linkUrl={link} />}
        of={socialLinks}
      />
    </div>
  );
};

export default FooterSocials;
