import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { AcademicCapIcon } from '@do-ob/ui/icons';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
  args: {}
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} color="primary">Primary</Button>
      <Button {...args} color="secondary">Secondary</Button>
      <Button {...args} color="success">Success</Button>
      <Button {...args} color="warning">Warning</Button>
      <Button {...args} color="danger">Danger</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="filled">Filled</Button>
      <Button {...args} variant="faded">Faded</Button>
      <Button {...args} variant="bordered">Bordered</Button>
      <Button {...args} variant="light">Light</Button>
    </div>
  ),
};

export const ColorsAndVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="filled">Primary Filled</Button>
        <Button {...args} color="secondary" variant="filled">Secondary Filled</Button>
        <Button {...args} color="success" variant="filled">Success Filled</Button>
        <Button {...args} color="warning" variant="filled">Warning Filled</Button>
        <Button {...args} color="danger" variant="filled">Danger Filled</Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="faded">Primary Faded</Button>
        <Button {...args} color="secondary" variant="faded">Secondary Faded</Button>
        <Button {...args} color="success" variant="faded">Success Faded</Button>
        <Button {...args} color="warning" variant="faded">Warning Faded</Button>
        <Button {...args} color="danger" variant="faded">Danger Faded</Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="bordered">Primary Bordered</Button>
        <Button {...args} color="secondary" variant="bordered">Secondary Bordered</Button>
        <Button {...args} color="success" variant="bordered">Success Bordered</Button>
        <Button {...args} color="warning" variant="bordered">Warning Bordered</Button>
        <Button {...args} color="danger" variant="bordered">Danger Bordered</Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="light">Primary Light</Button>
        <Button {...args} color="secondary" variant="light">Secondary Light</Button>
        <Button {...args} color="success" variant="light">Success Light</Button>
        <Button {...args} color="warning" variant="light">Warning Light</Button>
        <Button {...args} color="danger" variant="light">Danger Light</Button>
      </div>
    </div>
  ),
  args: {
    className: 'w-64'
  }
};

export const Icon: Story = {
  render: (args) => <Button {...args}><AcademicCapIcon /></Button>,
  args: {
    iconify: true
  }
};

export const IconColors: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} color="primary"><AcademicCapIcon /></Button>
      <Button {...args} color="secondary"><AcademicCapIcon /></Button>
      <Button {...args} color="success"><AcademicCapIcon /></Button>
      <Button {...args} color="warning"><AcademicCapIcon /></Button>
      <Button {...args} color="danger"><AcademicCapIcon /></Button>
    </div>
  ),
  args: {
    iconify: true
  }
};

export const IconVariants: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="filled"><AcademicCapIcon /></Button>
      <Button {...args} variant="faded"><AcademicCapIcon /></Button>
      <Button {...args} variant="bordered"><AcademicCapIcon /></Button>
      <Button {...args} variant="light"><AcademicCapIcon /></Button>
    </div>
  ),
  args: {
    iconify: true
  }
};

export const IconColorsAndVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="filled"><AcademicCapIcon /></Button>
        <Button {...args} color="secondary" variant="filled"><AcademicCapIcon /></Button>
        <Button {...args} color="success" variant="filled"><AcademicCapIcon /></Button>
        <Button {...args} color="warning" variant="filled"><AcademicCapIcon /></Button>
        <Button {...args} color="danger" variant="filled"><AcademicCapIcon /></Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="faded"><AcademicCapIcon /></Button>
        <Button {...args} color="secondary" variant="faded"><AcademicCapIcon /></Button>
        <Button {...args} color="success" variant="faded"><AcademicCapIcon /></Button>
        <Button {...args} color="warning" variant="faded"><AcademicCapIcon /></Button>
        <Button {...args} color="danger" variant="faded"><AcademicCapIcon /></Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="bordered"><AcademicCapIcon /></Button>
        <Button {...args} color="secondary" variant="bordered"><AcademicCapIcon /></Button>
        <Button {...args} color="success" variant="bordered"><AcademicCapIcon /></Button>
        <Button {...args} color="warning" variant="bordered"><AcademicCapIcon /></Button>
        <Button {...args} color="danger" variant="bordered"><AcademicCapIcon /></Button>
      </div>
      <div className="flex gap-2">
        <Button {...args} color="primary" variant="light"><AcademicCapIcon /></Button>
        <Button {...args} color="secondary" variant="light"><AcademicCapIcon /></Button>
        <Button {...args} color="success" variant="light"><AcademicCapIcon /></Button>
        <Button {...args} color="warning" variant="light"><AcademicCapIcon /></Button>
        <Button {...args} color="danger" variant="light"><AcademicCapIcon /></Button>
      </div>
    </div>
  ),
  args: {
    iconify: true,
  }
};
