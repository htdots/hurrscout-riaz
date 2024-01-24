'use client';
import React from 'react'
import '../../app/customfont.css'
export default function HeroSection() {
  return (
    <div className="bg-[#242c3c] mt-[110px] md:mt-[120px] text-white px-3 md:px-5 w-full flex flex-col items-center justify-center gap-y-10 pt-20 lg:pt-32 pb-20">
      <div className="py-5 flex flex-col head-text gap-y-8 md:flex-row items-center justify-center w-[100%] lg:w-[90%] xl:w-[86%] ">
        <h5 className="text-[46px] font-custom sm:text-[48px] md:text-[45px] lg:text-[53px] xl:text-[60px] font-[900] md:w-[50%] text-center">VIND EN REAGEER ALS
          <span className="inline-block transform text-[#242c3c] p-1 skewed-bg-text">EERSTE</span>
          OP EEN HUUR WONING</h5>
      </div>
      <button className='big-screen px-10 font-bold uppercase md:px-8 py-3 mt-6 bg-[#ff8049] hover:bg-[#ff7236f1] text-white rounded-3xl'>Stel Whatsapp alert in</button>
    </div>

  )
}
