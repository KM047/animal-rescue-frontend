import React from "react";
import { ChangePassword } from "./../../components/orgComponents/index";
import { TitleSetter } from "../../components/index";

function ChangePasswordForOrg() {
    return (
        <>
            <TitleSetter title={"Change Password"}>
                <ChangePassword />
            </TitleSetter>
        </>
    );
}

export default ChangePasswordForOrg;
