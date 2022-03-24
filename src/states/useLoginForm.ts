import { atom, useAtom } from "jotai";
import Router from 'next/router'
import { auth_login } from "src/states/APIs"
import { error } from "src/components/shared/Toast";
import { useDialog } from "src/states/useDialog";

type StateValues = {
    username: string;
    password: string;
};

type StateHandlers = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickLogout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InitState: StateValues = {
    username: "",
    password: "",
};

const LoginFormAtom = atom<StateValues>(InitState);

export const useLoginForm = () => {
    const { handler } = useDialog();
    const [LoginForm, setLoginForm] = useAtom(LoginFormAtom);
    const LoginFormHandler: StateHandlers = {
        onChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;
            setLoginForm({ ...LoginForm, [name]: value });
        },
        onClick: async (event) => {
            event.preventDefault()
            auth_login({ username: LoginForm.username, password: LoginForm.password }).then((results) => {
                if (results !== undefined) {
                    localStorage.setItem("JWT", results.access);
                    results.access && Router.push("/admin")
                    !results.access ? error("ログインに失敗しました。") : console.log("ログイン成功しました。")
                } else {
                    error("ログインに失敗しました。");
                }
            });
        },
        onClickLogout: (event) => {
            event.preventDefault()
            const funcLogout = () => {
                Router.push("/");
                localStorage.removeItem("JWT")
            };
            handler.dialogCreate({
                text: "本当にログオフしますか？",
                func: () => funcLogout(),
            });
        },
    };
    return { LoginForm, LoginFormHandler };
};