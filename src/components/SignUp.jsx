import { useDispatch } from "react-redux";
import { useState } from "react";
import { SampleBtn, Input, Logo } from "./index";
// import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const [responseMessage, setResponseMessage] = useState("");

    const create = async (formData) => {
        try {
            setError("");
            setLoading(true);
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log("response - ", response);

            if (response.ok) {
                const responseData = await response.json();
                setResponseMessage(responseData.message);
                navigate("/login");
            } else {
                const errorData = await response.json();
                setResponseMessage(errorData.message);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setResponseMessage("Error during signup");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="mx-auto w-[95%] sm:w-full max-w-lg bg-[#1E2022] rounded-xl p-8 sm:p-10 border border-white/10 text-white/90">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-white/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && (
                    <p className="text-red-600 mt-8 text-center">{error}</p>
                )}

                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label="Full Name: "
                            placeholder="Enter you full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
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
                        <div className="flex justify-center items-center">
                            <SampleBtn type="submit" className="bg-gray-700">
                                {loading ? <Loading /> : "Create Account"}
                            </SampleBtn>
                        </div>
                    </div>
                </form>
                <p className="text-red-500">{responseMessage}</p>
            </div>
        </div>
    );
}

export default Signup;
