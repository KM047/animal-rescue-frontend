import React from "react";
import { ChangePassword as ChangePass, TitleSetter } from "../components/index";

export function ChangePassword() {
    return (
        <>
            <TitleSetter title={"Change Password"}>
                <ChangePass />
            </TitleSetter>
        </>
    );
}
