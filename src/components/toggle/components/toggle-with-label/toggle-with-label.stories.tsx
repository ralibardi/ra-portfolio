import type { Meta, StoryObj } from '@storybook/react';
import ToggleWithLabel from './toggle-with-label';

const meta: Meta<typeof ToggleWithLabel> = {
  title: 'Toggles/ToggleWithIcons',
  component: ToggleWithLabel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    label: 'Testing',
    onClick: () => alert('Clicked'),
  },
};

export const Checked: Story = {
  args: {
    label: 'Testing',
    checked: true,
    onClick: () => alert('Clicked'),
  },
};
