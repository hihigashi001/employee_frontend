import { Login } from "src/components/separate/Login";
import { LoginPageLayout } from "src/layouts/LoginPageLayout";

const Home = () => {
  return (
    <LoginPageLayout>
      <Login />
    </LoginPageLayout>
  );
};

export default Home;