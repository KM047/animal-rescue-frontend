import React from "react";
import { Container, TitleSetter, UserAddQuery } from "../components/index";

function AddQuery() {
    return (
        <>
            <Container>
                <TitleSetter title={"Add Query"}>
                    <UserAddQuery />
                </TitleSetter>
            </Container>
        </>
    );
}

export default AddQuery;
