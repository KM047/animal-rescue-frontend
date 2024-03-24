import React, { useRef, useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import SelectField from "../SelectField";
import MultiSelector from "../MultiSelector";

/**
 *
 * animalType
 * breed
 * age
 * gender
 * healthStatus
 * location
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

    return (
        <>
            <div className="mx-auto w-[90%] sm:w-full rounded-xl p-8 sm:p-10 border border-white/20 text-white/90">
                <h1 className="text-center font-bold text-2xl sm:text-4xl">
                    Add Animal Query
                </h1>
                <div className="">
                    <form onSubmit="">
                        <MultiSelector
                            options={allAnimals}
                            label="Animal Type"
                            className="border border-white/40 mb-4 w-1/4 sm:w-1/3"
                            {...register("animalType", { required: true })}
                            onChange={handleAnimalTypeChange}
                            ref={animalTypes}
                        />

                        <MultiSelector
                            label="Select Breed"
                            className="border border-white/40 mb-4 w-1/4 sm:w-1/3"
                            options={breeds.map((breed) => ({
                                label: breed,
                                value: breed,
                            }))}
                        />

                        <Input
                            label="Age: "
                            placeholder="Enter the age of the animal"
                            type="number"
                            className="border border-white/40 mb-4 w-1/4 sm:w-1/3"
                            {...register("age", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Health Status: "
                            placeholder="Summary of the animal health"
                            type="text"
                            className="border border-white/40 mb-4 w-1/4 sm:w-1/3"
                            {...register("healthStatus", {
                                required: true,
                            })}
                        />

                        {/**
                        
                        Get User location

                         */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserAddQuery;
