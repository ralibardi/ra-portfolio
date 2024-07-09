import React from 'react';
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconLink from './icon-link';

// Add the required icon to the library
library.add(faGithub);

describe('IconLink', () => {
  it('renders without crashing', () => {
    render(<IconLink icon={faGithub} />);
  });

  it('renders the icon', () => {
    const { getByTestId } = render(<IconLink icon={faGithub} />);
    const iconElement = getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders the link with the correct URL', () => {
    const linkUrl = 'https://github.com';
    const { getByTestId } = render(
      <IconLink icon={faGithub} linkUrl={linkUrl} />,
    );
    const linkElement = getByTestId('link');
    expect(linkElement).toHaveAttribute('href', linkUrl);
  });

  it('renders the title', () => {
    const title = 'GitHub';
    const { getByText } = render(<IconLink icon={faGithub} title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
