import { TitleSetter } from "../../components/index";
import { LoginForOrg } from "../../components/orgComponents/index";
function Login() {
    return (
        <>
            <div className="py-8">
                <TitleSetter title={"Org Login"}>
                    <LoginForOrg />
                </TitleSetter>
            </div>
        </>
    );
}

export default Login;
