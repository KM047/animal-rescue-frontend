import React from "react";
import { Home as HeroPage, TitleSetter } from "../components/index";

function Home() {
    return (
        <>
            <TitleSetter title={"Home"}>
                <HeroPage />
            </TitleSetter>
        </>
    );
}

export default Home;
