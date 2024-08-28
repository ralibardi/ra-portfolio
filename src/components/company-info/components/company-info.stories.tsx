import type { Meta, StoryObj } from '@storybook/react';
import CompanyInfo from './company-info';

const meta: Meta<typeof CompanyInfo> = {
  title: 'Components/CompanyInfo',
  component: CompanyInfo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {},
};

export const HiddenLabel: Story = {
  args: {
    isLabelHidden: true,
  },
};

