// Library
import { ReactNode } from "react";
import Link from 'next/link'

type Props = {
    children: ReactNode;
};

export const Error = ({ children }: Props) => {

    return (
        <>
            <div className="p-8">
                <h2 className="mb-8 text-lg text-red-700 font-bold">- Error - エラーメッセージは以下の通りです。</h2>
                {children}
                <Link href="/">
                    <a className="block mt-8 text-blue-700">HOMEに戻る</a>
                </Link>
            </div>
        </>
    );
};