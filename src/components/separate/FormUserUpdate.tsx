// componets
import { Button } from "src/components/shared/Button";
import { Input } from "src/components/shared/Input";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { useFormUserUpdate } from "src/states/useFormUserUpdate";
import Router from "next/router";

export const FormUserUpdate = () => {
  const { FormUserUpdate, FormUserUpdateHandler } = useFormUserUpdate();
  const onCancelFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    FormUserUpdateHandler.onClickCancel();
  };
  const onSubmitFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    FormUserUpdateHandler.onClickUpdate();
  };
  const funcDel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    FormUserUpdateHandler.onClickDelete();
    Router.push("/admin");
  };

  return (
    <div>
      <form className="max-w-7xl m-auto" autoComplete="off">
        <div className="flex justify-between w-full gap-x-4 py-2">
          <div>No. {FormUserUpdate.id}</div>
          <Button variant="red" className="w-3/12" onClick={funcDel}>
            <FaTrash size={20} />
            　削除する
          </Button>
        </div>
        <div className="w-full bg-white p-4 rounded-md border border-gray-300">
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">社員ID</div>
            <Input
              type="text"
              className="w-8/12"
              name="employeeId"
              value={FormUserUpdate.employeeId}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">所属1</div>
            <Input
              type="text"
              className="w-8/12"
              name="department1"
              value={FormUserUpdate.department1}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">所属2</div>
            <Input
              type="text"
              className="w-8/12"
              name="department2"
              value={FormUserUpdate.department2}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">社員区分</div>
            <Input
              type="text"
              className="w-8/12"
              name="employeeClass"
              value={FormUserUpdate.employeeClass}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">氏名</div>
            <Input
              type="text"
              className="w-8/12"
              name="name"
              value={FormUserUpdate.name}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">氏名カナ</div>
            <Input
              type="text"
              className="w-8/12"
              name="name_kana"
              value={FormUserUpdate.name_kana}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">メールアドレス</div>
            <Input
              type="text"
              className="w-8/12"
              name="mailAddress"
              value={FormUserUpdate.mailAddress}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">役職</div>
            <Input
              type="text"
              className="w-8/12"
              name="position"
              value={FormUserUpdate.position}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">入社日</div>
            <Input
              type="text"
              className="w-8/12"
              name="joiningDate"
              value={FormUserUpdate.joiningDate}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">退職日</div>
            <Input
              type="text"
              className="w-8/12"
              name="retirementDate"
              value={FormUserUpdate.retirementDate}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">休職開始日</div>
            <Input
              type="text"
              className="w-8/12"
              name="suspensionDate"
              value={FormUserUpdate.suspensionDate}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">出向日</div>
            <Input
              type="text"
              className="w-8/12"
              name="secondedDate"
              value={FormUserUpdate.secondedDate}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">出向先</div>
            <Input
              type="text"
              className="w-8/12"
              name="secondedDestination"
              value={FormUserUpdate.secondedDestination}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">旧姓</div>
            <Input
              type="text"
              className="w-8/12"
              name="maidenName"
              value={FormUserUpdate.maidenName}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">備考</div>
            <Input
              type="text"
              className="w-8/12"
              name="remarks"
              value={FormUserUpdate.remarks}
              onChange={(e) => FormUserUpdateHandler.onChange(e)}
            />
          </div>
        </div>
        <div className="flex justify-end w-full gap-x-4 py-2">
          <Button className="w-3/12" variant="white" onClick={onCancelFunction}>
            キャンセル
          </Button>
          <Button className="w-3/12" onClick={onSubmitFunction}>
            <FaPlusCircle size={20} />
            　変更する
          </Button>
        </div>
      </form>
    </div>
  );
};
