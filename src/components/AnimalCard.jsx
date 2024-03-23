import React from "react";
import { Link } from "react-router-dom";

function AnimalCard({ _id, animalPicture }) {
    return (
        <Link to={`/animal/${_id}`}>
            <div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src={animalPicture}
                        alt="Dog image"
                        className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-300"
                    />
                </div>
                <h3 className="mt-4 text-sm text-white text-center">{}</h3>
                <p className="mt-1 text-lg font-medium text-blue-400">{}</p>
            </div>
        </Link>
    );
}

export default AnimalCard;
