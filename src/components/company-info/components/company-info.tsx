import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { company_name_key } from '@app/i18n/keys';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { homePagePath } from '@utils/route-paths';

import styles from '../assets/company-info.module.scss';

interface ICompanyInfoProps {
  isLabelHidden?: boolean;
}

const CompanyInfo: FunctionComponent<ICompanyInfoProps> = ({
  isLabelHidden = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} data-testid="company-info">
      <Link
        to={homePagePath}
        className={styles.wrapper}
        data-testid="company-info-link"
      >
        <img
          src={logo}
          alt="Logo"
          className={styles.imageSmall}
          data-testid="company-info-logo"
        />
        {!isLabelHidden && (
          <span className={styles.label} data-testid="company-info-label">
            {t(company_name_key)}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CompanyInfo;
