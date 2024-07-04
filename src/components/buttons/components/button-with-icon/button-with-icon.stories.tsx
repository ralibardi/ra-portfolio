import type { Meta, StoryObj } from '@storybook/react';
import ButtonWithIcon from './button-with-icon';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof ButtonWithIcon> = {
  title: 'Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {
    icon: faArrowLeft,
    label: 'Testing',
  },
};

export const OnClick: Story = {
  args: {
    icon: faArrowLeft,
    label: 'Testing',
    onClick: () => alert('Clicked'),
  },
};

export const LoadingState: Story = {
  args: {
    icon: faArrowLeft,
    isLoading: true,
    label: 'Loading',
  },
};
