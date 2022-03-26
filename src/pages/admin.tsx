import { Buttons } from "src/components/separate/Buttons";
import { AdminPageLayout } from "src/layouts/AdminPageLayout";
import { EmployeeList } from "src/components/separate/EmployeeList";

const Admin = () => {
  return (
    <AdminPageLayout>
      <Buttons />
      <EmployeeList />
    </AdminPageLayout>
  );
};

export default Admin;
