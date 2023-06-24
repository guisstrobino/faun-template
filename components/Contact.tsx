import React from "react";

import Form from "./Form";

export default function Contact() {
    return (
        <section className="h-[806px] relative items-center justify-around overflow-hidden flex lg:flex-row flex-col">
            <div className="text-[#8D8D8D] flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <i className="fa-regular fa-envelope fa-2xl py-4"></i>
                    <p className="font-bebas-neue font-[400] text-[30px] leading-[36px] overflow-hidden">
                        EMAIL
                    </p>
                </div>
                <p className="font-raleway font-[400] text-[25px] leading-[35px]">
                    FAUN@FAUN.COM
                </p>
                <div className="flex items-center mt-16 gap-3">
                    <i className="fa-brands fa-whatsapp fa-2xl py-4"></i>
                    <p className="font-bebas-neue font-[400] text-[30px] leading-[36px] overflow-hidden">
                        WHATSAPP
                    </p>
                </div>
                <p className="font-raleway font-[400] text-[25px] leading-[35px]">
                    +55 (41) 9999-9999
                </p>
            </div>
            <Form />
            <div className="font-bebas-neue font-[700] text-[360px] text-[#8D8D8D1A] absolute left-[-41px] top-[465px] z-[-1]">
                CONTACT US
            </div>
        </section>
    );
}
