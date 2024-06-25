import React from 'react';
import cn from 'classnames';

import logo from './assets/logo.jpg';
import styles from './companyInfo.module.scss';

interface ICompanyInfoProps {
  isLabelHidden?: boolean;
}

const CompanyInfo: React.FC<ICompanyInfoProps> = ({ isLabelHidden }) => {
  const labelClassName = cn(styles.companyLogo__companyName, {
    [styles.companyLogo__companyName__hidden]: isLabelHidden,
  });
  return (
    <div className={styles.companyLogo__container}>
      <a href="#" className={styles.companyLogo__wrapper}>
        <img src={logo} alt="Logo" className={styles.companyLogo__imageSmall} />
        <span className={labelClassName}>Ronny Alibardi</span>
      </a>
    </div>
  );
};

export default CompanyInfo;
