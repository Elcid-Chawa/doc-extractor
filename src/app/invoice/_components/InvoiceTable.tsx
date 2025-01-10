"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData extends Record<string, any>, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  form: any;
  onChange: (preData: TData[]) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  form,
  onChange,
}: DataTableProps<TData[], TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border px-10  max-h-[530px] overflow-y-scroll">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell, idx) => (
                  <TableCell key={cell.id}>
                    <FormField
                      control={form.control}
                      name={cell.column.id}
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormControl>
                            <Input
                              // {...field}
                              value={field.value}
                              onChange={(e) => {
                                field.onChange();
                                const updatedData = data.map((item, idx) =>
                                  idx === row.index
                                    ? {
                                        ...item,
                                        [cell.column.id]: e.target.value,
                                      }
                                    : item,
                                );
                                onChange(updatedData);
                                console.log(
                                  "prevData",
                                  updatedData[row.index],
                                  cell.column.id,
                                  e.target.value,
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
