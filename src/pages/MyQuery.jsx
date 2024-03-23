import React from "react";
import { useSelector } from "react-redux";
import { AnimalCard } from "./../components";

function MyQuery() {
    const user = useSelector((state) => state.auth.userData);
    const allAnimalsData = useSelector((state) => state.animals.animalsData);

    if (allAnimalsData?.length === 0) {
        return (
            <div className="relative w-full bg-black text-white mt-10">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-20 lg:px-8">
                    {user && (
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
                    {/* <h2 className="sr-only">Products</h2> */}

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {allAnimalsData?.map(
                            (data) =>
                                data.informant === user._id && (
                                    <div key={data._id} className="">
                                        <AnimalCard {...data} />
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyQuery;
