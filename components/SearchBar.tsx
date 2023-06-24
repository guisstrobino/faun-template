import React, { useState } from "react";

export default function SearchBar() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="relative flex flex-row-reverse">
            <button onClick={handleToggle}>
                {expanded ? (
                    <i className="fas fa-xmark text-white text-4xl cursor-pointer mt-[2px]"></i>
                ) : (
                    <i className="fas fa-magnifying-glass text-white text-4xl cursor-pointer"></i>
                )}
            </button>
            <div
                className={`top-0 right-10 rounded-md shadow-md overflow-hidden transition-all duration-300 ${
                    expanded ? "w-48" : "w-0"
                }`}
            >
                <input
                    type="text"
                    placeholder="Search"
                    className={`px-2 py-2 rounded-md bg-[#1C1C1C] transition-all duration-300 text-white ${
                        expanded ? "pl-0 opacity-100" : "pl-8 opacity-0"
                    }`}
                />
            </div>
        </div>
    );
}
