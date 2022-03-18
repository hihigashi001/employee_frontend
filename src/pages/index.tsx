import { LoginPageLayout } from "src/layouts/LoginPageLayout";
import { Login } from "src/components/separate/Login";

const Home = () => {
  return (
    <LoginPageLayout>
      <Login />
    </LoginPageLayout>
  );
};

export default Home;