import type { Meta, StoryObj } from '@storybook/react';
import ToggleWithIcons from './toggle-with-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof ToggleWithIcons> = {
  title: 'Toggles/ToggleWithIcons',
  component: ToggleWithIcons,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    iconLeft: faArrowLeft,
    iconRight: faArrowRight,
    onClick: () => alert('Clicked'),
  },
};

export const Checked: Story = {
  args: {
    iconLeft: faArrowLeft,
    iconRight: faArrowRight,
    checked: true,
    onClick: () => alert('Clicked'),
  },
};
