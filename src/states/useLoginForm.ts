import { atom, useAtom } from "jotai";
import { useRouter } from 'next/router'

type StateValues = {
    loginId: string;
    password: string;
};

type StateHandlers = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InitState: StateValues = {
    loginId: "",
    password: "",
};

const LoginFormAtom = atom<StateValues>(InitState);

export const useLoginForm = () => {
    const router = useRouter()
    const [LoginForm, setLoginForm] = useAtom(LoginFormAtom);
    const LoginFormHandler: StateHandlers = {
        onChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;
            setLoginForm({ ...LoginForm, [name]: value });
        },
        onClick: (event) => {
            event.preventDefault()
            router.push("/admin")
        }
    };
    return { LoginForm, LoginFormHandler };
};