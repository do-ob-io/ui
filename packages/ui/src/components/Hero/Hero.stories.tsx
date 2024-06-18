import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';
import { HeroProps } from './data/HeroProps';

const meta = {
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: HeroProps = {
  title: 'Supercharge your web applications',
  subtitle: 'Build faster, more reliable web applications with do-ob.',
  actionText: 'Get started',
};

export const Standard: Story = {
  args: {
    ...args,
    variant: 'standard',
  },
};

export const Prompt: Story = {
  args: {
    ...args,
    actionText: [
      'A fun and friendly platformer where you play as a dog with springy boots.',
      'An immersive role-playing game where its inhabitants are secretly worms.',
      'A horror game where you\'re thrown into a grim world full of monsters.',
      'A strategic empire builder where you must protect kingdoms from banana floods.'
    ].join(';'),
    variant: 'prompt',
  },
};
