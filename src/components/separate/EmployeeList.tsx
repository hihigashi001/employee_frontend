// jotai
import { useEmployeeData } from "src/states/useEmployeeData"
// components
import { Table } from "src/components/shared/Table"
import { Error } from "src/components/shared/Error"
import { Loading } from "src/components/shared/Loading"

export const EmployeeList = () => {
    const { columns, EmployeeData, isLoading, error } = useEmployeeData()

    if (isLoading) return <Loading />;
    if (error) return <Error>{JSON.stringify(error)}</Error>;

    return (
        <div>
            <Table columns={columns} data={EmployeeData} />
        </div>
    );
}
