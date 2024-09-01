import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { error_message_title_key } from '@app/i18n/keys';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import { ButtonWithIcon } from '@components/buttons';

import styles from '../assets/error-boundary.module.scss';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorFallback: FunctionComponent<FallbackProps> = ({ error }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} data-testid="error-container">
      <div className={styles.header} data-testid="error-header-container">
        <ButtonWithIcon
          icon={faArrowLeft}
          onClick={() => window.history.back()}
          label={t(error_message_title_key)}
        />
      </div>
      <details className={styles.description} data-testid="error-details">
        {error.message}
        <br />
        {error.stack.toString()}
      </details>
    </div>
  );
};

const ErrorBoundary: React.FC<IErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
