// Library
import { useRouter } from "next/router";
// icon
import { FaPlusCircle } from "react-icons/fa";
// components
import { Button } from "src/components/shared/Button";

export const Buttons = () => {
  const router = useRouter()
  const onClickNewCreate = () => {
    router.push("/admin-user-create");
  };
  return (
    <div className="w-full flex gap-x-4 py-2">
      <Button className="w-4/12" onClick={onClickNewCreate}>
        <FaPlusCircle size={20} />
        　新規作成
      </Button>
    </div>
  );
};
