import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnimalCard from "./../AnimalCard";
import { getAllAnimalsData } from "../../api/animalApi";
import Loading from "./../Loading";

function MyQuery() {
    const user = useSelector((state) => state.auth.userData);
    // const allAnimalsData = useSelector((state) => state.animals.animalsData);

    const [allAnimalsData, setAllAnimalsData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await getAllAnimalsData(page);

            // console.log(response.data);

            setAllAnimalsData((previousData) => [
                ...previousData,
                ...response.data,
            ]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]); // Fetch data whenever the page changes

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ==
            document.documentElement.offsetHeight
        ) {
            // When scrolled to the bottom
            setPage((prevPage) => prevPage + 1); // Load next page
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // setRenderData(allAnimalsData);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Add scroll event listener when component mounts

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

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {allAnimalsData?.map(
                            (data, idx) =>
                                data.informant === user._id && (
                                    <div
                                        key={`${data._id}-${idx}`}
                                        className=""
                                    >
                                        <AnimalCard {...data} url={"/user"} />
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>

            {loading && <Loading />}
        </>
    );
}

export default MyQuery;
