import React from "react";
import { RescuedAnimals } from "../../components/rescuerComponents/index";
import { TitleSetter } from "../../components/index";

function AddedAnimals() {
    return (
        <>
            <TitleSetter title={"Rescued Animals"}>
                <RescuedAnimals />
            </TitleSetter>
        </>
    );
}

export default AddedAnimals;
