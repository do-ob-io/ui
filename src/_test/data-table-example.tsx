import { createColumnHelper, stockFeatures, useTable } from '@tanstack/react-table';

import type { DataTable } from '@/display/data-table/index.js';

interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const _features = stockFeatures;
const columnHelper = createColumnHelper<typeof _features, Person>();

export const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
];


export const sampleData: Person[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Engineer', age: 28, visits: 45, status: 'active', progress: 75 },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer', age: 32, visits: 38, status: 'active', progress: 85 },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Manager', age: 41, visits: 62, status: 'inactive', progress: 50 },
  { id: 4, name: 'Dave Brown', email: 'dave@example.com', role: 'Engineer', age: 26, visits: 29, status: 'active', progress: 60 },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Designer', age: 29, visits: 35, status: 'active', progress: 70 },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'QA', age: 35, visits: 51, status: 'inactive', progress: 40 },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Engineer', age: 27, visits: 42, status: 'active', progress: 80 },
  { id: 8, name: 'Henry Wilson', email: 'henry@example.com', role: 'Manager', age: 44, visits: 68, status: 'active', progress: 90 },
  { id: 9, name: 'Ivy Taylor', email: 'ivy@example.com', role: 'Designer', age: 31, visits: 39, status: 'inactive', progress: 45 },
  { id: 10, name: 'Jack Anderson', email: 'jack@example.com', role: 'Engineer', age: 25, visits: 24, status: 'active', progress: 65 },
  { id: 11, name: 'Karen Thomas', email: 'karen@example.com', role: 'QA', age: 33, visits: 48, status: 'active', progress: 75 },
  { id: 12, name: 'Leo Martinez', email: 'leo@example.com', role: 'Engineer', age: 30, visits: 33, status: 'inactive', progress: 55 },
];

export function useExampleTable(args: Omit<React.ComponentProps<typeof DataTable<Person>>, 'table'> & {
  readonly data?: Person[];
  readonly pageSize?: number;
}) {
  const { data = sampleData, ...rest } = args;

  const table = useTable({
    data,
    columns,
    _features,
    _rowModels: {},
  });

  return { table, ...rest };
}

