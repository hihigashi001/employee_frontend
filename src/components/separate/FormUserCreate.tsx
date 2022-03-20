// componets
import { Button } from "src/components/shared/Button";
import { Input } from "src/components/shared/Input";
import { FaPlusCircle } from "react-icons/fa";
import { useFormUserCreate } from "src/states/useFormUserCreate";

export const FormUserCreate = () => {
  const { FormUserCreate, FormUserCreateHandler } = useFormUserCreate();
  const onCancelFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    FormUserCreateHandler.onClickCancel();
  };
  const onSubmitFunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    FormUserCreateHandler.onClickNewCreate();
  };

  return (
    <div>
      <form className="max-w-7xl m-auto" autoComplete="off">
        <div className="w-full bg-white p-4 rounded-md border border-gray-300">
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">社員ID</div>
            <Input
              type="text"
              className="w-8/12"
              name="employeeId"
              value={FormUserCreate.employeeId}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">所属1</div>
            <Input
              type="text"
              className="w-8/12"
              name="department1"
              value={FormUserCreate.department1}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">所属2</div>
            <Input
              type="text"
              className="w-8/12"
              name="department2"
              value={FormUserCreate.department2}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">社員区分</div>
            <Input
              type="text"
              className="w-8/12"
              name="employeeClass"
              value={FormUserCreate.employeeClass}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">氏名</div>
            <Input
              type="text"
              className="w-8/12"
              name="name"
              value={FormUserCreate.name}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">氏名カナ</div>
            <Input
              type="text"
              className="w-8/12"
              name="name_kana"
              value={FormUserCreate.name_kana}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">メールアドレス</div>
            <Input
              type="text"
              className="w-8/12"
              name="mailAddress"
              value={FormUserCreate.mailAddress}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">役職</div>
            <Input
              type="text"
              className="w-8/12"
              name="position"
              value={FormUserCreate.position}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">入社日</div>
            <Input
              type="text"
              className="w-8/12"
              name="joiningDate"
              value={FormUserCreate.joiningDate}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">退職日</div>
            <Input
              type="text"
              className="w-8/12"
              name="retirementDate"
              value={FormUserCreate.retirementDate}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">休職開始日</div>
            <Input
              type="text"
              className="w-8/12"
              name="suspensionDate"
              value={FormUserCreate.suspensionDate}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">出向日</div>
            <Input
              type="text"
              className="w-8/12"
              name="secondedDate"
              value={FormUserCreate.secondedDate}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">出向先</div>
            <Input
              type="text"
              className="w-8/12"
              name="secondedDestination"
              value={FormUserCreate.secondedDestination}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">旧姓</div>
            <Input
              type="text"
              className="w-8/12"
              name="maidenName"
              value={FormUserCreate.maidenName}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
          <div className="flex my-4">
            <div className="w-4/12 text-gray-700 p-2">備考</div>
            <Input
              type="text"
              className="w-8/12"
              name="remarks"
              value={FormUserCreate.remarks}
              onChange={(e) => FormUserCreateHandler.onChange(e)}
            />
          </div>
        </div>
        <div className="flex justify-end w-full gap-x-4 py-2">
          <Button className="w-3/12" variant="white" onClick={onCancelFunction}>
            キャンセル
          </Button>
          <Button className="w-3/12" onClick={onSubmitFunction}>
            <FaPlusCircle color="" />
            　追加する
          </Button>
        </div>
      </form>
    </div>
  );
};
