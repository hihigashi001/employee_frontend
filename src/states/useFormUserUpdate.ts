import Router from "next/router";
import { useState } from "react";
import { post_user_update } from "src/states/APIs";
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
  onClicUpdate: () => void;
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
    onClicUpdate: () => {
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
  };
  return { FormUserUpdate, FormUserUpdateHandler };
};
