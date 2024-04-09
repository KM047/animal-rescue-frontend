import React from "react";
import { ChangePassword } from "../../components/rescuerComponents";
import { TitleSetter } from "../../components";

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
