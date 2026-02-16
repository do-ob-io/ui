import type { Meta, StoryObj } from '@storybook/react-vite';
import { TriangleAlertIcon, InfoIcon } from 'lucide-react';
import { expect } from 'storybook/test';

import { Button } from '../button/button.js';

import { Alert, AlertTitle, AlertDescription, AlertAction } from './alert.js';

const meta = {
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'default', 'destructive' ],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert with title and description.
 */
export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is an informational alert message.</AlertDescription>
    </Alert>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('Information')).toBeVisible();
    await expect(canvas.getByText('This is an informational alert message.')).toBeVisible();
  },
};

/**
 * Destructive variant for error or warning messages.
 */
export const Destructive: Story = {
  render: (args) => (
    <Alert variant="destructive" {...args}>
      <TriangleAlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    </Alert>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('Error')).toBeVisible();
  },
};

/**
 * Alert with an action button.
 */
export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>A new version is available for download.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">Update</Button>
      </AlertAction>
    </Alert>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('Update')).toBeVisible();
  },
};
