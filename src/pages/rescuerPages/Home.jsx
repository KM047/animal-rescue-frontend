import React from "react";
import { Home as RescuerHome } from "./../../components/rescuerComponents/index";
import { TitleSetter } from "../../components/index";

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
