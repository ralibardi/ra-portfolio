import React from 'react';
import TestingPage from './home-page';
import { act, customRender, screen } from '@utils/test-utilities';

describe('HomePage', () => {
  it('renders without crashing', async () => {
    customRender(<TestingPage />);

    const { element } = await act(() => {
      const element = screen;
      return { element };
    });

    expect(element).not.toBeNull();
  });
});
