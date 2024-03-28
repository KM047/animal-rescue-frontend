import React, { useRef, useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import SelectField from "../SelectField";
import MultiSelector from "../MultiSelector";
import { Slash } from "lucide-react";
import { SuccessBanner } from "./../SuccessBanner";
import { addAnimalData } from "./../../api/userApi";

/**
 *
 * animalType
 * breed
 * age
 * gender
 * healthStatus
 * location
 * animalPicture
 *
 * @returns
 *
 */

function UserAddQuery() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const animalTypes = useRef();
    const [animalType, setAnimalType] = useState("");
    const [breeds, setBreeds] = useState([]);
    const [locationData, setLocationData] = useState("");
    const [success, setSuccess] = useState(false);

    const allAnimals = [
        { label: "Select Animal", value: "" },
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
        { label: "Donkeys", value: "donkey" },
        { label: "Monkeys", value: "monkey" },
        { label: "Cows", value: "cows" },
    ];

    const dogBreeds = [
        "Labrador Retriever",
        "German Shepherd",
        "Golden Retriever",
        "Bulldog",
        "Beagle",
    ];
    const catBreeds = [
        "Persian",
        "Siamese",
        "Maine Coon",
        "Ragdoll",
        "British Shorthair",
    ];
    const donkeyBreeds = [
        "Standard Donkey",
        "Miniature Donkey",
        "Mammoth Donkey",
        "Poitou Donkey",
    ];
    const monkeyBreeds = [
        "Capuchin Monkey",
        "Marmoset",
        "Squirrel Monkey",
        "Tamarin",
    ];
    const cowBreeds = ["Holstein", "Jersey", "Angus", "Hereford", "Simmental"];

    const handleAnimalTypeChange = (e) => {
        const selectedAnimalType = e.target.value;
        setAnimalType(animalTypes);

        // Set breeds based on the selected animal type
        switch (selectedAnimalType) {
            case "dog":
                setBreeds(dogBreeds);
                break;
            case "cat":
                setBreeds(catBreeds);
                break;
            case "donkey":
                setBreeds(donkeyBreeds);
                break;
            case "monkey":
                setBreeds(monkeyBreeds);
                break;
            case "cows":
                setBreeds(cowBreeds);
                break;
            default:
                setBreeds([]);
                break;
        }
    };

    // const locationResult = document.querySelector("#locationResult");
    // document.querySelector("#getLocation").addEventListener("click", () => {
    //     locationResult.textContent = "Retrieving User Location...";

    //     function success(position) {
    //         let { coords } = position;
    //         locationResult.textContent = "See my location on a map";
    //         locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
    //     }

    //     navigator.geolocation.getCurrentPosition(success);
    // });

    const locationResult = async () => {
        const options = {
            enableHighAccuracy: true, // enable high accuracy
            timeout: 300000, // wait for 5 minutes
        };

        function success(position) {
            console.log(position);
            const { latitude, longitude } = position.coords;

            if (latitude && longitude) {
                setLocationData(`${latitude}, ${longitude}`);
            }
        }

        function error(error) {
            console.log(error);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
        // console.log(navigator.userAgent.toString());
    };

    const addAnimal = async (data) => {
        try {
            const formData = new FormData();

            console.log("request data", data);

            formData.append("animalType", data.animalType);
            formData.append("breed", data.breed);
            formData.append("age", data.age);
            formData.append("healthStatus", data.healthStatus);
            formData.append("password", data.password);
            formData.append("location", locationData);
            formData.append("animalPicture", data.animalPicture[0]);

            const response = await addAnimalData(formData);

            if (response) {
                console.log(response);

                setSuccess(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {success && (
                <>
                    <SuccessBanner message={"Yes you added "} />
                </>
            )}
            <div className="mx-auto w-[90%] sm:w-full rounded-xl p-8 sm:p-10 border border-white/20 text-white/90">
                <h1 className="text-center font-bold text-2xl sm:text-4xl">
                    Add Animal Query
                </h1>
                <div className="">
                    <form
                        className="w-[90%]"
                        onSubmit={handleSubmit(addAnimal)}
                    >
                        <MultiSelector
                            options={allAnimals}
                            label="Animal Type"
                            className="border border-white/40 mb-4 sm:w-1/3"
                            {...register("animalType", { required: true })}
                            onChange={handleAnimalTypeChange}
                        />

                        <MultiSelector
                            label="Select Breed"
                            className="border border-white/40 mb-4 w-[80%] sm:w-1/4"
                            options={breeds.map((breed) => ({
                                label: breed,
                                value: breed,
                            }))}
                            {...register("breed", { required: true })}
                        />

                        <Input
                            label="Age: "
                            placeholder="Enter the age of the animal"
                            type="number"
                            className="border border-white/40 mb-4 mt-2 sm:w-1/3"
                            {...register("age", {
                                required: true,
                            })}
                        />

                        <SelectField
                            options={["Select gender", "Male", "Female"]}
                            label="Gender: "
                            className="border border-white/40 mb-4 mt-2 sm:w-1/3"
                            {...register("gender", {
                                required: true,
                            })}
                        />

                        <label
                            htmlFor="health_status"
                            className="block text-sm font-bold leading-6 text-white"
                        >
                            Health Status
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="health_status"
                                name="health_status"
                                rows={3}
                                className="block mb-4 w-56 sm:w-1/2 rounded-md border-0 py-1.5 text-white bg-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={" "}
                                {...register("healthStatus", {
                                    required: true,
                                })}
                            />
                        </div>

                        {/**
                        
                        Get User location

                         */}

                        <Input
                            label="Animal Picture: "
                            placeholder="Animal Picture"
                            type="file"
                            className="border border-white/40 mb-4 mt-2 w-full   sm:w-1/3"
                            {...register("animalPicture", {
                                required: true,
                            })}
                        />

                        <div className="text-white flex-col gap-2">
                            <label htmlFor="location-btn">Add location</label>
                            <span
                                id="location-btn"
                                className="bg-white w-7 h-7 flex justify-center items-center rounded-full cursor-pointer mt-2"
                                onClick={() => locationResult()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>
                            </span>

                            <p className="text-green-300">{locationData}</p>
                        </div>

                        <div className="mt-5 w-1/2 flex justify-center items-center">
                            <button
                                type="submit"
                                className="rounded-full bg-cyan-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserAddQuery;
