import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import Container from "../../Container/Container";
import { useNavigate, useParams } from "react-router-dom";
import { getAnimalData } from "../../../api/animalApi";
import NotFound from "../../NotFound";
import { addAnimalRescued } from "./../../../api/rescuerApi";

function RescueAnimal() {
    const [loading, setLoading] = useState(false);

    // const animalsData = useSelector((state) => state.animals.animalsData);

    const [animalInfo, setAnimalInfo] = useState(null);

    const { animalId } = useParams();

    // console.log("animalId ", animalId);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            // You can await here
            if (animalId) {
                setLoading(true);
                window.scrollTo(0, 0);
                const animalData = await getAnimalData(animalId);
                if (animalData) {
                    // console.log(animalData);
                    setAnimalInfo(animalData.data);
                } else navigate("/rescuer");
            } else navigate("/rescuer");
            setLoading(false);
        }
        fetchData();
    }, []);

    const convertTime = (timestamp) => {
        const time = new Date(timestamp);

        const formattedDate = time.toLocaleString();

        return formattedDate;
    };

    const redirectToGoogleMaps = () => {
        const [latitudePart, longitudePart] = animalInfo?.location.split(" ");

        const url = `https://www.google.com/maps/search/?api=1&query=${latitudePart},${longitudePart}`;
        window.open(url, "_blank");
    };

    const rescueAnimalById = async (rescueAnimalId) => {
        try {
            const response = await addAnimalRescued(rescueAnimalId);

            if (response) {
                // console.log(response);
                alert(response.message);

                navigate("/rescuer");
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };

    return loading ? (
        <Loading />
    ) : animalInfo != null ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
                    <img
                        src={`${animalInfo?.animalPicture}`}
                        alt="Animal Picture"
                        className="w-screen max-w-[250px] sm:max-w-[350px] rounded-xl border-2 border-white/20"
                    />
                </div>

                <div className="flex flex-col items-center justify-center space-x-2 p-10 flex-wrap border-[1px] border-[#B8BFC6] rounded-lg">
                    <div className="mt-6 text-white">
                        <dl className="">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                {animalInfo.rescueStatus == false ? (
                                    <>
                                        <dt className="text-sm font-semibold leading-6 ">
                                            Created
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                            {convertTime(animalInfo?.createdAt)}
                                        </dd>
                                    </>
                                ) : (
                                    <>
                                        <dt className="text-sm text-green-400 font-bold leading-6 ">
                                            Rescued
                                        </dt>
                                        <dd className="mt-1 text-green-400 text-sm font-bold leading-6 sm:col-span-2 sm:mt-0">
                                            {convertTime(animalInfo?.updatedAt)}
                                        </dd>
                                    </>
                                )}
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-semibold leading-6">
                                    Animal Type -
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {animalInfo?.animalType}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-semibold leading-6 ">
                                    Breed
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {animalInfo?.breed}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-semibold leading-6 ">
                                    Gender
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {animalInfo?.gender}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-semibold leading-6 ">
                                    Health Condition
                                </dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    {animalInfo?.healthStatus}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-40 sm:px-0">
                                <dt className="text-sm font-semibold leading-6 ">
                                    Location
                                </dt>
                                <dd
                                    className="mt-1 text-sm text-blue-400 cursor-pointer leading-6  sm:col-span-2 sm:mt-0"
                                    onClick={redirectToGoogleMaps}
                                >
                                    {animalInfo?.location}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-black">
                        {animalInfo.rescueStatus == false && (
                            <button
                                onClick={() => rescueAnimalById(animalInfo._id)}
                                className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                            >
                                Rescue
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    ) : (
        <>
            <div className=" h-[500px]  flex justify-center items-center mx-2">
                <NotFound />
            </div>
        </>
    );
}

export default RescueAnimal;
