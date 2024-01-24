"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

import img1 from '../../public/home1.png'
import img2 from '../../public/home2.png'
import img3 from '../../public/home3.png'


export default function Showcase() {

  return (
    <>
      <div className="bg-[#242c3c] py-10 text-white px-3 md:px-5 w-full flex flex-col items-center justify-center gap-y-10 overflow-hidden md:my-7 rounded-2xl">
        <div className="py-7 flex flex-col gap-y-16 xl:flex-row items-center justify-between w-[100%] lg:w-[90%] xl:w-[100%] ">
          <h5 className="text-[26px] uppercase sm:text-[32px] md:text-[29px] lg:text-[35px] xl:text-[45px] font-extrabold w-[80%] md:w-[60%] xl:w-[32%] ">Huurscout vond <span className=" text-[#FF7E4B] ">179</span> huurwoningen in <span className="text-underline border-b-4 border-white"> amsterdam < IoCaretDownSharp className="inline" /></span> </h5>

          <div className="overflow-x-scroll sm:overflow-auto w-full xl:w-auto block md:flex justify-center items-center">

            <div className="w-[1500px] sm:w-[1800px] md:w-auto gap-x-6 overflow-hidden md:overflow-auto flex md:flex-col items-center justify-center gap-y-20">
              {/* line 1 */}
              <div className="flex items-center justify-center gap-x-6 ">

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img1} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">65 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img2} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img3} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

              </div>

              {/* line 2 */}
              <div className="flex items-center justify-center gap-x-6">

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img1} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">65 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img2} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img3} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

              </div>

              {/* line 3 */}
              <div className="flex items-center justify-center gap-x-6">

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img1} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">65 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img2} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="rounded-xl flex-col overflow-hidden  ">
                    <Image src={img3} alt="" className="w-[170px] h-[140px] sm:h-[200px] sm:w-[240px]" />
                    <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
                  </div>
                  <h1 className="text-center font-bold">Jan Luijkenstraat</h1>
                  <p className="text-center text-sm">Pararius</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}