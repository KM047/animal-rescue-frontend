import React from "react";
import { ChangePassword as ChangePass, TitleSetter } from "../components";

function ChangePassword() {
    return (
        <div>
            <TitleSetter title={"Change Password"}>
                <ChangePass />
            </TitleSetter>
        </div>
    );
}

export default ChangePassword;
