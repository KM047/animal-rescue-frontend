import React from "react";

import { Container, TitleSetter } from "../../components";
import { Profile as RescuerProfile } from "../../components/rescuerComponents";

function Profile() {
    return (
        <>
            <TitleSetter title={"Profile"}>
                <Container>
                    <RescuerProfile />
                </Container>
            </TitleSetter>
        </>
    );
}

export default Profile;
