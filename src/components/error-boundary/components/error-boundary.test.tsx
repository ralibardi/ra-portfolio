import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ErrorBoundary from './error-boundary';

describe('ErrorBoundary', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mock console.error before each test
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error after each test
    consoleSpy.mockRestore();
  });

  it('should render children when there is no error', async () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    const childComponent = await act(() => screen.getByText('Child Component'));

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

    const errorComponent = await act(() =>
      screen.getByTestId('error-container'),
    );
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

    const errorComponent = await act(() =>
      screen.getByTestId('error-header-container'),
    );
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

    const errorComponent = await act(() => screen.getByTestId('error-title'));
    expect(errorComponent).toBeInTheDocument();
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

    const errorComponent = await act(() => screen.getByTestId('error-title'));
    expect(errorComponent).toBeInTheDocument();
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

    const errorComponent = await act(() => screen.getByTestId('error-details'));
    expect(errorComponent).toBeInTheDocument();
  });
});