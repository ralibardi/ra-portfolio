import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './theme-toggle';

describe('ThemeToggle', () => {
  test('displays the toggle component', async () => {
    customRender(<ThemeToggle />);

    const { toggleThumbContainerElement, toggleThumbContainer } = await act(
      () => {
        const toggleThumbContainerElement = screen.getByTestId(
          'toggle-thumb-container',
        );
        const toggleThumbContainer = screen.getByTestId('toggle-thumb');

        return {
          toggleThumbContainerElement,
          toggleThumbContainer,
        };
      },
    );

    expect(toggleThumbContainerElement).not.toBeNull();
    expect(toggleThumbContainer).not.toBeNull();
  });

  test('updates the theme prop when toggled', async () => {
    customRender(<ThemeToggle />);

    const { toggleThumbContainerElement, iconLeftElement, iconRightElement } =
      await act(() => {
        const toggleThumbContainerElement = screen.getByTestId(
          'toggle-thumb-container',
        );
        const iconLeftElement = screen.getByTestId('toggle-icon-left');
        const iconRightElement = screen.getByTestId('toggle-icon-right');

        return {
          toggleThumbContainerElement,
          iconLeftElement,
          iconRightElement,
        };
      });

    expect(iconLeftElement).toBeVisible();

    await userEvent.click(toggleThumbContainerElement);
    expect(iconRightElement).toBeVisible();

    await userEvent.click(toggleThumbContainerElement);
    expect(iconLeftElement).toBeVisible();
  });
});
