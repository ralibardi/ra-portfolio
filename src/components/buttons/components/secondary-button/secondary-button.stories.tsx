import type { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from './secondary-button';

const meta: Meta<typeof SecondaryButton> = {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
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
