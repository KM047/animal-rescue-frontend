import React from "react";
import { RescuedAnimals } from "./../../components/orgComponents/index";
import { Container, TitleSetter } from "../../components/index";

function RescuedAnimal() {
    return (
        <>
            <TitleSetter title={"Rescued Animals"}>
                <Container>
                    <RescuedAnimals />
                </Container>
            </TitleSetter>
        </>
    );
}

export default RescuedAnimal;
