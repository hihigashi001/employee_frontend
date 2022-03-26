// Library
import { ReactElement, useState } from "react";
import { TableInstance, useAsyncDebounce } from "react-table";
// components
import { Search } from "src/components/shared/Table/Search";

type GlobalFilterProps<T extends object> = {
  instance: TableInstance<T>;
};

type GlobalFilterComponent = <T extends object>(props: GlobalFilterProps<T>) => ReactElement<GlobalFilterProps<T>>;

export const GlobalFilter: GlobalFilterComponent = ({ instance }) => {
  const { globalFilter, setGlobalFilter } = instance;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Search
      className="block"
      value={value || ""}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};
