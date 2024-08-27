import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './theme-toggle';

describe('ThemeToggle', () => {
  test('displays the toggle component', async () => {
    customRender(<ThemeToggle />);

    const { toggleLabelElement } = await act(() => {
      const toggleLabelElement = screen.getByTestId('toggle-label');

      return {
        toggleLabelElement,
      };
    });

    expect(toggleLabelElement).not.toBeNull();
  });

  test('updates the theme prop when toggled', async () => {
    customRender(<ThemeToggle />);

    const { toggleInputElement } = await act(() => {
      const toggleInputElement = screen.getByTestId('toggle-input');

      return {
        toggleInputElement,
      };
    });

    await userEvent.click(toggleInputElement);

    await userEvent.click(toggleInputElement);
  });
});
