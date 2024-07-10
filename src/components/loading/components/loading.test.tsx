import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import Loading from './loading';

describe('Loading component', () => {
  test('renders with default size', async () => {
    customRender(<Loading />);
    const { loadingContainerElement, loadingSpinnerElement } = await act(() => {
      const loadingContainerElement = screen.getByTestId('loading-container');
      const loadingSpinnerElement = screen.getByTestId('loading-spinner');

      return { loadingContainerElement, loadingSpinnerElement };
    });

    expect(loadingContainerElement).not.toBeNull();
    expect(loadingSpinnerElement).not.toBeNull();
  });

  test('renders with medium size', async () => {
    customRender(<Loading size="medium" />);
    const { loadingContainerElement, loadingSpinnerElement } = await act(() => {
      const loadingContainerElement = screen.getByTestId('loading-container');
      const loadingSpinnerElement = screen.getByTestId('loading-spinner');

      return { loadingContainerElement, loadingSpinnerElement };
    });

    expect(loadingContainerElement).not.toBeNull();
    expect(loadingSpinnerElement).not.toBeNull();
  });

  test('renders with large size', async () => {
    customRender(<Loading size="large" />);
    const { loadingContainerElement, loadingSpinnerElement } = await act(() => {
      const loadingContainerElement = screen.getByTestId('loading-container');
      const loadingSpinnerElement = screen.getByTestId('loading-spinner');

      return { loadingContainerElement, loadingSpinnerElement };
    });

    expect(loadingContainerElement).not.toBeNull();
    expect(loadingSpinnerElement).not.toBeNull();
  });
});
