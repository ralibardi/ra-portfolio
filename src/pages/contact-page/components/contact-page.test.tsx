import React from 'react';
import TestingPage from './contact-page';
import { act, customRender, screen } from '@utils/test-utilities';

describe('ContactPage', () => {
  it('renders without crashing', async () => {
    customRender(<TestingPage />);

    const { element } = await act(() => {
      const element = screen;
      return { element };
    });

    expect(element).not.toBeNull();
  });
});
