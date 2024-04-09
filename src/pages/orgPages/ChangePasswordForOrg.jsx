import React from "react";
import { ChangePassword } from "./../../components/orgComponents";
import { TitleSetter } from "../../components";

function ChangePasswordForOrg() {
    return (
        <TitleSetter title={"Change Password"}>
            <ChangePassword />
        </TitleSetter>
    );
}

export default ChangePasswordForOrg;
