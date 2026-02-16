import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Input } from '../input/input.js';

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from './field.js';

const meta = {
  component: Field,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    orientation: {
      control: 'select',
      options: [ 'vertical', 'horizontal', 'responsive' ],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default vertical field with label and input.
 */
export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" type="email" placeholder="Enter your email" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </FieldContent>
    </Field>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Email')).toBeVisible();
    await expect(canvas.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    await expect(canvas.getByText(/We will never share/)).toBeVisible();
  },
};

/**
 * Horizontal field layout.
 */
export const Horizontal: Story = {
  render: (args) => (
    <Field orientation="horizontal" {...args}>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <FieldContent>
        <Input id="name" placeholder="Enter your name" />
      </FieldContent>
    </Field>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Name')).toBeVisible();
    await expect(canvas.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  },
};

/**
 * Field with error message.
 */
export const WithError: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <FieldContent>
        <Input id="password" type="password" aria-invalid="true" />
        <FieldError>Password must be at least 8 characters.</FieldError>
      </FieldContent>
    </Field>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Password')).toBeVisible();
    await expect(canvas.getByText('Password must be at least 8 characters.')).toBeVisible();
  },
};

/**
 * Field with multiple errors from an array.
 */
export const WithMultipleErrors: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input id="username" aria-invalid="true" />
        <FieldError errors={[
          { message: 'Username is required' },
          { message: 'Must be at least 3 characters' },
        ]} />
      </FieldContent>
    </Field>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Username is required')).toBeVisible();
    await expect(canvas.getByText('Must be at least 3 characters')).toBeVisible();
  },
};

/**
 * Fieldset with legend grouping.
 */
export const FieldSetGroup: Story = {
  render: (args) => (
    <FieldSet>
      <FieldLegend>Personal Information</FieldLegend>
      <FieldGroup>
        <Field {...args}>
          <FieldLabel htmlFor="first">First Name</FieldLabel>
          <Input id="first" placeholder="First" />
        </Field>
        <Field {...args}>
          <FieldLabel htmlFor="last">Last Name</FieldLabel>
          <Input id="last" placeholder="Last" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Personal Information')).toBeVisible();
    await expect(canvas.getByPlaceholderText('First')).toBeInTheDocument();
    await expect(canvas.getByPlaceholderText('Last')).toBeInTheDocument();
  },
};
