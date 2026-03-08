'use client';

import type { Table, Row } from '@tanstack/react-table';
import {
  type ComponentProps,
  createContext,
} from 'react';

export interface DataTableRowProps<D> {
  props: ComponentProps<'tr'>;
  selector: (data: D) => boolean;
}

export interface DataTableContext<D> {
  table: Table<D>;
  rows: Row<D>[];
  sortable: boolean;
  filterable: boolean;
  loading: boolean;
  rowProps: DataTableRowProps<D>[];
  onRowClick?: (data: D, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

export const DataTableDefault: DataTableContext<any> = {
  table: {} as Table<any>,
  rows: [],
  sortable: false,
  filterable: false,
  loading: false,
  rowProps: [],
};

export const DataTableContext = createContext(DataTableDefault);
