import { UserSignup, TitleSetter } from "../components/index";

function Signup() {
    return (
        <>
            <TitleSetter title={"User Signup"}>
                <div className="py-8">
                    <UserSignup />
                </div>
            </TitleSetter>
        </>
    );
}

export default Signup;
