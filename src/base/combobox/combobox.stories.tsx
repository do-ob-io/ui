import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { expect } from 'storybook/test';

import { Combobox } from './combobox.js';

const Component = Combobox as unknown as ComponentType<Record<string, unknown>>;

const meta = {
  component: Component,
  tags: [ 'autodocs' ],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div data-testid="default-story">
      <Component>Demo</Component>
    </div>
  ),
};

export const DemoState: Story = {
  render: () => (
    <div data-testid="demo-state-story">
      <Component>Demo</Component>
      <span>Secondary state</span>
    </div>
  ),
  play: async ({ canvas }) => {
    expect(canvas.getByTestId('demo-state-story')).toBeInTheDocument();
  },
};
