// Library
import cc from "classcat";
// icon
import { FaSearch } from "react-icons/fa";

type Props = {
  className?: string;
  value?: string;
  onChange?: any;
};

export const Search = ({ className, value, onChange }: Props) => {
  const classNames = cc([className, "pl-1 pr-8 mb-2 inline-flex items-center justify-center rounded"]);
  return (
    <div className={classNames}>
      <div className="p-1">
        <div className="bg-white flex items-center rounded-full border">
          <input
            className="rounded-l-full w-full py-2 px-4 leading-tight focus:outline-none"
            type="text"
            placeholder="検索する"
            value={value}
            onChange={onChange}
          />
          <div className="p-1">
            <button className="p-2 focus:outline-none w-8 h-8 flex items-center justify-center">
              <FaSearch color="#8F8F8F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
