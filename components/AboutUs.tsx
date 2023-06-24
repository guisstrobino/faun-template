import React from "react";

export default function AboutUs() {
    return (
        <section className="relative flex items-center h-[auto] justify-evenly overflow-hidden lg:h-[770px] xl:mb-0 mb-5">
            <div className="absolute font-bebas-neue font-bold text-[#8D8D8D] text-[415px] opacity-10 left-0 mt-[-200px] ml-[-400px]">
                ABOUT US
            </div>
            <div className="absolute font-bebas-neue font-bold text-[#8D8D8D] text-[415px] opacity-10 right-0 mt-[-200px] mr-[-800px] z-20">
                ABOUT US
            </div>
            <div className="flex justify-evenly w-[100%] flex-col xl:flex-row  items-center">
                <div className="flex flex-col justify-center h-[435px] ">
                    <div className="text-[#202020] text-[46px] font-oswald font-[600] mb-[60px] flex justify-center lg:justify-start">
                        ABOUT US
                    </div>
                    <div className="text-[17px] font-raleway md:w-[508px] w-[300px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec a tincidunt dui, vitae posuere ipsum. Praesent
                        vehicula nunc eget risus vehicula rutrum. Vestibulum
                        pulvinar sapien tellus, sit amet ultrices turpis
                        vestibulum at.
                    </div>
                </div>
                <div className="flex bg-aboutus w-[691px] h-[435px] items-end justify-end relative z-0"></div>
                <div className="text-[#ED1F34] font-oswald font-[600] tracking-tighter absolute transform right-[87px] md:text-[140px] text-[80px] bottom-0 xl:top-[476px]">
                    CONCERT
                </div>
            </div>
        </section>
    );
}
