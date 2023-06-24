import { useState } from "react";

const Menu = (props: { homePage: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="z-50 overflow-hidden">
            <button onClick={toggleMenu}>
                <i className="fas fa-bars text-white text-4xl cursor-pointer"></i>
            </button>
            <div
                className={`fixed inset-0 flex items-start justify-start transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="bg-[#0D0D0D] w-[340px] h-auto pt-[84px] flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-bebas-neue font-bold text-4xl text-white text-center pl-[10px] flex-1 overflow-hidden">
                            Menu
                        </p>
                        <button
                            onClick={toggleMenu}
                            className="items-end pr-[10px]"
                        >
                            <i className="fas fa-bars text-white text-4xl cursor-pointer "></i>
                        </button>
                    </div>
                    <div className="w-screen border-t-[1px] border-white opacity-30"></div>
                    {!props.homePage ? (
                        <>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1000,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[50px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    Send Us A Message
                                </p>
                            </button>{" "}
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 2000,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[50px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    Contact Us
                                </p>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1000,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[50px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    About Us
                                </p>
                            </button>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1920,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[30px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    Our Newest Video
                                </p>
                            </button>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 2500,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[30px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    Playlists
                                </p>
                            </button>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 3010,
                                        behavior: "smooth",
                                    });
                                    toggleMenu();
                                }}
                            >
                                <p className="mt-[30px] mb-[20px] font-bebas-neue font-bold text-4xl text-white text-left pl-[10px] flex-1 overflow-hidden">
                                    Want to hire us?
                                </p>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
