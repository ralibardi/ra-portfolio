import React, { ErrorInfo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { errorMessageTitleKey, goBackKey } from '@app/i18n/keys';

import styles from '../assets/error-boundary.module.scss';

interface IErrorBoundaryProps extends WithTranslation {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container} data-testid="error-container">
          <div className={styles.header} data-testid="error-header-container">
            <button
              className={styles.button}
              onClick={() => window.history.back()}
              data-testid="error-back-button"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {this.props.t(goBackKey)}
            </button>
            <h1 className={styles.header__title} data-testid="error-title">
              {this.props.t(errorMessageTitleKey)}
            </h1>
          </div>
          <details className={styles.description} data-testid="error-details">
            {this.state.error?.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
