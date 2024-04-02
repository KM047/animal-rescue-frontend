import { Link } from "react-router-dom";
const stats = [
    { id: 1, name: "Organisation Singup page", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
];

export default function SignPageChoice() {
    return (
        <div className="text-white py-24 sm:py-32 flex justify-center items-center h-full w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    <div className="rounded-md border border-white/30 p-9">
                        <dt className="text-3xl font-semibold text-center leading-6 text-white">
                            Organisation login
                        </dt>
                        <dd className="mt-6 text-sm">
                            <div className="flex justify-around items-center">
                                <Link>
                                    <button
                                        type="button"
                                        className="rounded-full border bg-[#37476C] px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Login
                                    </button>
                                </Link>

                                <Link>
                                    <button
                                        type="button"
                                        className="rounded-full border bg-[#37476C] px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Signup
                                    </button>
                                </Link>
                            </div>
                        </dd>
                    </div>
                    <div className="rounded-md border border-white/30 p-6">
                        <dt className="text-3xl font-semibold text-center leading-6 text-white">
                            Rescuer login
                        </dt>
                        <dd className="mt-6 text-2xl">
                            <div className="flex justify-around">
                                <Link>
                                    <button
                                        type="button"
                                        className="rounded-full border bg-[#37476C] px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </dd>
                    </div>
                    <div className="rounded-md border border-white/30 p-6">
                        <dt className="text-3xl font-semibold text-center leading-6 text-white">
                            User login
                        </dt>
                        <dd className="mt-6 text-2xl">
                            <div className="flex justify-around">
                                <Link>
                                    <button
                                        type="button"
                                        className="rounded-full border bg-[#37476C] px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Login
                                    </button>
                                </Link>
                                <Link>
                                    <button
                                        type="button"
                                        className="rounded-full border bg-[#37476C] px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Signup
                                    </button>
                                </Link>
                            </div>
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
}
