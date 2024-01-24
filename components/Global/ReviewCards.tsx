import Link from "next/link";
import React from "react";
import Image from "next/image";

import trustpilot from '../../public/trustpilot.png'
import profile from '../../public/profile-pic.png'
import rating from '../../public/rating.png'

export default function ReviewCards({ color }) {
    return (
        <div className="bg-white">
            <div className={`w-full flex flex-col gap-y-10 rounded-t-2xl justify-center items-center py-8  md:pb-16 bg-[${color}]`}>
                <div className="flex justify-center    items-center flex-col px-5 w-full py-5">
                    <h5 className="text-[28px] sm:text-[32px] mx-3 md:text-[40px] lg:text-[50px] font-[900] px-7 sm:w-[80%] md:w-[60%]  text-center  uppercase mb-5 md:mb-10">Wat anderen zeggen over huurscout</h5>
                    <div className=" py-2  mx-10 my-6 px-4 bg-white  justify-center align-center">
                        <Image className="shadow-xl p-3 rounded-full" src={trustpilot} alt="" />
                    </div>
                </div>

                <div className="flex  flex-col gap-y-10 items-center justify-center sm:px-5 px-2  w-full lg:w-[90%] py-5 pt-10">

                    <div className="bg-[#b8b6e7] flex flex-col rounded-2xl items-start justify-center p-4  gap-y-6">
                        <Image src={rating} alt="" className=" " />
                        <p className="font-semibold text-black text-[16px] md:text-[20px]">“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”</p>

                        <div className="flex items-center justify-start gap-x-3">
                            <Image src={profile} className="rounded-full md:h-[70px] md:w-[70px]" alt="" />
                            <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                                <h6 className="font-bold">ERIK VAN VEEN</h6>
                                <p>Geschreven op <span className="underline">Trustpilot</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6">
                        <Image src={rating} alt="" className=" " />
                        <p className="font-semibold text-black text-[16px] md:text-[20px]">“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”</p>

                        <div className="flex items-center justify-start gap-x-3">
                            <Image src={profile} className="rounded-full md:h-[70px] md:w-[70px]" alt="" />
                            <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                                <h6 className="font-bold">TOM BREMERKAMP</h6>
                                <p>Geschreven op <span className="underline">Trustpilot</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#b8b6e7] flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6">
                        <Image src={rating} alt="" className=" " />
                        <p className="font-semibold text-black text-[16px] md:text-[20px]">“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”</p>

                        <div className="flex items-center justify-start gap-x-3">
                            <Image src={profile} className="rounded-full md:h-[70px] md:w-[70px]" alt="" />
                            <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                                <h6 className="font-bold">STEFAN KALTER</h6>
                                <p>Geschreven op <span className="underline">Trustpilot</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#ff8049] flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6">
                        <Image src={rating} alt="" className=" " />
                        <p className="font-semibold text-black text-[16px] md:text-[20px]">“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”</p>

                        <div className="flex items-center justify-start gap-x-3">
                            <Image src={profile} className="rounded-full md:h-[70px] md:w-[70px]" alt="" />
                            <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                                <h6 className="font-bold">ERIK VAN VEEN</h6>
                                <p>Geschreven op <span className="underline">Trustpilot</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6">
                        <Image src={rating} alt="" className=" " />
                        <p className="font-semibold text-black text-[16px] md:text-[20px]">“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”</p>

                        <div className="flex items-center justify-start gap-x-3">
                            <Image src={profile} className="rounded-full md:h-[70px] md:w-[70px]" alt="" />
                            <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                                <h6 className="font-bold">TEUN DECKERS</h6>
                                <p>Geschreven op <span className="underline">Trustpilot</span></p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
