import { AdminPageLayout } from "src/layouts/AdminPageLayout";
import { FormUserCreate } from "src/components/separate/FormUserCreate"

const AdminUserCreate = () => {
  return (
    <AdminPageLayout>
      <FormUserCreate />
    </AdminPageLayout>
  );
};

export default AdminUserCreate;
