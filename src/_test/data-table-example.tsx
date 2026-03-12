import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

import type { DataTable } from '@/display/data-table/index.js';

/**
 * Sample data type for the example table.
 */
export interface Person {
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
      <span className={info.getValue() === 'active' ? 'text-green-600' : `
        text-red-600
      `}>
        {info.getValue()}
      </span>
    ),
  }),
];

export const sampleData: Person[] = [
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

export function useExampleTable(args: Omit<React.ComponentProps<typeof DataTable<Person>>, 'table'> & {
  readonly data?: Person[];
  readonly pageSize?: number;
}) {
  const { data = sampleData, pageSize = 5, ...rest } = args;


  // eslint-disable-next-line react-hooks/incompatible-library
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

  return { table, ...rest };
}

