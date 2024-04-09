import React from "react";
import { RescueAnimal } from "../../components/rescuerComponents";
import { TitleSetter } from "../../components";

function AnimalDetail() {
    return (
        <>
            <TitleSetter title={"Rescue Animal"}>
                <RescueAnimal />
            </TitleSetter>
        </>
    );
}

export default AnimalDetail;
