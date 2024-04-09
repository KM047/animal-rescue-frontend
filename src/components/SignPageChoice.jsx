import { Link } from "react-router-dom";

export default function SignPageChoice() {
    return (
        <div className="text-white py-10 sm:py-32 flex justify-center items-center h-full w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    <div className="relative flex w-50 flex-col rounded-xl bg-[#0C121C] bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-300 to-green-600"></div>
                        <div className="p-6 text-[#D6DEE7]">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                                Organization
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                Login and Signup for the Organization
                            </p>
                        </div>
                        <div className="p-6 pt-0 w-full flex justify-between gap-x-4">
                            <Link to={"/org/login"}>
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-400/20 transition-all hover:shadow-lg hover:shadow-blue-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to={"/org/signup"}>
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-green-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Signup
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex w-50 flex-col rounded-xl bg-[#0C121C] bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-yellow-300 to-orange-600"></div>
                        <div className="p-6 text-[#D6DEE7]">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                                Rescuers
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                Login for the Rescuers
                            </p>
                        </div>
                        <div className="p-6 pt-0 w-full flex justify-center gap-x-4">
                            <Link to={"/rescuer/login"}>
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-yellow-600  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-400/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex w-50 flex-col rounded-xl bg-[#0C121C] bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-red-500/40 bg-gradient-to-r from-red-500 to-orange-600"></div>
                        <div className="p-6 text-[#D6DEE7]">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                                User
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                Login and Signup for the Users
                            </p>
                        </div>
                        <div className="p-6 pt-0 w-full flex justify-between gap-x-4">
                            <Link to={"/user/login"}>
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to={"/user/signup"}>
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Signup
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
