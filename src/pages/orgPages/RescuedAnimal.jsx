import React from "react";
import { RescuedAnimals } from "./../../components/orgComponents";
import { Container, TitleSetter } from "../../components";

function RescuedAnimal() {
    return (
        <TitleSetter title={"Rescued Animals"}>
            <Container>
                <RescuedAnimals />
            </Container>
        </TitleSetter>
    );
}

export default RescuedAnimal;
