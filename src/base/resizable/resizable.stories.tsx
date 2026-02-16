import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable.js';

const meta = {
  component: ResizablePanelGroup,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal resizable panel group.
 */
export const Default: Story = {
  render: (args) => (
    <div className="h-50 max-w-md rounded-lg border">
      <ResizablePanelGroup orientation="horizontal" {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 1</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 2</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Panel 1')).toBeVisible();
    await expect(canvas.getByText('Panel 2')).toBeVisible();
  },
};

/**
 * Vertical resizable panels.
 */
export const Vertical: Story = {
  render: (args) => (
    <div className="h-75 max-w-md rounded-lg border">
      <ResizablePanelGroup orientation="vertical" {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Top</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Bottom</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Top')).toBeVisible();
    await expect(canvas.getByText('Bottom')).toBeVisible();
  },
};

/**
 * Resizable panels with a visible handle grip.
 */
export const WithHandle: Story = {
  render: (args) => (
    <div className="h-50 max-w-md rounded-lg border">
      <ResizablePanelGroup orientation="horizontal" {...args}>
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Sidebar')).toBeVisible();
    await expect(canvas.getByText('Content')).toBeVisible();
  },
};
