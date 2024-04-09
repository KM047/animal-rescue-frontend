import React from "react";
import { AddRescuers as AddRescuer } from "./../../components/orgComponents";
import { TitleSetter } from "../../components";

function AddRescuers() {
    return (
        <TitleSetter title={"Add Rescuers"}>
            <AddRescuer />
        </TitleSetter>
    );
}

export default AddRescuers;
