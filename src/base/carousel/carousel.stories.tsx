import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Card, CardContent } from '../card/card.js';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel.js';

const meta = {
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal carousel with navigation buttons.
 */
export const Default: Story = {
  render: (args) => (
    <div className="mx-auto w-full max-w-xs">
      <Carousel {...args}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('region')).toBeInTheDocument();
    await expect(canvas.getByText('1')).toBeVisible();
  },
};

/**
 * Carousel showing multiple items per slide using basis classes.
 */
export const MultipleItems: Story = {
  render: (args) => (
    <div className="mx-auto w-full max-w-sm">
      <Carousel {...args}>
        <CarouselContent className="-ml-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('region')).toBeInTheDocument();
  },
};
