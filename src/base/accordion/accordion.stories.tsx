import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion.js';

const meta = {
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default accordion with multiple collapsible items.
 */
export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It animates open and close by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    const triggers = canvas.getAllByRole('button');
    await expect(triggers).toHaveLength(3);
    await expect(canvas.getByText('Is it accessible?')).toBeVisible();
  },
};

/**
 * Accordion with a single open item by default.
 */
export const WithDefaultValue: Story = {
  render: (args) => (
    <Accordion defaultValue={[ 'item-1' ]} {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Open by default</AccordionTrigger>
        <AccordionContent>This item is open by default.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Closed by default</AccordionTrigger>
        <AccordionContent>This item is closed by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('This item is open by default.')).toBeVisible();
  },
};

/**
 * Tests opening and closing items by click.
 */
export const ToggleInteraction: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Click to expand</AccordionTrigger>
        <AccordionContent>Content is now visible.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Click to expand' });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
    await expect(canvas.getByText('Content is now visible.')).toBeVisible();
  },
};
