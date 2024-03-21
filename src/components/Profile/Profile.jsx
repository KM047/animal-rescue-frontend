import React, { useState } from "react";
import { getCurrentUser } from "./../../api/userApi";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const handleClike = async () => {
        try {
            const data = await getCurrentUser();

            console.log({ data });

            setUserData(data);

            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="text-white flex justify-center">Profile</div>

            <div className="">
                <h1 className="text-white">{userData?.data.fullName}</h1>
            </div>

            <button
                className="border-cyan-500 text-stone-200 text-xl bg-red-700"
                onClick={handleClike}
            >
                Get user
            </button>
        </>
    );
}

export default Profile;
