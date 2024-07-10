import React from 'react';
import { act, customRender, screen } from '@utils/test-utilities';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconLink from './icon-link';

// Add the required icon to the library
library.add(faGithub);

describe('IconLink', () => {
  test('renders without crashing', () => {
    customRender(<IconLink icon={faGithub} />);
  });

  test('renders the icon', async () => {
    customRender(<IconLink icon={faGithub} />);

    const { iconElement, linkElement } = await act(() => {
      const iconElement = screen.getByTestId('icon-link-icon');
      const linkElement = screen.getByTestId('icon-link');

      return { iconElement, linkElement };
    });

    expect(iconElement).not.toBeNull();
    expect(linkElement).not.toBeNull();
    expect(linkElement).not.toHaveAttribute('href');
  });

  test('renders the link with the correct URL', async () => {
    const linkUrl = 'https://github.com';
    customRender(<IconLink icon={faGithub} linkUrl={linkUrl} />);

    const { iconElement, linkElement } = await act(() => {
      const iconElement = screen.getByTestId('icon-link-icon');
      const linkElement = screen.getByTestId('icon-link');

      return { iconElement, linkElement };
    });

    expect(iconElement).not.toBeNull();
    expect(linkElement).not.toBeNull();
    expect(linkElement).toHaveAttribute('href', linkUrl);
  });

  test('renders the title', async () => {
    const title = 'GitHub';
    customRender(<IconLink icon={faGithub} title={title} />);

    const { iconElement, linkElement, labelElement } = await act(() => {
      const iconElement = screen.getByTestId('icon-link-icon');
      const linkElement = screen.getByTestId('icon-link');
      const labelElement = screen.getByTestId('icon-link-label');

      return { iconElement, linkElement, labelElement };
    });

    expect(iconElement).not.toBeNull();
    expect(linkElement).not.toBeNull();
    expect(linkElement).not.toHaveAttribute('href');
    expect(labelElement).not.toBeNull();
  });
});
