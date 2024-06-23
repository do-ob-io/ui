import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'A link to some resource',
  }
};

export const InText: Story = {
  render: (args) => (
    <p>
      This is a paragraph with <Link {...args} />.
    </p>
  ),
  args: {
    href: '#',
    children: 'a link to some resource',
  }
};

export const External: Story = {
  args: {
    href: 'https://#',
    children: 'A link to some resource',
  }
};
