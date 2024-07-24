import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SecondaryButton } from '..';

describe('SecondaryButton', () => {
  test('renders correctly', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(<SecondaryButton label="Test" onClick={handleClick} />);

    // ACT
    const { buttonContainer, labelContainer, label } = await act(() => {
      const buttonContainer = screen.getByTestId('secondary-button-container');
      const labelContainer = screen.getByTestId(
        'secondary-button-label-container',
      );
      const label = screen.getByTestId('secondary-button-label');

      return { buttonContainer, labelContainer, label };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'secondary-button');
    expect(labelContainer).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
  });

  test('handles click events', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(<SecondaryButton label="Test" onClick={handleClick} />);

    // ACT
    const { buttonContainer, labelContainer, label } = await act(async () => {
      const buttonContainer = screen.getByTestId('secondary-button-container');
      const labelContainer = screen.getByTestId(
        'secondary-button-label-container',
      );
      const label = screen.getByTestId('secondary-button-label');
      await userEvent.click(buttonContainer);

      return { buttonContainer, labelContainer, label };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'secondary-button');
    expect(labelContainer).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows spinner when loading', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(
      <SecondaryButton label="Loading" onClick={handleClick} isLoading />,
    );

    // ACT
    const { buttonContainer, loadingContainer, loadingSpinner } = await act(
      () => {
        const buttonContainer = screen.getByTestId(
          'secondary-button-container',
        );
        const loadingContainer = screen.getByTestId('loading-container');
        const loadingSpinner = screen.getByTestId('loading-spinner');

        return { buttonContainer, loadingContainer, loadingSpinner };
      },
    );

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'secondary-button');
    expect(loadingContainer).not.toBeNull();
    expect(loadingSpinner).not.toBeNull();
  });
});
