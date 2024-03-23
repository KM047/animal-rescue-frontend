import React from "react";
import AnimalCard from "./AnimalCard";
import { useSelector } from "react-redux";

function AllAnimals() {
    const animalsData = useSelector((state) => {
        state.animals.animalsData;
    });
    return (
        <>
            <div className="bg-black">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/* <h2 className="sr-only">Products</h2> */}

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {animalsData.map((data) => (
                            <div key={data._id} className="p-2">
                                <AnimalCard {...data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllAnimals;
