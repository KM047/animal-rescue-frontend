import React from "react";
import { MyQuery as MyQ, TitleSetter } from "../components/index";

function MyQuery() {
    return (
        <>
            <TitleSetter title={"User Query"}>
                <MyQ />
            </TitleSetter>
        </>
    );
}

export default MyQuery;
