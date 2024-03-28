import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-[80%] md:w-50">
            {label && (
                <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                className={`${className} flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                type={type}
                ref={ref}
                {...props}
                id={id}
            ></input>
        </div>
    );
});

export default Input;
