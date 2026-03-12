'use client';

import { cn } from '@do-ob/core/web';
import {
  flexRender,
} from '@tanstack/react-table';
import type {
  Row,
  Table as TanStackTable,
} from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, FilterIcon, Loader2Icon, XIcon } from 'lucide-react';
import {
  type FC,
  type HTMLAttributes,
  type ComponentProps,
  type MouseEvent as ReactMouseEvent,
  use,
  useMemo,
  useCallback } from 'react';

import { Button } from '@/base/button.js';
import { Input } from '@/base/input.js';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/base/pagination.js';
import { Popover, PopoverContent, PopoverTrigger } from '@/base/popover.js';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/base/table.js';

import type {
  DataTableRowProps } from './data-table-context.js';
import {
  DataTableContext,
} from './data-table-context.js';

/**
 * Table Header component for the DataTable.
 */
const Header = () => {
  'use no memo'; // table is a mutable ref – Compiler must not cache renders
  const { table, sortable, filterable } = use(DataTableContext);

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const meta = header.column.columnDef.meta as { style?: Record<string, any> };
            const sortLabels = {
              'asc': `Sort ${header.id} ascending`,
              'desc': `Sort ${header.id} descending`,
            };
            const sortType = header.column.getIsSorted() || 'asc';
            return (
              <TableHead key={header.id} style={{ ...meta?.style }}>
                <span>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                </span>
                {sortable && header.column.getCanSort() ? (
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="relative top-0.5"
                    onClick={header.column.getToggleSortingHandler()}
                    aria-label={sortLabels[sortType]}
                  >
                    <ArrowUpDownIcon className={cn(header.column.getIsSorted() && `
                      hidden
                    `)} />
                    <ArrowUpIcon className={cn(header.column.getIsSorted() === 'asc' ? `
                      block
                    ` : 'hidden')} />
                    <ArrowDownIcon className={cn(header.column.getIsSorted() === 'desc' ? `
                      block
                    ` : 'hidden')} />
                  </Button>
                ) : null}
                {filterable && header.column.getCanFilter() && (
                  <Popover>
                    <PopoverTrigger
                      render={<Button
                        variant={header.column.getFilterValue() ? 'secondary' : 'ghost'}
                        size="icon-sm"
                        className="relative top-0.5"
                        aria-label={`Filter ${header.id}`}
                      />}
                    >
                      <FilterIcon className={cn(header.column.getFilterValue() ? `
                        opacity-100
                      ` : 'opacity-50')} />
                    </PopoverTrigger>
                    <PopoverContent className="w-60 p-3" align="start">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium" htmlFor={`filter-${header.id}`}>
                          Filter {String(header.column.columnDef.header ?? header.id)}
                        </label>
                        <div className="flex items-center gap-2">
                          <Input
                            id={`filter-${header.id}`}
                            placeholder={'Search...'}
                            value={(header.column.getFilterValue() as string) ?? ''}
                            onChange={(e) => header.column.setFilterValue(e.target.value || undefined)}
                            aria-label={`Filter ${header.id} value`}
                          />
                          {Boolean(header.column.getFilterValue()) && (
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => header.column.setFilterValue(undefined)}
                              aria-label={`Clear filter ${header.id}`}
                            >
                              <XIcon />
                            </Button>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}

              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export type DataTableRowComponentProps<TData> = {
  /**
   * TansStack table row properties.
   */
  row: Row<TData>;
} & ComponentProps<typeof TableRow>;

/**
 * Table Row component for the DataTable.
 */
function DataTableRowComponent<TData>({ row, ...props }: Readonly<DataTableRowComponentProps<TData>>) {
  'use no memo'; // row is a mutable ref – Compiler must not cache renders

  return (
    <TableRow
      {...props}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

/**
 * Table Body component for the DataTable.
 */
const Body = () => {
  'use no memo'; // table is a mutable ref – Compiler must not cache renders
  const { table, rows, loading, rowProps, onRowClick } = use(DataTableContext);
  const columns = table.getAllColumns();

  return (
    <TableBody className="relative">
      {loading ? (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="
              absolute inset-0 z-10 flex w-full items-center justify-center
              gap-2 bg-white/75
              dark:bg-black/75
            "
          >
            <Loader2Icon className="animate-spin" />
            <p>Loading...</p>
          </TableCell>
        </TableRow>
      ) : null}
      {rows?.length ? (
        rows.map((row) => {
          /**
           * Apply row properties based on the selector function.
           */
          const rowPropsReduced = rowProps.reduce<ComponentProps<'tr'>>((acc, current) => {
            const { props, selector } = current;
            if (selector(row.original)) {
              return { ...acc, ...props };
            }
            return acc;
          }, {});

          return (
            <DataTableRowComponent
              key={row.id}
              row={row}
              data-state={row.getIsSelected() && 'selected'}
              {...rowPropsReduced}
              onClick={onRowClick ? (event) => onRowClick(row.original, event) : undefined}
              className={cn(
                onRowClick && `
                  cursor-pointer
                  hover:shadow/25
                `,
                rowPropsReduced.className,
              )}
            />
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            {loading ? ' ' : 'No results.'}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

const MAX_VISIBLE = 3;

/**
 * Pagination component for the DataTable.
 */
const DataTablePagination: FC = () => {
  'use no memo'; // Compiler produces issues with pagination state not updating correctly
  const { table } = use(DataTableContext);

  // Array of page indexes, e.g. [0,1,2…]
  const pageIndexes = table.getPageOptions();
  const totalPages = pageIndexes.length;
  const currentPage = table.getState().pagination.pageIndex;

  const windowPages = useMemo<number[]>(() => {
    if (totalPages <= MAX_VISIBLE) {
      return pageIndexes;
    }

    let start = Math.max(0, currentPage - Math.floor(MAX_VISIBLE / 2));
    let end = start + MAX_VISIBLE - 1;

    // shift window if we ran past the last page
    if (end >= totalPages) {
      end = totalPages - 1;
      start = end - MAX_VISIBLE + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [ currentPage, totalPages, pageIndexes ]);

  const showLeftEllipsis = windowPages[0] > 1; // gap between first page (0) and first window page
  const showRightEllipsis = windowPages.at(-1) ?? 0 < totalPages - 2; // gap before last

  const goToPage = useCallback((page: number) => table.setPageIndex(page), [ table ]);

  return (
    <Pagination className="w-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!table.getCanPreviousPage()}
            className={cn(!table.getCanPreviousPage() && `
              pointer-events-none opacity-50
            `)}
            onClick={() => table.previousPage()}
            isActive={table.getCanPreviousPage()}
          />
        </PaginationItem>

        {/* First page */}
        {(windowPages[0] !== 0) && (
          <PaginationItem>
            <PaginationLink onClick={() => goToPage(0)} isActive={currentPage === 0}>
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Left Ellipsis */}
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Pages inside the sliding window */}
        {windowPages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => goToPage(page)}
              isActive={page === currentPage}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right Ellipsis */}
        {showRightEllipsis ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}

        {/* Last page */}
        {(windowPages.length > 1 && windowPages.at(-1) !== totalPages - 1) && (
          <PaginationItem>
            <PaginationLink
              onClick={() => goToPage(totalPages - 1)}
              isActive={currentPage === totalPages - 1}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            aria-disabled={!table.getCanNextPage()}
            className={cn(!table.getCanNextPage() && `
              pointer-events-none opacity-50
            `)}
            onClick={() => table.nextPage()}
            isActive={table.getCanNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};


/**
 * Props for the DataTable component.
 */
export interface DataTableProps<TData> extends HTMLAttributes<HTMLDivElement> {
  /**
   * A TanStack Table instance created by `useDataTableClient` or `useDataTableServer`.
   */
  table: TanStackTable<TData>;
  /**
   * If the table should be in a loading state.
   */
  loading?: boolean;
  /**
   * If the table is sortable.
   */
  sortable?: boolean;
  /**
   * If the table columns are filterable.
   */
  filterable?: boolean;
  /**
   * If pagination should be rendered.
   */
  paginate?: boolean;
  /**
   * Applies properties to rows that match the data selector.
   */
  rowProps?: DataTableRowProps<TData>[];
  /**
   * Callback when a row is clicked. Receives the row data and the click event.
   */
  onRowClick?: (row: TData, event: ReactMouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

/**
 * A pure data table component for displaying data.
 */
export function DataTable<TData>({
  table,
  loading = false,
  sortable = false,
  filterable = false,
  paginate = false,
  rowProps = [],
  onRowClick,
  className,
  ...props
}: Readonly<DataTableProps<TData>>) {
  'use no memo'; // table is a mutable ref – Compiler must not cache renders

  const rows = table.getRowModel().rows;

  const context: DataTableContext<TData> = {
    table,
    rows,
    sortable,
    filterable,
    loading,
    rowProps,
    onRowClick,
  };

  return (
    <DataTableContext value={context}>
      <div className="w-full">
        <div
          {...props}
          className={cn(
            'relative',
            className,
          )}
          style={props.style}
        >
          <Table className="h-full">
            <Header />
            <Body />
          </Table>
        </div>
        {paginate && (<div className="flex flex-row items-center space-x-2 pt-4">
          <div className="grow text-sm text-muted-foreground">
            {table.getRowCount()} records
          </div>
          <DataTablePagination />
        </div>)}
      </div>
    </DataTableContext>
  );
}
