import React from "react";
import { AnimalDetail as AnimalD, TitleSetter } from "../components/index";

function AnimalDetail() {
    return (
        <>
            <TitleSetter title={"Animal Detail"}>
                <AnimalD />
            </TitleSetter>
        </>
    );
}

export default AnimalDetail;
