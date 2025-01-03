import React, { useState, Fragment, useRef } from "react";
import {
    getCurrentUser,
    updateUserAvatar,
    updateUserPassword,
} from "./../../api/userApi";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import EditUserDetails from "../EditUserDetails";
import { Link } from "react-router-dom";

function Profile() {
    // const [userData, setUserData] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const cancelButtonForA = useRef(null);

    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    const loggedInUser = useSelector((state) => state.auth.userData);

    // console.log("loggedInUser is", loggedInUser);

    const updateAvatar = async (data) => {
        const formData = new FormData();
        // console.log(data);

        try {
            formData.append("avatar", data?.avatar[0]);

            const response = await updateUserAvatar(formData);

            if (response) {
                // console.log(response);
                alert(response.message);
            }
        } catch (error) {
            // console.log(error.message);
            throw error;
        } finally {
            setOpen(false);
        }
    };

    return (
        <>
            {open && (
                <Transition.Root show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        initialFocus={cancelButtonForA}
                        onClose={setOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <form
                                            onSubmit={handleSubmit(
                                                updateAvatar
                                            )}
                                        >
                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                        <Dialog.Title
                                                            as="h3"
                                                            className="text-base font-semibold leading-6 text-gray-900"
                                                        >
                                                            Change the user
                                                            profile picture
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <Input
                                                                label="Profile Picture: "
                                                                type="file"
                                                                placeholder="Upload your profile picture"
                                                                {...register(
                                                                    "avatar",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex justify-center gap-x-2 sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    // onClick={() =>
                                                    //     setOpen(true)
                                                    // }
                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    ref={cancelButtonForA}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}

            <div className="pt-4">
                <div className="flex justify-between">
                    <img
                        className="object-cover h-36 w-36 rounded-full bg-white sm"
                        src={loggedInUser?.avatar}
                        alt="Avatar"
                    />

                    <div className="flex items-end ">
                        <button
                            className="text-white font-semibold rounded-full border-2 border-[#7148FC] p-2"
                            onClick={() => setOpen(!open)}
                        >
                            Edit Profile
                        </button>
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
                                    {loggedInUser?.fullName}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6">
                                    Username
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser?.username}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser?.email}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    Phone number
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {loggedInUser?.phoneNumber}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-medium leading-6 ">
                                    <Link to={"/user/change-password"}>
                                        <p className="text-blue-600 cursor-pointer">
                                            Change Password
                                        </p>
                                    </Link>
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
