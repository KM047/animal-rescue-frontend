import React from "react";
import { useSelector } from "react-redux";

function Dashboard({ user }) {
    console.log({ user });
    const data = user.data;
    return (
        <>
            <div>Dashboard</div>
            <h1>{data.fullName}</h1>
        </>
    );
}

export default Dashboard;
