import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Toggle } from '..';

describe('Toggle', () => {
  test('renders correctly', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(<Toggle onClick={handleClick} />);

    // ACT
    const { switchContainer, switchElement } = await act(() => {
      const switchContainer = screen.getByTestId('toggle-container');
      const switchElement = screen.getByTestId('toggle-switch');
      return { switchContainer, switchElement };
    });

    // ASSERT
    expect(switchContainer).not.toBeNull();
    expect(switchElement).not.toBeNull();
  });

  test('handles click events', async () => {
    // ARRANGE
    const onClick = jest.fn();
    customRender(<Toggle onClick={onClick} />);

    // ACT
    const { switchContainer, switchElement } = await act(() => {
      const switchContainer = screen.getByTestId('toggle-container');
      const switchElement = screen.getByTestId('toggle-switch');

      return { switchContainer, switchElement };
    });

    // ASSERT
    expect(switchContainer).not.toBeNull();
    expect(switchElement).not.toBeNull();

    await userEvent.click(switchElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
