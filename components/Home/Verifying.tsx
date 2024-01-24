"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import trust from '../../public/trustpilot.png'
import { IoIosArrowBack, IoMdCheckmark } from "react-icons/io";
export default function Verifying() {
  return (
    <div className="w-full  py-3 md:pb-10 text-black md:px-5  flex flex-col items-center justify-center">
      <div className="py-7 px-5 sm:px-5 flex flex-col gap-y-8 xl:flex-row items-center lg:items-start xl:justify-around w-[100%] lg:w-[90%] xl:w-[96%] text-black">
        <div className="flex flex-col gap-y-4">
          <Image className="shadow-xs big-screen" src={trust} alt="" />
          <p className="w-full sm:w-[80%] lg:w-[51%] font-semibold text-[22px]">Ben jij ook op zoek naar een huurwoning? Ontvang het nieuwste woningaanbod van 2.300+ huizensites direct via WhatsApp of e-mail, zodat je als eerste kunt reageren en bezichtigen! </p>
        </div>
      </div>

      <div className=" gap-y-8 md:gap-y-3 rounded-t-2xl bg-white py-2 pb-10 w-full md:w-[800px]">
        <div className="flex shadow-lg bg-white w-full pb-4 small-screen justify-center align-center">
          <button className='px-6 font-bold uppercase md:px-8 py-3 mt-1 bg-[#ff8049] hover:bg-[#ff7236f1] text-white rounded-3xl'>Stel Whatsapp alert in</button>
        </div>
        <div className="flex py-4 small-screen mx-10 my-6 shadow-lg px-5 rounded-full justify-center align-center">
          <Image className="shadow-xs" src={trust} alt="" />
        </div>
        <div className=" px-4 m-auto">
          <div className='flex items-center gap-x-4 py-3 border-b'>
            <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 ' />
            <h6 className='text-sm md:text-[16px] max-w-[85%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
          </div>

          <div className='flex items-center gap-x-4 py-3 border-b'>
            <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 ' />
            <h6 className='text-sm  md:text-[16px] max-w-[85%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
          </div>

          <div className='flex items-center gap-x-4 py-3 '>
            <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 ' />
            <h6 className='text-sm  md:text-[16px] max-w-[85%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
          </div>

        </div>

      </div>
    </div>
  )
}
