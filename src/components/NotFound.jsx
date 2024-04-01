import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="py-10">
            <div className="text-center">
                <p className="text-5xl font-semibold text-white">404</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Animal Info not found
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    Sorry, we couldn&apos:t find the page you&apos;re looking
                    for.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-3">
                    <Link to={"/"}>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Go back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
