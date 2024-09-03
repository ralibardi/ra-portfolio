import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ErrorBoundary from './error-boundary';

describe('ErrorBoundary', () => {
  it('should render children when there is no error', async () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    const { childComponent } = await act(() => {
      const childComponent = screen.getByText('Child Component');
      return { childComponent };
    });

    expect(childComponent).toBeInTheDocument();
  });

  it('should render error container when there is an error', async () => {
    const errorMessage = 'Something went wrong';
    const ErrorThrowingComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    const { errorComponent } = await act(() => {
      const errorComponent = screen.getByTestId('error-container');
      return { errorComponent };
    });

    expect(errorComponent).toBeInTheDocument();
  });

  it('should render error header when there is an error', async () => {
    const errorMessage = 'Something went wrong';
    const ErrorThrowingComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    const { errorComponent } = await act(() => {
      const errorComponent = screen.getByTestId('error-header-container');
      return { errorComponent };
    });

    expect(errorComponent).toBeInTheDocument();
  });

  it('should renders back button when there is an error', async () => {
    const errorMessage = 'Something went wrong';
    const ErrorThrowingComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    const { button } = await act(() => {
      const button = screen.getByTestId('button-with-icon-container');
      return { button };
    });

    expect(button).toBeInTheDocument();
  });

  it('should render error message when there is an error', async () => {
    const errorMessage = 'Something went wrong';
    const ErrorThrowingComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    const { label } = await act(() => {
      const label = screen.getByTestId('button-with-icon-label');
      return { label };
    });

    expect(label).toBeInTheDocument();
  });

  it('should render error details when there is an error', async () => {
    const errorMessage = 'Something went wrong';
    const ErrorThrowingComponent = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    const { details } = await act(() => {
      const details = screen.getByTestId('error-details');

      return { details };
    });

    expect(details).toBeInTheDocument();
  });
});
