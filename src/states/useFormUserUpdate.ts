// Library
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from 'react-query'
// Jotai
import {
  post_user_update,
  get_user_detail,
  delete_user,
} from "src/states/APIs";
import { useDialog } from 'src/states/useDialog'
// components
import { error, info } from "src/components/shared/Toast";
// functions
import { NullValidator } from "src/utilitys/functions"

type StateValues = {
  id: number;
  employeeId_error: string;
  employeeId: string;
  department1: string;
  department2: string;
  employeeClass: string;
  name: string;
  name_kana: string;
  mailAddress: string;
  position: string;
  joiningDate: string;
  retirementDate: string;
  suspensionDate: string;
  secondedDate: string;
  secondedDestination: string;
  maidenName: string;
  remarks: string;
  status: string;
};

type StateHandlers = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickCancel: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
};

const initValues = {
  id: 0,
  employeeId_error: "",
  employeeId: "",
  department1: "",
  department2: "",
  employeeClass: "",
  name: "",
  name_kana: "",
  mailAddress: "",
  position: "",
  joiningDate: "",
  retirementDate: "",
  suspensionDate: "",
  secondedDate: "",
  secondedDestination: "",
  maidenName: "",
  remarks: "",
  status: "在職",
};

export const useFormUserUpdate = () => {
  const router = useRouter()
  const { handler } = useDialog();
  const queryClient = useQueryClient()
  const [FormUserUpdate, setFormUserUpdate] = useState<StateValues>(initValues);
  const id = router.asPath.slice(8);
  useEffect(() => {
    if (id !== "[id]") {
      get_user_detail(id).then((data) => {
        setFormUserUpdate(data);
      });
    }
  }, [id]);
  const FormUserUpdateHandler: StateHandlers = {
    onChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setFormUserUpdate({ ...FormUserUpdate, [name]: value });
    },
    onSelectChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setFormUserUpdate({ ...FormUserUpdate, [name]: value });
    },
    onClickCancel: () => {
      setFormUserUpdate(initValues);
      router.back();
    },
    onClickUpdate: () => {
      const employeeId_errorMessage = NullValidator(FormUserUpdate.employeeId)
        ? "※"
        : "";
      setFormUserUpdate({ ...FormUserUpdate, employeeId_error: employeeId_errorMessage });
      if (employeeId_errorMessage == "") {
        post_user_update(FormUserUpdate).then((results) => {
          if (results !== undefined) {
            if (results.id !== undefined) {
              setFormUserUpdate(initValues);
              info("変更完了しました。");
              queryClient.invalidateQueries('get_user_all')
              router.back();
            } else {
              error("サーバエラーです。登録失敗しました。");
              setFormUserUpdate(initValues);
            }
          } else {
            error("サーバエラーです。登録失敗しました。");
            setFormUserUpdate(initValues);
          }
        });
      } else {
        error("※必須事項を入力してください。");
      }
    },
    onClickDelete: () => {
      const funcDeleteUser = () => {
        const del_id = String(FormUserUpdate.id);
        delete_user(del_id).then(() => {
          queryClient.invalidateQueries('get_user_all')
        })
        router.back();
      }
      handler.dialogCreate({
        text: "本当に削除しますか？",
        func: () => funcDeleteUser(),
      });
    },
  };
  return { FormUserUpdate, FormUserUpdateHandler };
};
