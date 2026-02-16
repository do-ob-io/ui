import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Slider } from './slider.js';

const meta = {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default slider with a single thumb.
 */
export const Default: Story = {
  args: {
    defaultValue: [ 50 ],
    max: 100,
    min: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider')).toBeInTheDocument();
  },
};

/**
 * Range slider with two thumbs.
 */
export const Range: Story = {
  args: {
    defaultValue: [ 25, 75 ],
    max: 100,
    min: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    const sliders = canvas.getAllByRole('slider');
    await expect(sliders.length).toBe(2);
  },
};

/**
 * Slider with custom step.
 */
export const WithStep: Story = {
  args: {
    defaultValue: [ 40 ],
    max: 100,
    min: 0,
    step: 10,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider')).toBeInTheDocument();
  },
};

/**
 * Disabled slider.
 */
export const Disabled: Story = {
  args: {
    defaultValue: [ 50 ],
    disabled: true,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider')).toBeInTheDocument();
  },
};
