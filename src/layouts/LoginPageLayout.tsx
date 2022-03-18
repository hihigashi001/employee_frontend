import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const LoginPageLayout = ({ children }: Props) => {
  return (
    <>
      <div className="w-screen h-screen">{children}</div>
    </>
  );
};