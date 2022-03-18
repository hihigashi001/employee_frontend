import { AdminPageLayout } from "src/layouts/AdminPageLayout";
import { EmployeeList } from "src/components/separate/EmployeeList";

const Admin = () => {
  return (
    <AdminPageLayout>
      <EmployeeList />
    </AdminPageLayout>
  );
};

export default Admin;
