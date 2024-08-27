import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Toggles/Toggle',
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    onChange: () => alert('Clicked'),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => alert('Clicked'),
  },
};
