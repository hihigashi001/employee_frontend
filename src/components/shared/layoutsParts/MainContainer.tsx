import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return <div className="px-8 py-8">{children}</div>;
};
