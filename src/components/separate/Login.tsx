import { Button } from "src/components/shared/Button"
import { SharedInput } from "src/components/shared/Input"
import { useLoginForm } from "src/states/useLoginForm"

export const Login = () => {
    const { LoginForm, LoginFormHandler } = useLoginForm()
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-700">Emplyee Management System</h2>
                <div className="space-y-8">
                    <SharedInput
                        name="loginId"
                        type="text"
                        placeholder="employee id"
                        value={LoginForm.loginId}
                        onChange={(e) => LoginFormHandler.onChange(e)}
                    />
                    <SharedInput
                        name="password"
                        type="password"
                        placeholder="password"
                        value={LoginForm.password}
                        onChange={(e) => LoginFormHandler.onChange(e)}
                    />
                    <Button onClick={LoginFormHandler.onClick}>
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    );
}