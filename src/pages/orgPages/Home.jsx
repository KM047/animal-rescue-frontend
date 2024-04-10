import React from "react";

import { Home as OrgHome } from "../../components/orgComponents";
import { TitleSetter } from "../../components";

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
