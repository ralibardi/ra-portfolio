import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './theme-toggle';

describe('ThemeToggle', () => {
  test('displays the toggle component', async () => {
    customRender(<ThemeToggle />);

    const {
      toggleContainer,
      labelElement,
      toggleThumbContainerElement,
      toggleThumbContainer,
    } = await act(() => {
      const toggleContainer = screen.getByTestId('toggle-container');
      const labelElement = screen.getByTestId('toggle-label');
      const toggleThumbContainerElement = screen.getByTestId(
        'toggle-thumb-container',
      );
      const toggleThumbContainer = screen.getByTestId('toggle-thumb');

      return {
        toggleContainer,
        labelElement,
        toggleThumbContainerElement,
        toggleThumbContainer,
      };
    });

    expect(toggleContainer).not.toBeNull();
    expect(labelElement).not.toBeNull();
    expect(labelElement).toHaveTextContent('Light mode');
    expect(toggleThumbContainerElement).not.toBeNull();
    expect(toggleThumbContainer).not.toBeNull();
  });

  test('updates the theme prop when toggled', async () => {
    customRender(<ThemeToggle />);

    const { labelElement, toggleThumbContainerElement } = await act(() => {
      const toggleThumbContainerElement = screen.getByTestId(
        'toggle-thumb-container',
      );
      const labelElement = screen.getByTestId('toggle-label');

      return { labelElement, toggleThumbContainerElement };
    });

    expect(labelElement).toHaveTextContent('Light mode');

    await userEvent.click(toggleThumbContainerElement);
    expect(labelElement).toHaveTextContent('Dark mode');

    await userEvent.click(toggleThumbContainerElement);
    expect(labelElement).toHaveTextContent('Light mode');
  });
});
