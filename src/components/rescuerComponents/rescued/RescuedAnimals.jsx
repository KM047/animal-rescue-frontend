import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnimalCard from "../../AnimalCard";
import Loading from "../../Loading";
import { getAllRescuedAnimal } from "./../../../api/rescuerApi";

function RescuedAnimals() {
    const rescuer = useSelector((state) => state.rescuerAuth.rescuerData);
    // const allAnimalsData = useSelector((state) => state.animals.animalsData);

    const [allAnimalsData, setAllAnimalsData] = useState([]);

    // const [isEmpty, setIsEmpty] = useState(false);

    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await getAllRescuedAnimal();

            // console.log(response.data);

            if (response.data) {
                setAllAnimalsData(response.data.animals);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // setAllAnimalsData(null);
            alert("No rescued animal data to show.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    

    if (allAnimalsData?.length === 0) {
        return (
            <div className="relative w-full bg-black text-white mt-10">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-20 lg:px-8">
                    {rescuer && (
                        <h1 className="absolute top-1/2 left-1/2 text-white">
                            No data to show
                        </h1>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-black">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {allAnimalsData?.map((animal, idx) => (
                            <div key={`${animal._id}-${idx}`} className="">
                                <AnimalCard {...animal} url={"/rescuer"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {loading && <Loading />}
        </>
    );
}

export default RescuedAnimals;
