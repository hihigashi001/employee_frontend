// Library
import { ReactNode, DOMAttributes } from "react";
import cc from "classcat";

type Props = {
    className?: string;
    children?: ReactNode;
    onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
    variant?: string;
    disabled?: boolean;
};

export const Button = ({ className, children, onClick, variant = "simple", disabled = false }: Props) => {
    const classNames = cc([
        className,
        {
            "w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500":
                variant === "simple",
            "w-full flex justify-center py-2 px-4 border border-gray-300 text-sm text-gray-700 font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500":
                variant === "white",
                "w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500":
                variant === "red",
        },
    ]);
    return (
        <>
            <button className={classNames} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </>
    );
};