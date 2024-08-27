import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitcher from './toggle-switcher';

const meta: Meta<typeof ToggleSwitcher> = {
  title: 'Toggles/ToggleSwitcher',
  component: ToggleSwitcher,
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

export const InvertedLogic: Story = {
  args: {
    checked: false,
    invertedIconLogic: true,
    onChange: () => {},
  },
};

