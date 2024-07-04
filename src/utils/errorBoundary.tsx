import React, { ErrorInfo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { errorMessageTitleKey, goBackKey } from '@app/i18n/keys';

import styles from './errorBoundary.module.scss'; // Assuming CSS module usage

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
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <button
              className={styles.button}
              onClick={() => window.history.back()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {this.props.t(goBackKey)}
            </button>
            <h1 className={styles.header__title}>
              {this.props.t(errorMessageTitleKey)}
            </h1>
          </div>
          <details className={styles.description}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
