import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ToggleWithLabel from './toggle-with-label';

describe('ToggleWithLabel', () => {
  it('renders without crashing', async () => {
    customRender(<ToggleWithLabel onClick={jest.fn()} label="Testing" />);

    const { element } = await act(() => {
      const element = screen;

      return { element };
    });

    expect(element).not.toBeNull();
    expect(element).toBeDefined();
  });

  it('renders unchecked by default', async () => {
    customRender(<ToggleWithLabel onClick={jest.fn()} label="Testing" />);

    const { toggle } = await act(() => {
      const toggle = screen.getByTestId('toggle-switch-container');

      return { toggle };
    });

    expect(toggle).not.toHaveClass('checked');
  });

  it('calls onClick when clicked', async () => {
    const onClick = jest.fn();
    customRender(<ToggleWithLabel onClick={onClick} label="Testing" />);

    const { toggle } = await act(() => {
      const toggle = screen.getByTestId('toggle-switch-container');

      return { toggle };
    });

    expect(toggle).not.toBeNull();

    await userEvent.click(toggle);

    expect(onClick.mock.calls.length).toEqual(1);
  });
});
