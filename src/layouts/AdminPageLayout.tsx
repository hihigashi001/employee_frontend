import { ReactNode } from "react";
import { SharedDialog } from "src/components/shared/SharedDialog";
import { useDialog } from "src/states/useDialog";
import { MainHeader } from "src/components/shared/MainHeader";

type Props = {
  children?: ReactNode;
};

export const AdminPageLayout = ({ children }: Props) => {
  const { dialogState } = useDialog();
  return (
    <>
      {dialogState.isDialog && <SharedDialog />}
      <MainHeader />
      <div className="w-screen h-screen">{children}</div>
    </>
  );
};
