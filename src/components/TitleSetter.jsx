import React, { useEffect } from "react";

function TitleSetter({ title, children }) {
    useEffect(() => {
        document.title = title;
    }, [title]); // Update title when the title prop changes

    return <div>{children}</div>;
}

export default TitleSetter;
