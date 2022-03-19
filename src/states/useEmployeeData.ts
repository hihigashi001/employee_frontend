import { useMemo, useEffect } from "react"
import { atom, useAtom } from "jotai";
import { Column } from "react-table";
import { useQuery } from "react-query";
import { get_user_all } from "src/states/APIs"

type StateValues = {
    no: number,
    employeeId: string,
    department1: string,
    department2: string,
    employeeClass: string,
    name: string,
    name_kana: string,
    mailAddress: string,
    position: string,
    joiningDate: string,
    retirementDate: string,
    suspensionDate: string,
    secondedDate: string,
    secondedDestination: string,
    maidenName: string,
    remarks: string,
};

const EmployeeDataAtom = atom<StateValues[]>([]);

export const useEmployeeData = () => {
    const { isLoading, error, data } = useQuery(
        "get_user_all", () => get_user_all()
    );
    const columns: Column<StateValues>[] = useMemo(
        () => [
            {
                Header: "No",
                accessor: "no",
            },
            {
                Header: "社員ID",
                accessor: "employeeId",
            },
            {
                Header: "所属1",
                accessor: "department1",
            },
            {
                Header: "所属2",
                accessor: "department2",
            },
            {
                Header: "社員区分",
                accessor: "employeeClass",
            },
            {
                Header: "氏名",
                accessor: "name",
            },
            {
                Header: "氏名カナ",
                accessor: "name_kana",
            },
            {
                Header: "メールアドレス",
                accessor: "mailAddress",
            },
            {
                Header: "役職",
                accessor: "position",
            },
            {
                Header: "入社日",
                accessor: "joiningDate",
            },
            {
                Header: "退職日",
                accessor: "retirementDate",
            },
            {
                Header: "休職開始日",
                accessor: "suspensionDate",
            },
            {
                Header: "出向日",
                accessor: "secondedDate",
            },
            {
                Header: "出向先",
                accessor: "secondedDestination",
            },
            {
                Header: "旧姓",
                accessor: "maidenName",
            },
            {
                Header: "備考",
                accessor: "remarks",
            },
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