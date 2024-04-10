import React from "react";

import { Container, TitleSetter } from "../../components/index";
import { Profile as RescuerProfile } from "../../components/rescuerComponents/index";

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
