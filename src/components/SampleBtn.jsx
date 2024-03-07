import React from "react";
import { ArrowRight } from "lucide-react";
function SampleBtn({ children, type = "button", className = "" }) {
    return (
        <button
            type={type}
            className={` w-auto inline-flex items-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 ${className}`}
        >
            {children}
            <ArrowRight className="ml-2 h-4 w-4" />
        </button>
    );
}

export default SampleBtn;
