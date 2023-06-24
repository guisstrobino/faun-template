import React, { useState } from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";
import Menu from "./Menu";

export default function Header(props: { pagination: boolean }) {
    return (
        <header className="bg-cover bg-center bg-no-repeat bg-image h-[100vh] overflow-hidden">
            <nav className="flex justify-around items-center pt-[70px]">
                <Menu homePage={props.pagination} />
                <Link href="/">
                    <h3 className="font-bebas-neue font-bold text-[46px] text-white">
                        Faun
                    </h3>
                </Link>
                <SearchBar />
            </nav>

            <div
                className={`flex mt-[214px] items-center flex-col-reverse lg:flex-row ${
                    props.pagination ? "justify-start" : "justify-center"
                }`}
            >
                {props.pagination && (
                    <div className="flex lg:visible invisible">
                        <div className="w-[190px] border-t-[1px] border-white opacity-30 mr-[23px] mt-[285px]"></div>
                        <div className="h-[436px] flex flex-col justify-between">
                            <p className="font-oswald font-[600] text-[23px] text-white opacity-10">
                                1
                            </p>
                            <p className="font-oswald font-[600] text-[23px] text-white opacity-10">
                                2
                            </p>
                            <p className="font-oswald font-[600] text-[23px] text-white">
                                3
                            </p>
                            <p className="font-oswald font-[600] text-[23px] text-white opacity-10">
                                4
                            </p>
                        </div>
                        <div className="w-[280px] border-t-[1px] border-white opacity-30 mr-[73px] ml-[23px] top-[643px] mt-[285px]"></div>
                    </div>
                )}

                <div className="flex-col items-start">
                    <h2 className="text-white font-oswald tracking-tighter ml-4 overflow-hidden px-2 md:text-9xl text-6xl md:mb-[-35px] mb-0">
                        A SAFE KIND
                    </h2>
                    <h1 className="text-[#ED1F34] font-oswald font-bold opacity-90 tracking-tighter text-9xl overflow-hidden px-2 md:text-[240px] text-[100px] md:mb-[-20px] mb-0">
                        MUSIC IS
                    </h1>
                    <h2 className="text-white font-oswald font-bold tracking-tighter overflow-hidden px-2 md:text-9xl text-6xl">
                        OF HIGH
                    </h2>
                </div>
            </div>
        </header>
    );
}
