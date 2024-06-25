import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {}
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    color: 'secondary'
  }
};

export const Success: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    color: 'success'
  }
};

export const Warning: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    color: 'warning'
  }
};

export const Danger: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    color: 'danger'
  }
};

export const Faded: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    variant: 'faded'
  }
};


export const Bordered: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    variant: 'bordered'
  }
};

export const Light: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {
    variant: 'light'
  }
};
