import React, { forwardRef, useId } from "react";

function MultiSelector({ options, label, className = "", ...props }, ref) {
    const id = useId();
    return (
        <div className="">
            {label && (
                <label
                    htmlFor={id}
                    className=" mb-4 text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`${className} flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
            >
                {options?.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="bg-black"
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(MultiSelector);
