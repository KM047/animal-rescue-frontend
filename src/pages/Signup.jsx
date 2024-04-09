import { Signup as SignupComp, TitleSetter } from "../components";

function Signup() {
    return (
        <TitleSetter title={"User Signup"}>
            <div className="py-8">
                <SignupComp />
            </div>
        </TitleSetter>
    );
}

export default Signup;
