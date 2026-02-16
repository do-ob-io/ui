import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card.js';

const meta = {
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hover card with trigger link.
 */
export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<a href="#" className="underline" />}>
        Hover me
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Preview Card</h4>
          <p className="text-sm text-muted-foreground">
            This card appears on hover to show additional information.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Hover me')).toBeVisible();
  },
};

/**
 * Tests hover interaction to show content.
 */
export const HoverInteraction: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<a href="#" className="underline" />}>
        Hover for details
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">Details shown on hover.</p>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({ canvas }) => {
    const trigger = canvas.getByText('Hover for details');
    await expect(trigger).toBeVisible();
  },
};
