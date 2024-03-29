import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";

import Input from "./Input";
import { updateUserPassword } from "../api/userApi";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const cancelButtonRefP = useRef(null);

    const navigate = useNavigate();

    const [open, setOpen] = useState(true);

    const [error, setError] = useState("");

    const updatePassword = async (passData) => {
        const { oldPassword, newPassword, confirmPassword } = passData;

        console.log(passData);

        console.log("this is a new password");
        const formData = new FormData();

        try {
            if (newPassword !== confirmPassword) {
                setError("*Passwords do not match");
                return;
            } else if (!oldPassword || !newPassword || !confirmPassword) {
                setError("All fields must require");
            } else {
                formData.append("oldPassword", oldPassword);
                formData.append("newPassword", newPassword);

                const response = await updateUserPassword(formData);

                if (response) {
                    console.log(response);

                    alert(`${response.message}`);

                    navigate("/profile");
                }
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRefP}
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
                                <form onSubmit={handleSubmit(updatePassword)}>
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
                                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900"
                                                >
                                                    Change the user profile
                                                    picture
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <Input
                                                        label="Old Password: "
                                                        type="password"
                                                        placeholder="Upload your profile picture"
                                                        {...register(
                                                            "oldPassword",
                                                            {
                                                                required: true,
                                                            }
                                                        )}
                                                    />
                                                    <Input
                                                        label="New Password: "
                                                        type="password"
                                                        placeholder="Upload your profile picture"
                                                        {...register(
                                                            "newPassword",
                                                            {
                                                                required: true,
                                                            }
                                                        )}
                                                    />
                                                    <Input
                                                        label="Confirm Password: "
                                                        type="password"
                                                        placeholder="Upload your profile picture"
                                                        {...register(
                                                            "confirmPassword",
                                                            {
                                                                required: true,
                                                            }
                                                        )}
                                                    />
                                                    <p className="text-red-600">
                                                        {error}
                                                    </p>
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
                                            onClick={() => {
                                                setOpen(false);
                                                navigate("/profile");
                                            }}
                                            ref={cancelButtonRefP}
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
    );
}

export default ChangePassword;
