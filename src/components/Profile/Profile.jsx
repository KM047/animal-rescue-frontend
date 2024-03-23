import React, { useState } from "react";
import { getCurrentUser } from "./../../api/userApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
    const [userData, setUserData] = useState(null);

    const loggedInUser = useSelector((state) => state.auth.userData);

    console.log("loggedInUser is", loggedInUser);

    return (
        <>
            <div className="text-white flex justify-center">Profile</div>

            <div className="">
                <h1 className="text-white">User Name</h1>
                <h1 className="text-white">{loggedInUser.fullName}</h1>
            </div>
        </>
    );
}

export default Profile;
