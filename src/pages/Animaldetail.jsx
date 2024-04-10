import React from "react";
import { AnimalDetail as AnimalD, TitleSetter } from "../components/index";

export function AnimalDetail() {
    return (
        <>
            <TitleSetter title={"Animal Detail"}>
                <AnimalD />
            </TitleSetter>
        </>
    );
}
