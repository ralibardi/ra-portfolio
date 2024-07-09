import type { Meta, StoryObj } from '@storybook/react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import IconLink from './icon-link';

const meta: Meta<typeof IconLink> = {
  title: 'Buttons/IconLink',
  component: IconLink,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: faArrowLeft,
    title: 'Testing',
    linkUrl: 'https://example.com',
  },
};

export const NoTitle: Story = {
  args: {
    icon: faArrowLeft,
    linkUrl: 'https://example.com',
  },
};

export const NoIcon: Story = {
  args: {
    title: 'Testing',
    linkUrl: 'https://example.com',
  },
};
