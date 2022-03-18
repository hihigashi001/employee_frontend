import { useMemo, useEffect } from "react"
import { atom, useAtom } from "jotai";
import { Column } from "react-table";
import { useQuery } from "react-query";
import { get_user_all } from "src/states/APIs"

type StateValues = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

const EmployeeDataAtom = atom<StateValues[]>([]);

export const useEmployeeData = () => {
    const { isLoading, error, data } = useQuery(
        "get_user_all", () => get_user_all()
    );
    const columns: Column<StateValues>[] = useMemo(
        () => [
            {
                Header: "no",
                accessor: "id",
            },
            {
                Header: "苗字",
                accessor: "lastName",
            },
            {
                Header: "名前",
                accessor: "firstName",
            },
            {
                Header: "メール",
                accessor: "email",
            }
        ],
        []
    );
    const [EmployeeData, setEmployeeData] = useAtom(EmployeeDataAtom);

    useEffect(() => {
        if (data != undefined) {
            setEmployeeData(data);
        }
    }, [data]);

    return { columns, EmployeeData, isLoading, error };
};