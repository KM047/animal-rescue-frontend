import { TitleSetter } from "../../components";
import { LoginForRes } from "../../components/rescuerComponents";
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
