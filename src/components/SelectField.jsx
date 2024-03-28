import { forwardRef, useId } from "react";

function SelectField({ options = [], label, className = "", ...props }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="mb-4 text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-black/10 text-white outline-none focus:bg-black/10 duration-200 border border-white/40 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option} className="bg-black">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(SelectField);
