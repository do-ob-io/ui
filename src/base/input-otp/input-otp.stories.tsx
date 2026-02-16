import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './input-otp.js';

const meta = {
  title: 'base/InputOTP',
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default 6-digit OTP input.
 */
export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeInTheDocument();
  },
};

/**
 * 4-digit OTP input.
 */
export const FourDigit: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeInTheDocument();
  },
};

/**
 * Disabled OTP input.
 */
export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled();
  },
};
