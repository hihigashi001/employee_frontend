// Library
import { ReactElement } from "react";
import { useTable, Column, useSortBy, useGlobalFilter, useFilters } from "react-table";
// componets
import { StatusFilter } from "src/components/shared/Table/StatusFilter"
import { GlobalFilter } from "src/components/shared/Table/GlobalFilter"
import { TableHead } from "src/components/shared/Table/TableHead";
import { TableBody } from "src/components/shared/Table/TableBody";


type Props<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

type TableComponent = <T extends object>(
  props: Props<T>
) => ReactElement<Props<T>>;

export type StatusFilterType = {
  statuses: Status;
  defaultValue?: string;
};

export interface Status {
  [label: string]: string;
}

export const Table: TableComponent = ({ columns, data }) => {
  const instance = useTable({ columns, data, initialState: { sortBy: [] } }, useGlobalFilter, useFilters, useSortBy);
  const { getTableProps } = instance;
  const statusFilter: StatusFilterType = {
    defaultValue: "在職",
    statuses: { 在職: "在職", 退職: "退職", 休職: "休職" },
  };

  return (
    <>
      <GlobalFilter instance={instance} />
      <StatusFilter statusFilter={statusFilter} instance={instance} data={data} />
      <table {...getTableProps()} className="w-full">
        <TableHead instance={instance} />
        <TableBody instance={instance} />
      </table>
    </>
  );
};
