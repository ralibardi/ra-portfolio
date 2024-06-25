import React from 'react';
import { useTranslation } from 'react-i18next';
import { error404MessageKey, errorMessageTitleKey } from '@app/i18n/keys';
import useError from '@hooks/useError';

import styles from './errorPage.module.scss';
import PrimaryButton from '@components/buttons';

interface IErrorPageProps {
  error?: Error | null;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  const { t } = useTranslation();
  const { setError } = useError();

  const handleClearError = () => {
    setError(null);
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__header}>
        <PrimaryButton onClick={handleClearError}>Go Back</PrimaryButton>
        <h1 className={styles.errorPage__header__title}>
          {t(errorMessageTitleKey)}
        </h1>
      </div>
      <span className={styles.errorPage__description}>
        {error?.message ?? t(error404MessageKey)}
      </span>
    </div>
  );
};

export default ErrorPage;
