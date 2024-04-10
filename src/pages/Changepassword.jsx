import React from "react";
import { ChangePassword as ChangePass, TitleSetter } from "../components";

function ChangePassword() {
    return (
        <>
            <TitleSetter title={"Change Password"}>
                <ChangePass />
            </TitleSetter>
        </>
    );
}

export default ChangePassword;
