import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './theme-toggle';

describe('ThemeToggle', () => {
  test('displays the toggle component', async () => {
    customRender(<ThemeToggle />);

    const { toggleThumbContainerElement } = await act(() => {
      const toggleThumbContainerElement =
        screen.getByTestId('toggle-container');

      return {
        toggleThumbContainerElement,
      };
    });

    expect(toggleThumbContainerElement).not.toBeNull();
  });

  test('updates the theme prop when toggled', async () => {
    customRender(<ThemeToggle />);

    const { toggleThumbContainerElement } = await act(() => {
      const toggleThumbContainerElement =
        screen.getByTestId('toggle-container');

      return {
        toggleThumbContainerElement,
      };
    });

    await userEvent.click(toggleThumbContainerElement);

    await userEvent.click(toggleThumbContainerElement);
  });
});
