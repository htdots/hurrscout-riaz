"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import img1 from '../../public/boy-image.png'
import img2 from '../../public/boy-white.png'



export default function Hero() {
    const [details, setDetails] = useState(
        {
            id: 0,
            status: 'Een moment',
            loading: 'We verifieren jouw betaling ...',
            button: 'Sluit deze pagina niet af.',
            color: '#ffffff',
            img: img1,
        },
    )

    useEffect(() => {
        //settimeout should stop editing details for 5 seconds
        setTimeout(() => {
            setDetails({
                id: 1,
                status: 'SUCCESS',
                loading: 'Jouw betaling is geslaagd!',
                button: 'Bekijk account',
                color: '#fbf4ea',
                img: img2,

            });
        }, 3000);

    }, [])



    return (
        <>
            <div className={` mt-[120px] bg-[${details.color}] py-16 flex items-center justify-center flex-col md:py-26 gap-y-12`}>
                <h6 className="font-bold text-sm md:text-[16px]">{details.status}</h6>
                <Image src={details.img} className={`${details.id === 1 ? 'sm:w-[450px] lg:w-[480px] xl:w-[520px]' : 'sm:w-[370px] lg:w-[410px] xl:w-[430px]'} sm:h-[210px] lg:h-[270px] xl:h-[280px] `} alt="" />
                <p className="font-bold text-center px-20 md:text-[19px]">{details.loading}</p>

                <button className={`${details.id === 1 ? 'font-semibold py-4 md:py-3 uppercase rounded-full px-12 md:px-5 bg-[#51b37e] md:text-lg text-white' : ''}`}>
                    {details.button}
                </button>

            </div>


        </>

    )
}