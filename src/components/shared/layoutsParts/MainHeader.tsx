// Library
import { useState } from "react";
// icon
import { FaSignOutAlt } from "react-icons/fa";
// jotai
import { useLoginForm } from "src/states/useLoginForm";

export const MainHeader = () => {
  const { LoginFormHandler } = useLoginForm();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="w-full h-full bg-tertiary py-2 px-6 flex justify-between border-b border-gray-300">
      <div className="text-2xl font-sans text-gray-700 p-2">社員管理システム</div>
      <div className="relative text-right" onClick={() => setIsMenu(!isMenu)}>
        <button className="focus:outline-none text-right">
          <FaSignOutAlt size={50} color={"gray"} />
        </button>
        {isMenu ? (
          <div className="bg-gray-200 shadow-lg absolute mt-12 top-0 right-0 w-52 overflow-auto z-30 text-left">
            <ul>
              <li>
                <p className="px-4 py-2 text-gray-500">管理者</p>
              </li>
              <li>
                <hr className="border-t mx-2 border-gray-300" />
              </li>
              <li>
                <button
                  className="px-4 py-2 w-full text-left hover:bg-tertiary hover:text-primary"
                  onClick={LoginFormHandler.onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};
