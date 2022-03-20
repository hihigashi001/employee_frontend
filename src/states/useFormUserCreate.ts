import Router from "next/router";
import { useState } from "react";
import { post_user_create } from "src/states/APIs";
import { error, info } from "src/components/shared/Toast";

type StateValues = {
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
  onClickNewCreate: () => void;
};

const initValues = {
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

export const useFormUserCreate = () => {
  const [FormUserCreate, setFormUserCreate] = useState<StateValues>(initValues);
  const FormUserCreateHandler: StateHandlers = {
    onChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setFormUserCreate({ ...FormUserCreate, [name]: value });
    },
    onClickCancel: () => {
      setFormUserCreate(initValues);
      Router.back();
    },
    onClickNewCreate: () => {
      post_user_create(FormUserCreate).then((results) => {
        if (results !== undefined) {
          if (results.id !== undefined) {
            setFormUserCreate(initValues);
            info("登録完了しました。");
          } else {
            error("サーバエラーです。登録失敗しました。");
            setFormUserCreate(initValues);
          }
        } else {
          error("サーバエラーです。登録失敗しました。");
          setFormUserCreate(initValues);
        }
      });
    },
  };
  return { FormUserCreate, FormUserCreateHandler };
};
