import React from "react";
import { TitleSetter, SignPageChoice as UserChoose } from "../components";

function SignPageChoice() {
    return (
        <>
            <TitleSetter title={"Choose User"}>
                <div className="py-8">
                    <UserChoose />
                </div>
            </TitleSetter>
        </>
    );
}

export default SignPageChoice;
