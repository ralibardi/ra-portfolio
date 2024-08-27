import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import userEvent from '@testing-library/user-event';
import ToggleSwitcher from './toggle-switcher';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

describe('ToggleSwitcher', () => {
  it('renders without errors', async () => {
    customRender(
      <ToggleSwitcher
        checked={false}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        invertedIconLogic={false}
        iconEnabled={faArrowAltCircleLeft}
        iconDisabled={faArrowAltCircleRight}
      />,
    );
  });

  it('renders the switcher in the off state by default', async () => {
    const onChange = jest.fn();

    customRender(
      <ToggleSwitcher
        checked={false}
        onChange={onChange}
        invertedIconLogic={false}
        iconEnabled={faArrowAltCircleLeft}
        iconDisabled={faArrowAltCircleRight}
      />,
    );

    const { element } = await act(() => {
      const element = screen.getByTestId('toggle-input');

      return { element };
    });

    expect(element).not.toBeChecked();
  });

  it('renders the switcher in the on state when clicked', async () => {
    const onChange = jest.fn();
    customRender(
      <ToggleSwitcher
        checked={false}
        onChange={onChange}
        invertedIconLogic={false}
        iconEnabled={faArrowAltCircleLeft}
        iconDisabled={faArrowAltCircleRight}
      />,
    );

    const { element } = await act(() => {
      const element = screen.getByTestId('toggle-input');

      return { element };
    });

    await userEvent.click(element);

    expect(element).toBeChecked();
  });

  it('calls the onChange callback when clicked', async () => {
    const onChange = jest.fn();
    customRender(
      <ToggleSwitcher
        onChange={onChange}
        checked={false}
        invertedIconLogic={false}
        iconEnabled={faArrowAltCircleLeft}
        iconDisabled={faArrowAltCircleRight}
      />,
    );

    const { element } = await act(() => {
      const element = screen.getByTestId('toggle-input');

      return { element };
    });

    await userEvent.click(element);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

