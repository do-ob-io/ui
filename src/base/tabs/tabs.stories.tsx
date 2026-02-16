import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs.js';

const meta = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal tabs.
 */
export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">Account settings content.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">Password settings content.</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Account')).toBeVisible();
    await expect(canvas.getByText('Account settings content.')).toBeVisible();
  },
};

/**
 * Tests switching between tabs.
 */
export const SwitchTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm">Content for tab one.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm">Content for tab two.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm">Content for tab three.</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Content for tab one.')).toBeVisible();
    await userEvent.click(canvas.getByText('Tab 2'));
    await expect(canvas.getByText('Content for tab two.')).toBeVisible();
  },
};

/**
 * Tabs with line variant.
 */
export const LineVariant: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" className="w-[400px]" {...args}>
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm text-muted-foreground">Overview content.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm text-muted-foreground">Analytics content.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-sm text-muted-foreground">Reports content.</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Overview')).toBeVisible();
    await expect(canvas.getByText('Overview content.')).toBeVisible();
  },
};

/**
 * Vertical tabs orientation.
 */
export const Vertical: Story = {
  render: (args) => (
    <Tabs defaultValue="general" orientation="vertical" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <p className="text-sm text-muted-foreground">General settings.</p>
      </TabsContent>
      <TabsContent value="security">
        <p className="text-sm text-muted-foreground">Security settings.</p>
      </TabsContent>
      <TabsContent value="integrations">
        <p className="text-sm text-muted-foreground">Integration settings.</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('General')).toBeVisible();
    await expect(canvas.getByText('General settings.')).toBeVisible();
  },
};
