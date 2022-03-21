import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import {
  post_user_update,
  get_user_detail,
  delete_user,
} from "src/states/APIs";
import { error, info } from "src/components/shared/Toast";

type StateValues = {
  id: number;
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
};

type StateHandlers = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
};

const initValues = {
  id: 0,
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
};

export const useFormUserUpdate = () => {
  const [FormUserUpdate, setFormUserUpdate] = useState<StateValues>(initValues);
  const router = useRouter();
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
    onClickCancel: () => {
      setFormUserUpdate(initValues);
      Router.back();
    },
    onClickUpdate: () => {
      post_user_update(FormUserUpdate).then((results) => {
        if (results !== undefined) {
          if (results.id !== undefined) {
            setFormUserUpdate(initValues);
            info("変更完了しました。");
            Router.back();
          } else {
            error("サーバエラーです。登録失敗しました。");
            setFormUserUpdate(initValues);
          }
        } else {
          error("サーバエラーです。登録失敗しました。");
          setFormUserUpdate(initValues);
        }
      });
    },
    onClickDelete: () => {
      const del_id = String(FormUserUpdate.id);
      delete_user(del_id);
    },
  };
  return { FormUserUpdate, FormUserUpdateHandler };
};
