import React, { FunctionComponent } from 'react';
import FooterSocials from './footer-socials';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { act, customRender, screen } from '@utils/test-utilities';
import { IconLinkProps } from '@components/icon-link/types/icon-link-props';
import { ISocialLink } from '../../utils/getSocialLinks';

jest.mock('@components/icon-link', () => {
  const IconLink: FunctionComponent<IconLinkProps> = ({ linkUrl }) => (
    <a href={linkUrl} data-testid="icon-link" />
  );
  return IconLink;
});

jest.mock('@utils/component-array', () => ({
  ComponentArray: ({ of }: { render: Function; of: ISocialLink[] }) => (
    <div>
      {of.map((item: ISocialLink, index: number) => (
        <a href={item.link} data-testid="icon-link" key={index} />
      ))}
    </div>
  ),
}));

describe('FooterSocials', () => {
  it('renders social links correctly', async () => {
    const mockSocialLinks: ISocialLink[] = [
      {
        icon: faAccessibleIcon,
        link: 'http://link1.com',
        order: 0,
        isHidden: false,
      },
      {
        icon: faAccessibleIcon,
        link: 'http://link2.com',
        order: 1,
        isHidden: false,
      },
    ];

    // Render the component
    customRender(<FooterSocials socialLinks={mockSocialLinks} />);

    // Assertions
    const { element, links } = await act(() => {
      const element = screen.getByTestId('test');

      const links = screen.getAllByTestId('icon-link');
      return { element, links };
    });

    expect(links).toHaveLength(mockSocialLinks.length);
    expect(element).toBeInTheDocument();
    expect(links[0]).toHaveAttribute('href', 'http://link1.com');
    expect(links[1]).toHaveAttribute('href', 'http://link2.com');
  });
});
