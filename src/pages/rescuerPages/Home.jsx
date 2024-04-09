import React from "react";
import { Home as RescuerHome } from "./../../components/rescuerComponents";
import { TitleSetter } from "../../components";

function Home() {
    return (
        <>
            <TitleSetter title={"Home"}>
                <RescuerHome />
            </TitleSetter>
        </>
    );
}

export default Home;
