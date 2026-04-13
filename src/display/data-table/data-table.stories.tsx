import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, fn } from 'storybook/test';

import { useExampleTable, type Person } from '@/_test/data-table-example.js';

import { DataTable } from './data-table.js';

/**
 * Wrapper that creates a TanStack table instance and passes it to DataTable.
 */
export function DataTableExample(props: Omit<React.ComponentProps<typeof DataTable<Person>>, 'table'> & {
  readonly data?: Person[];
  readonly pageSize?: number;
}) {
  'use no memo'; // useReactTable returns mutable refs – Compiler must not cache renders
  const dataTableProps = useExampleTable(props);

  return <DataTable {...dataTableProps} />;
}

const meta = {
  component: DataTableExample,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
  render: (args) => <DataTableExample {...args} />,
} satisfies Meta<typeof DataTableExample>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default rendering with basic table data.
 */
export const Default: Story = {
  args: {
    paginate: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Alice Johnson')).toBeVisible();
    await expect(canvas.getByText('Email')).toBeVisible();
    await expect(canvas.getByText(/Total Records:/)).toBeVisible();
  },
};

/**
 * Table with sortable columns.
 */
export const Sortable: Story = {
  args: {
    sortable: true,
    paginate: true,
  },
  play: async ({ canvas }) => {
    const sortButton = canvas.getByLabelText('Sort Name ascending');
    await expect(sortButton).toBeInTheDocument();

    await userEvent.click(sortButton);
    await expect(canvas.getByLabelText('Sort Name descending')).toBeInTheDocument();
  },
};

/**
 * Table with filterable columns.
 */
export const Filterable: Story = {
  args: {
    filterable: true,
    paginate: true,
  },
  play: async ({ canvas }) => {
    const filterButton = canvas.getByLabelText('Filter Name');
    await expect(filterButton).toBeInTheDocument();
  },
};

/**
 * Table in a loading state.
 */
export const Loading: Story = {
  args: {
    loading: true,
    paginate: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Loading...')).toBeVisible();
  },
};

/**
 * Table with clickable rows.
 */
export const WithRowClick: Story = {
  args: {
    paginate: true,
    onRowClick: fn(),
  },
  play: async ({ canvas, args }) => {
    const row = canvas.getByText('Alice Johnson').closest('tr');
    await expect(row).toBeInTheDocument();

    await userEvent.click(row!);
    await expect(args.onRowClick).toHaveBeenCalled();
  },
};

/**
 * Table with conditional row styling.
 */
export const WithRowProps: Story = {
  args: {
    paginate: true,
    rowProps: [
      {
        selector: (data: Person) => data.status === 'inactive',
        props: { className: 'opacity-50' },
      },
    ],
  },
  play: async ({ canvas }) => {
    const inactiveRow = canvas.getByText('Carol White').closest('tr');
    await expect(inactiveRow).toHaveClass('opacity-50');
  },
};

/**
 * Table with all features enabled.
 */
export const FullFeatured: Story = {
  args: {
    sortable: true,
    filterable: true,
    paginate: true,
    onRowClick: fn(),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Alice Johnson')).toBeVisible();
    await expect(canvas.getByLabelText('Sort Name ascending')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Filter Name')).toBeInTheDocument();
    await expect(canvas.getByText(/Total Records:/)).toBeVisible();
  },
};

/**
 * Empty table with no data.
 */
export const Empty: Story = {
  args: {
    data: [],
    paginate: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No results.')).toBeVisible();
  },
};
