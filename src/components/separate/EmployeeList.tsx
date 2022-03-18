import { Table } from "src/components/shared/Table"
import { useEmployeeData } from "src/states/useEmployeeData"
import { Loading } from "src/components/shared/Loading"
import { Error } from "src/components/shared/Error"

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
