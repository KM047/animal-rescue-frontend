import { TitleSetter } from "../../components/index";
import { SignupForOrg } from "../../components/orgComponents/index";

function Signup() {
    return (
        <>
            <TitleSetter title={"Org Signup"}>
                <div className="py-8">
                    <SignupForOrg />
                </div>
            </TitleSetter>
        </>
    );
}

export default Signup;
