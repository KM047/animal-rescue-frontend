import React from "react";

import { Container, TitleSetter, Profile as UserProfile } from "../components/index";

function Profile() {
    return (
        <>
            <TitleSetter title={"Profile"}>
                <Container>
                    <UserProfile />
                </Container>
            </TitleSetter>
        </>
    );
}

export default Profile;
