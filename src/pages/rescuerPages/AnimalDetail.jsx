import React from "react";
import { RescueAnimal } from "../../components/rescuerComponents/index";
import { TitleSetter } from "../../components/index";

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
