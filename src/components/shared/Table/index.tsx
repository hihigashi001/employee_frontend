import { ReactElement } from "react";
import { useTable, Column, useSortBy } from "react-table";

import { TableHead } from "src/components/shared/Table/TableHead";
import { TableBody } from "src/components/shared/Table/TableBody";

type Props<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

type TableComponent = <T extends object>(
  props: Props<T>
) => ReactElement<Props<T>>;

export const Table: TableComponent = ({ columns, data }) => {
  const instance = useTable({ columns, data, initialState: { sortBy: [] } }, useSortBy);
  const { getTableProps } = instance;

  return (
    <table {...getTableProps()} className="w-full">
      <TableHead instance={instance} />
      <TableBody instance={instance} />
    </table>
  );
};
