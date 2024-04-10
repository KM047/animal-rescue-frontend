import { Login as LoginComp, TitleSetter } from "../components/index";
function Login() {
    return (
        <>
            <TitleSetter title={"User Login"}>
                <div className="py-8">
                    <LoginComp />
                </div>
            </TitleSetter>
        </>
    );
}

export default Login;
