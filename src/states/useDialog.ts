import { atom, useAtom } from "jotai";
type StateDialog = {
  isDialog: boolean;
  message: string;
  function: any;
};
type CreateDialog = {
  text: string;
  func: () => void;
};
const InitState: StateDialog = {
  isDialog: false,
  message: "",
  function: {},
};
const dialogAtom = atom<StateDialog>(InitState);
export const useDialog = () => {
  const [dialogState, setDialogState] = useAtom(dialogAtom);
  const handler = {
    dialogCreate: ({ text, func }: CreateDialog) => {
      setDialogState({
        isDialog: !dialogState.isDialog,
        message: text,
        function: func,
      });
    },
    onSubmit: () => {
      dialogState.function();
      setDialogState(InitState);
    },
    onCancel: () => {
      setDialogState(InitState);
    },
  };
  return { dialogState, handler };
};