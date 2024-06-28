import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { error404MessageKey, errorMessageTitleKey } from '@app/i18n/keys';
import useError from '@hooks/useError';
import { ButtonWithIcon } from '@components/buttons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './assets/errorPage.module.scss';

interface IErrorPageProps {
  error?: Error | null;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setError } = useError();

  const handleClearError = () => {
    setError(null);
    navigate(-1);
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__header}>
        <ButtonWithIcon icon={faArrowLeft} onClick={handleClearError}>
          Go Back
        </ButtonWithIcon>
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
