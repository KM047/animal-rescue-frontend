import React from "react";
import { RescuedAnimals } from "../../components/rescuerComponents";
import { TitleSetter } from "../../components";

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
