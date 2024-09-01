import React from 'react';
import TestingPage from './health-page';
import { act, customRender, screen } from '@utils/test-utilities';

describe('HealthPage', () => {
  it('renders without crashing', async () => {
    customRender(<TestingPage />);

    const { element } = await act(() => {
      const element = screen;
      return { element };
    });

    expect(element).not.toBeNull();
  });
});
