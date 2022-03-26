// Library
import cc from "classcat";

type Props = {
  className?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: any;
  error?: string | undefined;
  value: string;
};

export const Select = ({ className, name, onChange, error = "", options, value }: Props) => {
  const classNames = cc([
    className,
    "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-primary  hover:bg-hover",
  ]);

  return (
    <>
      <select name={name} onChange={onChange} className={classNames} value={value}>
        {options &&
          options.map((opt: any, key: number) =>
            typeof opt === "string" ? (
              <option key={key} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={key} value={opt.name}>
                {opt.name}
              </option>
            )
          )}
      </select>
      <span className="text-red-400">{error}</span>
    </>
  );
};
