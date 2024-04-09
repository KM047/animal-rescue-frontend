import { useDispatch } from "react-redux";
import { useState } from "react";
import { SampleBtn, Input, Logo, Loading } from "./index";
import { login as authLogin } from "../store/authSlice";
import { setAnimal } from "../store/animalSlice";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCurrentUser, userLogin } from "../api/userApi";
import Cookies from "js-cookie";
import { getAllAnimalsData } from "./../api/animalApi";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const login = async (data) => {
        setError("");
        try {
            setLoading(true);

            const session = await userLogin(data);
            if (session) {
                // console.log("session -> ", session);
                dispatch(authLogin(session.data.user));

                Cookies.set("accessToken", session.data.accessToken, {
                    expires: 7,
                });
                Cookies.set("refreshToken", session.data.refreshToken, {
                    expires: 7,
                });

                setError("Logged in successfully");
                navigate("/user");

                localStorage.setItem("accessToken", session.data.accessToken);

                // localStorage.setItem("userLogged", session.data.user);
                localStorage.setItem("isLoggedIn", true);
                window.location.reload();
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" flex items-center justify-center w-full">
            <div className="mx-auto w-[95%] sm:w-full max-w-lg bg-[#1E2022] rounded-xl p-8 sm:p-10 border border-white/10 text-white/90">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl text-white/80 font-bold leading-tight">
                    User Login
                </h2>
                <p className="mt-2 text-center text-base text-white/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/user/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && (
                    <p className="text-red-600 mt-8 text-center">{error}</p>
                )}

                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                            value
                                        ) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />

                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter you password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <div className="flex justify-center">
                            <SampleBtn type="submit" className="">
                                {loading ? <Loading /> : "Sign in"}
                            </SampleBtn>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
