import type { Meta, StoryObj } from '@storybook/react';
import Loading from './loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AutoSize: Story = {
  args: {},
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};
