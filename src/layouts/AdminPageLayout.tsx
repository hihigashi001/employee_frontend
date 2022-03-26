// Library
import { ReactNode } from "react";
// jotai
import { useDialog } from "src/states/useDialog";
import { useLoginCheak } from "src/states/useLoginCheak"
// components
import { SharedDialog } from "src/components/shared/SharedDialog";
import { MainHeader } from "src/components/shared/layoutsParts/MainHeader";
import { MainContainer } from "src/components/shared/layoutsParts/MainContainer";

type Props = {
  children: ReactNode;
};

export const AdminPageLayout = ({ children }: Props) => {
  const { dialogState } = useDialog();
  useLoginCheak()
  return (
    <>
      {dialogState.isDialog && <SharedDialog />}
      <MainHeader />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
