import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon, InboxIcon, CalendarIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { expect, userEvent } from 'storybook/test';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator,
} from './sidebar.js';

const meta = {
  component: SidebarProvider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  { icon: HomeIcon, label: 'Home' },
  { icon: InboxIcon, label: 'Inbox' },
  { icon: CalendarIcon, label: 'Calendar' },
  { icon: SearchIcon, label: 'Search' },
  { icon: SettingsIcon, label: 'Settings' },
];

/**
 * Default sidebar with navigation items.
 */
export const Default: Story = {
  render: (args) => (
    <SidebarProvider {...args}>
      <Sidebar>
        <SidebarHeader>
          <div className="px-2 py-1.5 text-sm font-semibold">App Name</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 py-1.5 text-xs text-muted-foreground">v1.0.0</div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Page Title</span>
        </header>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">Page content goes here.</p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('App Name')).toBeVisible();
    await expect(canvas.getByText('Home')).toBeVisible();
    await expect(canvas.getByText('Inbox')).toBeVisible();
  },
};

/**
 * Sidebar with collapse toggle.
 */
export const ToggleCollapse: Story = {
  render: (args) => (
    <SidebarProvider defaultOpen={true} {...args}>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.slice(0, 3).map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton tooltip={item.label}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Content</span>
        </header>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">Toggle the sidebar with the button.</p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Home')).toBeVisible();
    const trigger = canvas.getByRole('button', { name: /toggle sidebar/i });
    await userEvent.click(trigger);
  },
};

/**
 * Sidebar with grouped sections and separators.
 */
export const WithGroups: Story = {
  render: (args) => (
    <SidebarProvider {...args}>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HomeIcon />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <InboxIcon />
                    <span>Messages</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SettingsIcon />
                    <span>Preferences</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">Content area.</p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Dashboard')).toBeVisible();
    await expect(canvas.getByText('Messages')).toBeVisible();
    await expect(canvas.getByText('Preferences')).toBeVisible();
  },
};
