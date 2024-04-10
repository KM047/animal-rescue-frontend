import { TitleSetter } from "../../components";
import { LoginForOrg } from "../../components/orgComponents";
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
