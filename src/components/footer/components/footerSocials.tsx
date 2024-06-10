// Suggested code may be subject to a license. Learn more: ~LicenseLog:446422004.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Each } from '@utils/Each';
import { getSocialLinks } from '../utils/getSocialLinks';

const FooterSocials: React.FC = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="col-md-4">
        <div className="footer-social">
            <Each render={({ icon, link }) => (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} />
                </a>
            )} of={socialLinks} />
        </div>
    </div>
  );
};

export default FooterSocials;
