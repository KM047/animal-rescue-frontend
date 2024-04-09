import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/dog_img01.webp";
import img2 from "../../../assets/dog_img02.webp";
import img3 from "../../../assets/dog_img03.webp";
import img4 from "../../../assets/dog_img04.webp";
import img5 from "../../../assets/dog_img05.webp";
import img6 from "../../../assets/dog_img06.webp";

// import img1 from "./hero_img1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AnimalCard from "../../AnimalCard";
import { getAllAnimalsData, getAnimalData } from "../../../api/animalApi";
import Loading from "../../Loading";
import { addAnimal, setAnimal } from "../../../store/animalSlice";

export default function Home() {
    const org = useSelector((state) => state.orgAuth.orgData);
    // const allAnimalsData = useSelector((state) => state.animals.animalsData);

    const [allAnimalsData, setAllAnimalsData] = useState([]);

    // console.log("allAnimalsData is", allAnimalsData);

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isDBEmpty, setIsDBEmpty] = useState(false);

    const fetchData = async () => {
        try {
            if (!isDBEmpty) {
                setLoading(true);
                // console.log("loading", loading);
                const response = await getAllAnimalsData(page);

                // console.log(response);

                // console.log(response.data);

                dispatch(
                    setAllAnimalsData((previousData) => [
                        ...previousData,
                        ...response.data,
                    ])
                );
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            if (error.response.status == 404) {
                setIsDBEmpty(true);
                // console.log(error.response.status);
            }
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

    return (
        <>
            <div className="bg-black h-full">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
                    {org !== null ? (
                        allAnimalsData.length === 0 ? (
                            <h1 className="absolute top-1/2 left-1/2 text-white">
                                All animals rescued
                            </h1>
                        ) : (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {allAnimalsData?.map((data, idx) =>
                                    data.rescueStatus == false ? (
                                        <div
                                            key={`${data._id}-${idx}`}
                                            className=""
                                        >
                                            <AnimalCard {...data} />
                                        </div>
                                    ) : null
                                )}
                            </div>
                        )
                    ) : (
                        <>
                            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex justify-center items-center p-4">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper rounded-xl"
                                    speed={1500}
                                    ease="linear"
                                >
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={`${img1}`}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={img2}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={img3}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={`${img4}`}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={img5}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={img6}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                                <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl leading-8 ">
                                    Every Pet Deserves a Happy Ending. <br />
                                    Start Yours Now.
                                </h1>

                                <div className="mt-9 flex justify-end">
                                    <Link to={"/signup"}>
                                        <button className="animated-button">
                                            <span>Get Started</span>
                                            <span></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                    {loading && (
                        <div className="text-white text-cen">Loading...</div>
                    )}
                </div>
            </div>
        </>
    );
}
