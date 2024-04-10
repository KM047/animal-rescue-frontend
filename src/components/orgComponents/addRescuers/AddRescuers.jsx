import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../Input";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { addRescuer, removeTheRescuer } from "./../../../api/orgApi";
import {
    addRescuer as addToStoreAllRescuer,
    removeRescuer,
} from "../../../store/allRescuersSlice";
import { useEffect } from "react";

export default function AddRescuers() {
    const [open, setOpen] = useState(false);
    const cancelButtonForA = useRef(null);
    const cancelButtonForB = useRef(null);
    const [isRemove, setIsRemove] = useState(false);
    const [rescuerId, setRescuerId] = useState(null);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    const rescuersData = useSelector(
        (state) => state.allRescuers.allRescuersData
    );

    // console.log(rescuersData);

    const filteredRescuers = rescuersData.filter((rescuer) =>
        rescuer.rescuerName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addRescuerByOrg = async (data) => {
        try {
            const formData = new FormData();
            formData.append("rescuerName", data.rescuerName);
            formData.append("phoneNumber", data.phoneNumber);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("avatar", data.avatar[0]);

            if (formData) {
                const response = await addRescuer(formData);

                if (response) {
                    alert(response.message);

                    dispatch(addToStoreAllRescuer(response.data));
                }
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        } finally {
            setOpen(false);
        }
    };

    const deleteRescuer = async (rescuerId) => {
        try {
            const response = await removeTheRescuer(rescuerId);

            if (response) {
                alert(response.message);

                dispatch(removeRescuer(rescuerId));
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        } finally {
            setIsRemove(false);
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
                            <div className="fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity" />
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <form
                                            onSubmit={handleSubmit(
                                                addRescuerByOrg
                                            )}
                                        >
                                            <div className="bg-[#0C121C] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 sm:mx-0 sm:h-10 sm:w-10">
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
                                                            className="text-base font-semibold leading-6 text-gray-100"
                                                        >
                                                            Rescuers Details
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <Input
                                                                label="Rescuers Name: "
                                                                type="text"
                                                                placeholder="Enter the rescuers name"
                                                                {...register(
                                                                    "rescuerName",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                            <Input
                                                                label="Rescuers Phone Number"
                                                                type="text"
                                                                placeholder="Enter rescuers phone number"
                                                                {...register(
                                                                    "phoneNumber",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                            <Input
                                                                label="Rescuers Email Address"
                                                                type="text"
                                                                placeholder="Enter rescuers email"
                                                                {...register(
                                                                    "email",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                            <Input
                                                                label="Rescuers Password"
                                                                type="password"
                                                                placeholder="Enter rescuers password"
                                                                {...register(
                                                                    "password",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                            <Input
                                                                label="Rescuers Picture: "
                                                                type="file"
                                                                placeholder="Upload your rescuers picture"
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
                                            <div className="bg-[#0C121C] px-4 py-3 sm:flex justify-center gap-x-2 sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                >
                                                    Add
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

            {isRemove && (
                <Transition.Root show={isRemove} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        initialFocus={cancelButtonForB}
                        onClose={setIsRemove}
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
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ExclamationTriangleIcon
                                                        className="h-6 w-6 text-red-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-base font-semibold leading-6 text-gray-900"
                                                    >
                                                        Remove Rescuer
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you
                                                            want to remove your
                                                            rescuer? All of data
                                                            will be permanently
                                                            removed. This action
                                                            cannot be undone.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                onClick={() =>
                                                    deleteRescuer(rescuerId)
                                                }
                                            >
                                                Remove
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() =>
                                                    setIsRemove(false)
                                                }
                                                ref={cancelButtonForB}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}

            <section className="mx-auto w-full max-w-7xl px-4 py-4 text-white">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-3xl text-cyan-400 font-bold">
                            Rescuers
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                            This is a list of all rescuers. You can add new
                            rescuers, add or delete existing ones.
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cyan-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={() => setOpen(!open)}
                        >
                            Add new rescuers
                        </button>
                    </div>
                </div>
                <div className="mt-4 mb-4 w-full">
                    <Input
                        label="Search Rescuer"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search rescuers..."
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mt-6 flex flex-col text-">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="bg-black overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-700">
                                        <tr className="divide-x divide-gray-200">
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-sm font-semibold text-gray-50"
                                            >
                                                <span>Rescuers</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-center text-sm font-semibold text-gray-50"
                                            >
                                                Phone Number
                                            </th>

                                            <th
                                                scope="col"
                                                className="relative px-4 py-3.5 "
                                            >
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-[#0C121C]">
                                        {filteredRescuers.map((rescuer) => (
                                            <tr
                                                key={rescuer._id}
                                                className="divide-x divide-gray-200"
                                            >
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={
                                                                    rescuer.avatar
                                                                }
                                                                alt="rescuers"
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-50">
                                                                {
                                                                    rescuer.rescuerName
                                                                }
                                                            </div>
                                                            <div className="text-sm text-gray-50">
                                                                {rescuer.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap text-center px-12 py-4">
                                                    <div className="text-sm text-gray-100">
                                                        {rescuer.phoneNumber}
                                                    </div>
                                                </td>

                                                <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                                                    <button
                                                        className="text-red-500 hover:text-red-600 rounded-full px-2 py-1  "
                                                        onClick={() => {
                                                            setRescuerId(
                                                                rescuer._id
                                                            );
                                                            setIsRemove(
                                                                !isRemove
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-4 w-full border-gray-300">
                    <div className="mt-2 flex items-center justify-end">
                        <div className="space-x-2">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                &larr; Previous
                            </button>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Next &rarr;
                            </button>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
}
