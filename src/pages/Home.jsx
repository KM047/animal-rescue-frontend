import React from "react";
import { Home as HeroPage } from "./../components";
import { TitleSetter } from "./../components";

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
