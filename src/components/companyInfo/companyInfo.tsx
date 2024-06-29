import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { companyNameKey } from '@app/i18n/keys';

import logo from './assets/logo.jpg';
import styles from './assets/companyInfo.module.scss';

interface ICompanyInfoProps {
  isLabelHidden?: boolean;
}

const CompanyInfo: React.FC<ICompanyInfoProps> = ({ isLabelHidden }) => {
  const { t } = useTranslation();

  const labelClassName = cn(styles.companyName, {
    [styles.companyName__hidden]: isLabelHidden,
  });
  return (
    <div className={styles.container}>
      <a href="#" className={styles.wrapper}>
        <img src={logo} alt="Logo" className={styles.imageSmall} />
        <span className={labelClassName}>{t(companyNameKey)}</span>
      </a>
    </div>
  );
};

export default CompanyInfo;
