import React from 'react';
import { render } from '@testing-library/react';
import { ComponentArray } from './component-array';

describe('ComponentArray', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  it('renders all items correctly', () => {
    const { getByText } = render(
      <ComponentArray render={(item) => <div>{item}</div>} of={items} />,
    );

    items.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('renders items with correct index', () => {
    const { container } = render(
      <ComponentArray render={(_, index) => <div>{index}</div>} of={items} />,
    );

    const indexElements = container.querySelectorAll('div');
    indexElements.forEach((element, index) => {
      expect(element.textContent).toBe(index.toString());
    });
  });

  it('renders no items when the array is empty', () => {
    const { container } = render(
      <ComponentArray render={(item) => <div>{item}</div>} of={[]} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
