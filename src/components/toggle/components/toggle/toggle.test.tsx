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
    const { thumbContainer, thumb } = await act(() => {
      const thumbContainer = screen.getByTestId('toggle-thumb-container');
      const thumb = screen.getByTestId('toggle-thumb');
      return { thumbContainer, thumb };
    });

    // ASSERT
    expect(thumbContainer).not.toBeNull();
    expect(thumb).not.toBeNull();
  });

  test('handles click events', async () => {
    // ARRANGE
    const handleClick = jest.fn();
    customRender(<Toggle onClick={handleClick} />);

    // ACT
    const { thumbContainer, thumb } = await act(async () => {
      const thumbContainer = screen.getByTestId('toggle-thumb-container');
      const thumb = screen.getByTestId('toggle-thumb');
      await userEvent.click(thumbContainer);

      return { thumbContainer, thumb };
    });

    // ASSERT
    expect(thumbContainer).not.toBeNull();
    expect(thumb).not.toBeNull();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
