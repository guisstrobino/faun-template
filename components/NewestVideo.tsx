import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "../contexts/AppContext";

export default function NewestVideo() {
    const { isOnPlaceHolder, setIsOnPlaceHolder } = useContext(AppContext);

    const handlePlay = () => {
        setIsOnPlaceHolder(!isOnPlaceHolder);
    };

    const handlePause = () => {
        setIsOnPlaceHolder(!isOnPlaceHolder);
    };

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: !isOnPlaceHolder,
            loop: 1,
            mute: isOnPlaceHolder,
            showinfo: 0,
            disablekb: 1,
        },
        width: "100%",
        height: "857px",
    };

    return (
        <section className="relative overflow-hidden">
            <div className="">
                <YouTube
                    className={isOnPlaceHolder ? "pointer-events-none" : ""}
                    videoId="z4Cxn1lDPXo"
                    opts={opts}
                    onPause={handlePause}
                />
                {isOnPlaceHolder && (
                    <>
                        <h2 className="absolute font-bebas-neue font-[700] text-[#ED1F34] xl:top-[313px] xl:left-[115px] top-1/4 right-1/2 xl:ml-0 ml-2 md:text-[108px] text-[60px]">
                            OUR NEWEST VIDEO
                        </h2>
                        <p className="absolute font-raleway font-[400] text-white xl:w-[612px] xl:top-[443px] xl:left-[115px] w-[auto] max-w-[200px] lg:max-w-[612px] top-1/3 right-1 md:text-[17px] text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec a tincidunt dui, vitae posuere ipsum.
                            Praesent vehicula nunc eget risus vehicula rutrum.
                            Vestibulum pulvinar sapien tellus, sit amet ultrices
                            turpis vestibulum at.
                        </p>
                        <button
                            className={`absolute xl:top-[379px] right-1/2 xl:right-910 bottom-[250px] cursor-pointer sm:top-[200px]`}
                            onClick={() => handlePlay()}
                        >
                            <i className="fa fa-circle-play text-[100px] text-white"></i>
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
