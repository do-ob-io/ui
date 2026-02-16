import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu.js';

const meta = {
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navigation menu with links.
 */
export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
              <NavigationMenuLink href="#">
                <div className="text-sm font-medium">Introduction</div>
                <p className="text-sm text-muted-foreground">
                  A quick overview of the project.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="text-sm font-medium">Installation</div>
                <p className="text-sm text-muted-foreground">
                  How to install and set up.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
              <NavigationMenuLink href="#">
                <div className="text-sm font-medium">Button</div>
                <p className="text-sm text-muted-foreground">
                  Interactive button component.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="text-sm font-medium">Dialog</div>
                <p className="text-sm text-muted-foreground">
                  Modal dialog component.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Getting Started')).toBeVisible();
    await expect(canvas.getByText('Components')).toBeVisible();
    await expect(canvas.getByText('Documentation')).toBeVisible();
  },
};

/**
 * Navigation menu with simple links only.
 */
export const SimpleLinks: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Home')).toBeVisible();
    await expect(canvas.getByText('About')).toBeVisible();
    await expect(canvas.getByText('Contact')).toBeVisible();
  },
};
