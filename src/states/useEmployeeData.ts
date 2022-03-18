import { useMemo } from "react"
import { atom, useAtom } from "jotai";
import { Column } from "react-table";

type StateValues = {
    number: string;
    name: string;
    bikou: string;
};

const InitState: StateValues[] = [{
    number: "1",
    name: "test",
    bikou: "test",
}]

const EmployeeDataAtom = atom<StateValues[]>(InitState);

export const useEmployeeData = () => {
    const columns: Column<StateValues>[] = useMemo(
        () => [
            {
                Header: "番号",
                accessor: "number",
            },
            {
                Header: "名前",
                accessor: "name",
            },
            {
                Header: "備考",
                accessor: "bikou",
            }
        ],
        []
    );
    const [EmployeeData, setEmployeeData] = useAtom(EmployeeDataAtom);
    return { columns, EmployeeData };
};