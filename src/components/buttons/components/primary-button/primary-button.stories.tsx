import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './primary-button';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    label: 'Testing',
  },
};

export const OnClick: Story = {
  args: {
    label: 'Testing',
    onClick: () => alert('Clicked'),
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
    label: 'Loading',
  },
};
