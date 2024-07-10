import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ButtonWithIcon } from '../buttons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

describe('ButtonWithIcon', () => {
  test('renders correctly', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(
      <ButtonWithIcon label="Test" onClick={handleClick} icon={faArrowLeft} />,
    );

    // ACT
    const { buttonContainer, labelContainer, icon, label } = await act(() => {
      const buttonContainer = screen.getByTestId('button-with-icon-container');
      const labelContainer = screen.getByTestId(
        'button-with-icon-label-container',
      );
      const icon = screen.getByTestId('button-with-icon-icon');
      const label = screen.getByTestId('button-with-icon-label');

      return { buttonContainer, labelContainer, icon, label };
    });

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'button-with-icon');
    expect(labelContainer).not.toBeNull();
    expect(icon).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
  });

  test('handles click events', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(
      <ButtonWithIcon label="Test" onClick={handleClick} icon={faArrowLeft} />,
    );

    // ACT
    const { buttonContainer, labelContainer, icon, label } = await act(
      async () => {
        const buttonContainer = screen.getByTestId(
          'button-with-icon-container',
        );
        const labelContainer = screen.getByTestId(
          'button-with-icon-label-container',
        );
        const icon = screen.getByTestId('button-with-icon-icon');
        const label = screen.getByTestId('button-with-icon-label');
        await userEvent.click(buttonContainer);

        return { buttonContainer, labelContainer, icon, label };
      },
    );

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'button-with-icon');
    expect(labelContainer).not.toBeNull();
    expect(icon).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('Test');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows spinner when loading', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(
      <ButtonWithIcon
        label="Loading"
        onClick={handleClick}
        icon={faArrowLeft}
        isLoading
      />,
    );

    // ACT
    const { buttonContainer, loadingContainer, loadingSpinner } = await act(
      () => {
        const buttonContainer = screen.getByTestId(
          'button-with-icon-container',
        );
        const loadingContainer = screen.getByTestId('loading-container');
        const loadingSpinner = screen.getByTestId('loading-spinner');

        return { buttonContainer, loadingContainer, loadingSpinner };
      },
    );

    // ASSERT
    expect(buttonContainer).not.toBeNull();
    expect(buttonContainer).toHaveAttribute('id', 'button-with-icon');
    expect(loadingContainer).not.toBeNull();
    expect(loadingSpinner).not.toBeNull();
  });
});
