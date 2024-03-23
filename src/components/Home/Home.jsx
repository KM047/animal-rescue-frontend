import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "./../../assets/hero_img1.jpg";
// import img1 from "./hero_img1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./../../index.css";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import { getCurrentUser } from "./../../api/userApi";
import { login, logout } from "../../store/authSlice";
import AllAnimals from "./../AllAnimals";
import AnimalCard from "../AnimalCard";

export default function Home() {
    const user = useSelector((state) => state.auth.userData);
    const allAnimalsData = useSelector((state) => state.animals.animalsData);

    

    console.log("allAnimalsData is", allAnimalsData);

    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentUser().then((userData) => {
            if (userData) {
                console.log(" Data in home page", userData);
                
                dispatch(login(userData.data));
            } else {
                dispatch(logout());
            }
        });
    }, []);

    console.log("Home page loaded", user);

    if (allAnimalsData?.length === 0) {
        return (
            <div className="relative w-full bg-black text-white mt-10">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-20 lg:px-8">
                    {user ? (
                        <h1 className="absolute top-1/2 left-1/2 text-white">
                            All animals rescued
                        </h1>
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
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={`${img1}`}
                                            alt=""
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src={img1}
                                            alt="dog image"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-lg"
                                            src="https://www.anipixels.com/cdn/images/signup-01.jpg"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                                <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl leading-8 ">
                                    Every Pet Deserves a Happy Ending. <br />{" "}
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
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-black">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/* <h2 className="sr-only">Products</h2> */}

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {allAnimalsData?.map(
                            (data) =>
                                data.rescueStatus == false && (
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
