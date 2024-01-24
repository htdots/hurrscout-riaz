"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgboy from '../../public/Group 1.png'
import visa from '../../public/visa-payment.png'
import trustpilot from '../../public/trustpilot.png'
import Link from "next/link";

export default function Footer() {

  return (
    <>
      <div className="bg-[#b8b6e7]">
        <div className="bg-[#242c3c] rounded-t-2xl  text-white px-3 md:px-5 w-full flex flex-col items-center justify-center gap-y-10">
          <div className="py-7 flex flex-col gap-y-8 md:flex-row items-center justify-between w-[100%] lg:w-[90%] xl:w-[86%] ">
            <h5 className="text-[40px] sm:text-[48px] md:text-[45px] lg:text-[53px] xl:text-[60px] font-extrabold md:w-[50%] text-center">VIND EN REAGEER ALS
              <span className="bg-[#FF7E4B] text-black skewed-bg-text p-1">EERSTE</span>
              OP EEN HUUR WONING</h5>
            <Image src={imgboy} className="sm:h-[220px]  lg:h-[280px] xl:h-[300px] sm:w-[380px] lg:w-[430px] xl:w-[450px]" alt="" />
          </div>

          <div className="flex flex-col gap-y-1  lg:items-start lg:flex-row justify-around w-full px-3 py-5 text-[#bbbbbb] gap-x-3">
            <div className="flex flex-col  border-b lg:border-0 border-[#b0b0b0] py-3 lg:py-0">
              <h1 className="text-2xl font-bold text-white ">Huurscout</h1>
              <p className="mt-6 text-sm md:text-[16px] w-[80%] md:w-[40%] lg:w-[70%]">Ontvang nieuwe huurwoningen direct via WhatsApp of e-mail en wees de eerste die reageert.</p>
            </div>

            <div className=' items-start  lg:gap-y-5 text-md  flex-col flex  border-b lg:border-0 border-[#b0b0b0] py-3 lg:py-0 '>
              <h6 className="text-2xl font-bold text-white hidden lg:block">Content</h6>
              <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide lg:font-normal lg:text-[16px]  lg:tracking-normal lg:text-[#bbbbbb] hover:text-[#FF7E4B]  mt-3'>MAAR HOE? </h6>
              <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide lg:font-normal lg:text-[16px] lg:tracking-normal lg:text-[#bbbbbb] hover:text-[#FF7E4B]  '>REVIEWS</h6>
              <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide lg:font-normal lg:text-[16px] lg:tracking-normal lg:text-[#bbbbbb] hover:text-[#FF7E4B]  '>OVER ONS</h6>
              <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide lg:font-normal lg:text-[16px] lg:tracking-normal lg:text-[#bbbbbb] hover:text-[#FF7E4B]  '>VRAGEN?</h6>
              <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide lg:font-normal lg:text-[16px] lg:tracking-normal lg:text-[#bbbbbb] hover:text-[#FF7E4B]  '>CONTACT</h6>

              <Image src={visa} alt="" className="mt-3" />
            </div>

            <div className="text-[#f69670]  items-start gap-y-1 text-md  flex-col flex  py-3 pb-5 lg:py-0">
              <h6 className="text-2xl font-bold text-white ">Woningen per stad</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  mt-6'>Huurwoningen in Amsterdam</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Rotterdam</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Utrecht</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Den Haag?</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Amsterdam</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Rotterdam</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Utrecht</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Den Haag?</h6>
              <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline  '>Huurwoningen in Amsterdam</h6>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col lg:flex-row lg:items-center lg:justify-between px-5 lg:px-16 w-full py-5">
            <div className=" py-2 mx-10 my-6 px-4 bg-white rounded-full justify-center align-center">
              <Image className="shadow-xs" src={trustpilot} alt="" />
            </div>
            <div className="flex items-center gap-x-4 text-[#bbbbbb] text-center">
              <Link href='Privacy'><h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline text-sm sm:text-base'>Privacy policy</h6></Link>
              <Link href='Privacy'> <h6 className='cursor-pointer  hover:text-[#FF7E4B] hover:underline text-sm sm:text-base'>Terms & conditions</h6></Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}