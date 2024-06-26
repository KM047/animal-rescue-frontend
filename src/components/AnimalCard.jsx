import React from "react";
import { Link } from "react-router-dom";

function AnimalCard({
    _id,
    animalPicture,
    animalType,
    createdAt,
    updatedAt,
    rescueStatus,
    url = "",
}) {
    const convertTime = (timestamp) => {
        const time = new Date(timestamp);

        const formattedDate = time.toLocaleString();

        return formattedDate;
    };

    return (
        <>
            <Link to={`${url}/animal-info/${_id}`}>
                <div className=" w-full  ">
                    <img
                        src={animalPicture}
                        alt="Dog image"
                        className="h-[300px] w-full object-contain rounded-3xl"
                    />
                </div>
                <h3 className="mt-2 text-lg text-white text-center">
                    {animalType}
                </h3>
                {rescueStatus == false ? (
                    <p className="mt-1 text-sm font-medium text-gray-600 text-center">
                        {convertTime(createdAt)}
                    </p>
                ) : (
                    <p className="mt-1 text-sm font-medium text-green-600 text-center">
                        Rescued : {convertTime(updatedAt)}
                    </p>
                )}
            </Link>
        </>
    );
}

export default AnimalCard;
