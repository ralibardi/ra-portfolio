import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { PrimaryButton } from '../buttons';

describe('PrimaryButton', () => {
  test('renders correctly', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    render(<PrimaryButton label="Test" onClick={handleClick} />);

    // ACT
    const { buttonContainer, labelContainer, label } = await act(() => {
      const buttonContainer = screen.getByTestId('primary-button-container');
      const labelContainer = screen.getByTestId(
        'primary-button-label-container',
      );
      const label = screen.getByTestId('primary-button-label');

      return { buttonContainer, labelContainer, label };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'primary-button');
    expect(labelContainer).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
  });

  test('handles click events', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    render(<PrimaryButton label="Test" onClick={handleClick} />);

    // ACT
    const { buttonContainer, labelContainer, label } = await act(async () => {
      const buttonContainer = screen.getByTestId('primary-button-container');
      const labelContainer = screen.getByTestId(
        'primary-button-label-container',
      );
      const label = screen.getByTestId('primary-button-label');
      await userEvent.click(buttonContainer);

      return { buttonContainer, labelContainer, label };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'primary-button');
    expect(labelContainer).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows spinner when loading', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    render(<PrimaryButton label="Loading" onClick={handleClick} isLoading />);

    // ACT
    const { buttonContainer, loadingContainer, loadingSpinner } = await act(
      () => {
        const buttonContainer = screen.getByTestId('primary-button-container');
        const loadingContainer = screen.getByTestId('loading-container');
        const loadingSpinner = screen.getByTestId('loading-spinner');

        return { buttonContainer, loadingContainer, loadingSpinner };
      },
    );

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'primary-button');
    expect(loadingContainer).not.toBeNull();
    expect(loadingSpinner).not.toBeNull();
  });
});
