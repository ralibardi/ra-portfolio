import React from 'react';
import TestingPage from './cv-page';
import { act, customRender, screen } from '@utils/test-utilities';

describe('CVPage', () => {
  it('renders without crashing', async () => {
    customRender(<TestingPage />);

    const { element } = await act(() => {
      const element = screen;
      return { element };
    });

    expect(element).not.toBeNull();
  });
});
