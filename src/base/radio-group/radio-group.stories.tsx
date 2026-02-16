import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Label } from '../label/label.js';

import { RadioGroup, RadioGroupItem } from './radio-group.js';

const meta = {
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default radio group with labeled options.
 */
export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="opt-1" />
        <Label htmlFor="opt-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="opt-2" />
        <Label htmlFor="opt-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="opt-3" />
        <Label htmlFor="opt-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Option 1')).toBeVisible();
    await expect(canvas.getByText('Option 2')).toBeVisible();
    await expect(canvas.getByText('Option 3')).toBeVisible();
  },
};

/**
 * Tests selecting a radio option.
 */
export const SelectInteraction: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="radio-a" />
        <Label htmlFor="radio-a">Alpha</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="radio-b" />
        <Label htmlFor="radio-b">Beta</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvas }) => {
    const radioButtons = canvas.getAllByRole('radio');
    await userEvent.click(radioButtons[1]);
    await expect(radioButtons[1]).toBeChecked();
    await expect(radioButtons[0]).not.toBeChecked();
  },
};

/**
 * Radio group with a disabled option.
 */
export const WithDisabledOption: Story = {
  render: (args) => (
    <RadioGroup defaultValue="enabled" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="enabled" id="r1" />
        <Label htmlFor="r1">Enabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled" id="r2" disabled />
        <Label htmlFor="r2">Disabled</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvas }) => {
    const radioButtons = canvas.getAllByRole('radio');
    await expect(radioButtons[0]).toBeChecked();
    await expect(radioButtons[1]).toBeDisabled();
  },
};
