import type { Meta, StoryObj } from '@storybook/react';
import FooterSocials from './footer-socials';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ISocialLink } from '../../utils/getSocialLinks';

const meta: Meta<typeof FooterSocials> = {
  title: 'Links/FooterSocials',
  component: FooterSocials,
};

export default meta;

type Story = StoryObj<typeof meta>;

const socialLinks: ISocialLink = {
  icon: faGoogle,
  link: 'https://www.google.com',
  order: 0,
  isHidden: false,
};

export const DefaultState: Story = {
  args: {
    socialLinks: [socialLinks],
  },
};

export const IsLinkHidden: Story = {
  args: {
    socialLinks: [{ ...socialLinks, isHidden: true }],
  },
};
