import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PrimaryButton } from '@components/buttons';

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const handleClick = jest.fn();

    render(<PrimaryButton label="Test" onClick={handleClick} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('button');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<PrimaryButton label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when loading', () => {
    const handleClick = jest.fn();

    render(<PrimaryButton label="Loading" isLoading onClick={handleClick} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
