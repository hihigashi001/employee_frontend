import cc from "classcat";

type Props = {
  id?: string;
  className?: string;
  type: "text" | "email" | "tel" | "password" | "date";
  name: string;
  value?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  id,
  className,
  type,
  name,
  value,
  autoComplete,
  autoFocus,
  placeholder,
  onChange,
  error = "",
  disabled = false,
  onBlur,
}: Props) => {
  const classNames = cc([
    className,
    "block appearance-none w-full border border-grey-light hover:border-primary px-2 py-2 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 focus:bg-hover disabled:bg-gray-200 disabled:cursor-not-allowed",
  ]);
  return (
    <>
      {onBlur ? (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={classNames}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={classNames}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      <span className="text-red-400">{error}</span>
    </>
  );
};