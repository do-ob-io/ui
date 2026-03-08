import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from '@tanstack/react-table';
import { expect, userEvent, fn } from 'storybook/test';

import { DataTable } from './data-table.js';

/**
 * Sample data type for the example table.
 */
interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    meta: { style: { width: 60 } },
  }),
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
  columnHelper.accessor('role', {
    header: 'Role',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span className={info.getValue() === 'active' ? 'text-green-600' : 'text-red-600'}>
        {info.getValue()}
      </span>
    ),
  }),
];

const sampleData: Person[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Engineer', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer', status: 'active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Manager', status: 'inactive' },
  { id: 4, name: 'Dave Brown', email: 'dave@example.com', role: 'Engineer', status: 'active' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Designer', status: 'active' },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'QA', status: 'inactive' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Engineer', status: 'active' },
  { id: 8, name: 'Henry Wilson', email: 'henry@example.com', role: 'Manager', status: 'active' },
  { id: 9, name: 'Ivy Taylor', email: 'ivy@example.com', role: 'Designer', status: 'inactive' },
  { id: 10, name: 'Jack Anderson', email: 'jack@example.com', role: 'Engineer', status: 'active' },
  { id: 11, name: 'Karen Thomas', email: 'karen@example.com', role: 'QA', status: 'active' },
  { id: 12, name: 'Leo Martinez', email: 'leo@example.com', role: 'Engineer', status: 'inactive' },
];

/**
 * Wrapper that creates a TanStack table instance and passes it to DataTable.
 */
function DataTableExample(props: Omit<React.ComponentProps<typeof DataTable<Person>>, 'table'> & {
  readonly data?: Person[];
  readonly pageSize?: number;
}) {
  'use no memo'; // useReactTable returns mutable refs – Compiler must not cache renders
  const { data = sampleData, pageSize = 5, ...rest } = props;

  // eslint-disable-next-line react-hooks/incompatible-library -- story wrapper intentionally calls useReactTable
  const table = useReactTable<Person>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize },
    },
  });

  return <DataTable table={table} {...rest} />;
}

const meta = {
  component: DataTableExample,
  parameters: {
    layout: 'padded',
  },
  tags: [ 'autodocs' ],
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
    await expect(canvas.getByText('Total Records:')).toBeVisible();
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
    await expect(canvas.getByText('Total Records:')).toBeVisible();
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
