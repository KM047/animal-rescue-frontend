import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        setLoader(true);
        // const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (authentication && authStatus !== authentication) {
            navigate("/");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/user");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <Loading /> : <>{children}</>;
}
