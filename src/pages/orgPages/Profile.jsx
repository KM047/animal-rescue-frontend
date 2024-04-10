import React from "react";

import { Container, TitleSetter } from "../../components/index";
import { Profile as OrgProfile } from "../../components/orgComponents/index";

function Profile() {
    return (
        <>
            <TitleSetter title={"Profile"}>
                <Container>
                    <OrgProfile />
                </Container>
            </TitleSetter>
        </>
    );
}

export default Profile;
