import React from 'react';
import { customRender } from './test-utilities';
import userEvent from '@testing-library/user-event';

describe('clickButton', () => {
  it('should call the onClick function when a button is clicked', async () => {
    const onClick = jest.fn();
    const { getByRole } = customRender(
      <button onClick={onClick}>Click me</button>,
    );
    const button = getByRole('button');

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should not call the onClick function when a disabled button is clicked', async () => {
    const onClick = jest.fn();
    const { getByRole } = customRender(
      <button onClick={onClick} disabled>
        Click me
      </button>,
    );
    const button = getByRole('button');

    await userEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should call the onClick function with the correct event object', async () => {
    const onClick = jest.fn();
    const { getByRole } = customRender(
      <button onClick={onClick}>Click me</button>,
    );
    const button = getByRole('button');

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledWith(expect.any(Object));
  });
});
