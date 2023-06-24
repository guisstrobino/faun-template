import React from "react";
import Link from "next/link";

export default function HireUs(props: { title: string }) {
    return (
        <section className="bg-[#202020]">
            <div className="bg-cover bg-center bg-no-repeat bg-hireus h-[774px] flex flex-col justify-center items-center">
                <div className="font-bebas-neue font-[700] text-white mb-[50px] md:text-[69px] text-[40px]">
                    {props.title}
                </div>
                <div className="font-raleway font-[400] text-[13px] text-white text-center leading-[34px] mb-[40px] md:w-[617px] w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec a tincidunt dui, vitae posuere ipsum. Praesent
                    vehicula nunc eget risus vehicula rutrum. Vestibulum
                    pulvinar sapien.
                </div>
                <div>
                    <Link href="/contactus">
                        <button className="mouse-pointer font-bebas-neue font-[700] text-[28px] text-white leading-[28px] border-[1px] py-[22px] px-[40px]">
                            CONTACT WITH US
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
