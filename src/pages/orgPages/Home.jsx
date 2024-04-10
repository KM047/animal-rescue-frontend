import React from "react";

import { Home as OrgHome } from "../../components/orgComponents/index";
import { TitleSetter } from "../../components/index";

function Home() {
    return (
        <>
            <TitleSetter title={"Home"}>
                <OrgHome />
            </TitleSetter>
        </>
    );
}

export default Home;
