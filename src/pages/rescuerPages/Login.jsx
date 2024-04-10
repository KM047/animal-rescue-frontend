import { TitleSetter } from "../../components/index";
import { LoginForRes } from "../../components/rescuerComponents/index";
function Login() {
    return (
        <>
            <TitleSetter title={"Rescuer Login"}>
                <div className="py-8">
                    <LoginForRes />
                </div>
            </TitleSetter>
        </>
    );
}

export default Login;
