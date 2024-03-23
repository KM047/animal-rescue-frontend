import React from "react";
import { Link } from "react-router-dom";

function AnimalCard({ _id, animalPicture, animalType, createdAt }) {
    const convertTime = (timestamp) => {
        const time = new Date(timestamp);

        const formattedDate = time.toLocaleString();

        return formattedDate;
    };

    return (
        <>
            <Link to={`/animal/${_id}`}>
                <div className=" w-full rounded-lg border-1 border-white">
                    <img
                        src={animalPicture}
                        alt="Dog image"
                        className="h-full w-full inline-block rounded-3xl"
                    />
                </div>
                <h3 className="mt-4 text-lg text-white text-center">
                    {animalType}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-600 text-center">
                    {convertTime(createdAt)}
                </p>
            </Link>
        </>
    );
}

export default AnimalCard;
