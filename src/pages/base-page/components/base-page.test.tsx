import React from 'react';
import BasePage from './base-page';
import { act, customRender, screen } from '@utils/test-utilities';

jest.mock('@components/header', () => {
  const HeaderMock = () => <div data-testid="header">Mock Header</div>;
  return HeaderMock;
});

jest.mock('@components/footer', () => {
  const FooterMock = () => <div data-testid="footer">Mock Footer</div>;
  return FooterMock;
});

describe('BasePage', () => {
  it('renders without crashing', async () => {
    customRender(<BasePage />);

    const { element } = await act(() => {
      const element = screen;
      return { element };
    });

    expect(element).not.toBeNull();
  });

  it('renders the header component', async () => {
    customRender(<BasePage />);

    const { element } = await act(() => {
      const element = screen.getByTestId('header');
      return { element };
    });

    expect(element).toBeInTheDocument();
  });

  it('renders the footer component', async () => {
    customRender(<BasePage />);

    const { element } = await act(() => {
      const element = screen.getByTestId('footer');
      return { element };
    });

    expect(element).toBeInTheDocument();
  });
});
