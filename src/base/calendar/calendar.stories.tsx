import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Calendar } from './calendar.js';

const meta = {
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default single-date calendar.
 */
export const Default: Story = {
  args: {
    mode: 'single',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('grid')).toBeInTheDocument();
  },
};

/**
 * Calendar with a pre-selected date.
 */
export const WithSelectedDate: Story = {
  args: {
    mode: 'single',
    selected: new Date(2025, 0, 15),
    defaultMonth: new Date(2025, 0),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('grid')).toBeInTheDocument();
  },
};

/**
 * Calendar with range selection mode.
 */
export const RangeSelection: Story = {
  args: {
    mode: 'range',
    defaultMonth: new Date(2025, 0),
    selected: {
      from: new Date(2025, 0, 10),
      to: new Date(2025, 0, 20),
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('grid')).toBeInTheDocument();
  },
};

/**
 * Calendar with multiple months shown.
 */
export const MultipleMonths: Story = {
  args: {
    mode: 'single',
    numberOfMonths: 2,
    defaultMonth: new Date(2025, 0),
  },
  play: async ({ canvas }) => {
    const grids = canvas.getAllByRole('grid');
    await expect(grids.length).toBe(2);
  },
};
