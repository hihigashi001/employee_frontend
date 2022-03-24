import { atom, useAtom } from "jotai";
import { useRouter } from 'next/router'
import { auth_login } from "src/states/APIs"
import { error } from "src/components/shared/Toast";
import { useDialog } from "src/states/useDialog";
import { NullValidator } from "src/utilitys/functions"

type StateValues = {
    username: string;
    password: string;
    username_error: string;
    password_error: string;
};

type StateHandlers = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickLogout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InitState: StateValues = {
    username: "",
    password: "",
    username_error: "",
    password_error: "",
};

const LoginFormAtom = atom<StateValues>(InitState);

export const useLoginForm = () => {
    const router = useRouter()
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
            const usernameErrorMessage = NullValidator(LoginForm.username)
                ? "※入力必須"
                : "";
            const passwordErrorMessage = NullValidator(LoginForm.password)
                ? "※入力必須"
                : "";
            setLoginForm({ ...LoginForm, username_error: usernameErrorMessage, password_error: passwordErrorMessage });
            if (usernameErrorMessage == "" && passwordErrorMessage == "") {
                auth_login({ username: LoginForm.username, password: LoginForm.password }).then((results) => {
                    if (results !== undefined) {
                        localStorage.setItem("JWT", results.access);
                        results.access && router.push("/admin")
                        !results.access ? error("ログインに失敗しました。") : console.log("ログイン成功しました。")
                    } else {
                        error("ログインに失敗しました。");
                    }
                });
            }
        },
        onClickLogout: (event) => {
            event.preventDefault()
            const funcLogout = () => {
                router.push("/");
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