// Library
import cc from "classcat";

type Props = {
  label: string;
  statusKey: string;
  selectedStatus: string;
  handleClick: () => void;
};

export const FilterButton = ({ label, statusKey, selectedStatus, handleClick }: Props) => {
  const ButtonStyle = cc([
    "px-2 py-px rounded-xl mx-1 focus:outline-none flex-nowrap hover:bg-gray-700 hover:text-gray-100 font-thin",
    statusKey === selectedStatus ? "bg-gray-500 text-gray-100" : "",
  ]);
  return (
    <button className={ButtonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};
