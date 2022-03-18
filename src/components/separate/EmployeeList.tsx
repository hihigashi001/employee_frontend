import { Table } from "src/components/shared/Table"
import { useEmployeeData } from "src/states/useEmployeeData"

export const EmployeeList = () => {
    const {columns, EmployeeData} = useEmployeeData()

    return (
        <div>
            <Table columns={columns} data={EmployeeData} />
        </div>
    );
}
