import { useRouter } from "next/router";
import { Button } from "src/components/shared/Button";
import { FaPlusCircle } from "react-icons/fa";

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
