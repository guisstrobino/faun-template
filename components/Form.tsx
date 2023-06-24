export default function Form() {
    return (
        <form className="relative z-0 ">
            <input
                type="text"
                id="name"
                className="h-[60px] block py-2.5 px-0 w-[390px] text-sm text-black bg-transparent border-0 border-b-[1px] border-black appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
            />
            <label
                htmlFor="name"
                className="mt-6 ml-[20px] font-raleway font-[100] text-black text-[17px] absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                NAME
            </label>
            <input
                type="email"
                id="email"
                className="mt-5 block py-2.5 px-0 w-[390px] text-sm text-black bg-transparent border-0 border-b-[1px] border-black appearance-none focus:outline-none focus:ring-0 peer/email"
                placeholder=" "
            />
            <label
                htmlFor="email"
                className="mt-5 ml-[20px] font-raleway font-[100] text-black text-[17px] absolute text-sm duration-300 transform -translate-y-6 scale-75 top-[70px] -z-10 origin-[0] peer-focus/email:left-0 peer-placeholder-shown/email:scale-100 peer-placeholder-shown/email:translate-y-0 peer-focus/email:scale-75 peer-focus/email:-translate-y-6"
            >
                EMAIL
            </label>
            <input
                type="phone"
                id="phone"
                className="mt-5 block py-2.5 px-0 w-[390px] text-sm text-black bg-transparent border-0 border-b-[1px] border-black appearance-none focus:outline-none focus:ring-0 peer/phone"
                placeholder=" "
            />
            <label
                htmlFor="phone"
                className="mt-5 ml-[20px] font-raleway font-[100] text-black text-[17px] absolute text-sm duration-300 transform -translate-y-6 scale-75 top-[130px] -z-10 origin-[0] peer-focus/phone:left-0 peer-placeholder-shown/phone:scale-100 peer-placeholder-shown/phone:translate-y-0 peer-focus/phone:scale-75 peer-focus/phone:-translate-y-6"
            >
                PHONE
            </label>
            <input
                type="text"
                id="message"
                className="mt-[80px] block py-2.5 px-0 w-[390px] text-sm text-black bg-transparent border-0 border-b-[1px] border-black appearance-none focus:outline-none focus:ring-0 peer/message"
                placeholder=" "
            />
            <label
                htmlFor="message"
                className="mt-5 ml-[20px] w-[390px] font-raleway font-[100] text-black text-[17px] absolute text-sm duration-300 transform -translate-y-6 scale-75 top-[190px] -z-10 origin-[0] peer-focus/message:left-0 peer-placeholder-shown/message:scale-100 peer-placeholder-shown/message:translate-y-0 peer-focus/message:scale-75 peer-focus/message:-translate-y-6"
            >
                MESSAGE
            </label>
            <div className="text-right mt-[24px]">
                <input
                    type="submit"
                    value="ENVIAR"
                    className="cursor-pointer font-bebas-neue font-[700] text-[17px] border-[1px] border-[#202020] px-[16px] py-[4px]"
                />
            </div>
        </form>
    );
}
