import { TitleSetter } from "../../components";
import { SignupForOrg } from "../../components/orgComponents";

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
