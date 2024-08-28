import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ToggleWithIcons from './toggle-with-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

describe('ToggleWithIcons', () => {
  it('renders without crashing', async () => {
    customRender(<ToggleWithIcons onClick={jest.fn()} />);

    const { element } = await act(() => {
      const element = screen;

      return { element };
    });

    expect(element).not.toBeNull();
    expect(element).toBeDefined();
  });

  it('renders with the correct icons', async () => {
    customRender(
      <ToggleWithIcons
        iconLeft={faCheck}
        iconRight={faTimes}
        onClick={jest.fn()}
      />,
    );

    const { leftIcon, rightIcon } = await act(() => {
      const leftIcon = screen.getByTestId('toggle-icon-left');
      const rightIcon = screen.getByTestId('toggle-icon-right');

      return { leftIcon, rightIcon };
    });

    expect(leftIcon).toHaveClass('iconLeft');
    expect(rightIcon).toHaveClass('iconRight');
  });

  it('renders unchecked by default', async () => {
    customRender(<ToggleWithIcons onClick={jest.fn()} />);

    const { toggle } = await act(() => {
      const toggle = screen.getByTestId('toggle-container');

      return { toggle };
    });

    expect(toggle).not.toHaveClass('checked');
  });

  it('calls onClick when clicked', async () => {
    const onClick = jest.fn();
    customRender(<ToggleWithIcons onClick={onClick} />);

    const { toggle } = await act(() => {
      const toggle = screen.getByTestId('toggle-container');

      return { toggle };
    });

    expect(toggle).not.toBeNull();

    await userEvent.click(toggle);

    expect(onClick.mock.calls.length).toEqual(1);
  });
});
