import React from "react";

import { Container, TitleSetter } from "../../components";
import { Profile as OrgProfile } from "../../components/orgComponents";

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
