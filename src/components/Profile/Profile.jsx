import React, { useState } from "react";
import { getCurrentUser } from "./../../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "./../Container/Container";
import SampleBtn from "../SampleBtn";

function Profile() {
    const [userData, setUserData] = useState(null);

    const loggedInUser = useSelector((state) => state.auth.userData);

    // console.log("loggedInUser is", loggedInUser);

    return (
        <>
            <div className="pt-4">
                <div className="flex justify-between">
                    <img
                        className="inline-block h-36 w-36 rounded-full bg-white sm"
                        src={loggedInUser.avatar}
                        alt="Avatar"
                    />

                    <div className="flex items-end">
                        <button className="text-white ">Edit Profile</button>
                    </div>
                </div>
                <div className="flex items-center space-x-2 p-10 flex-wrap">
                    <div className="mt-6 text-white">
                        <dl className="">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    {loggedInUser.fullName}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6">
                                    Username
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser.username}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser.email}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    Phone number
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser.phoneNumber}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    <Link to={""}>Change Password</Link>
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0"></dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
