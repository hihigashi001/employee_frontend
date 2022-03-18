import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const AdminPageLayout = ({ children }: Props) => {
  return (
    <>
      <div className="w-screen h-screen">{children}</div>
    </>
  );
};