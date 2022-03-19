import { AdminPageLayout } from "src/layouts/AdminPageLayout";
import { EmployeeList } from "src/components/separate/EmployeeList";

const Admin = () => {
  return (
    <AdminPageLayout>
      <h2>社員一覧</h2>
      <EmployeeList />
    </AdminPageLayout>
  );
};

export default Admin;
