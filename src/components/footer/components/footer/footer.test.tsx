import React from 'react';
import { customRender } from '@utils/test-utilities';
import Footer from './footer';
import { act, screen } from '@utils/test-utilities';

describe('Footer', () => {
  test('renders without crashing', async () => {
    await act(() => customRender(<Footer />));
  });

  test('displays the correct copyright text', async () => {
    customRender(<Footer />);

    const { labelElement } = await act(() => {
      const labelElement = screen.getByTestId('footer-copyright');

      return { labelElement };
    });

    expect(labelElement).not.toBeNull();
    expect(labelElement).toHaveTextContent('© 2024 Ronny Alibardi');
  });
});
