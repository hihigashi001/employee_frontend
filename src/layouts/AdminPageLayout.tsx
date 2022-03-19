import { ReactNode } from "react";
import { SharedDialog } from "src/components/shared/SharedDialog";
import { useDialog } from "src/states/useDialog";
import { MainHeader } from "src/components/shared/layoutsParts/MainHeader";
import { MainContainer } from "src/components/shared/layoutsParts/MainContainer";

type Props = {
  children?: ReactNode;
};

export const AdminPageLayout = ({ children }: Props) => {
  const { dialogState } = useDialog();
  return (
    <>
      {dialogState.isDialog && <SharedDialog />}
      <MainHeader />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
