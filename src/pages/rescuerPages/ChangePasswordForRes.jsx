import React from "react";
import { ChangePassword } from "../../components/rescuerComponents/index";
import { TitleSetter } from "../../components/index";

function ChangePasswordForRes() {
    return (
        <>
            <TitleSetter title={"Change password"}>
                <ChangePassword />
            </TitleSetter>
        </>
    );
}

export default ChangePasswordForRes;
