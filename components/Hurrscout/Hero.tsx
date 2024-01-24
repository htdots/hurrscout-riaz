import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen bg-[#242c3c] my-2 flex justify-center items-center flex-col'>
      <h5 className="px-3 mt-20 text-[40px] text-white sm:text-[48px] md:text-[45px] lg:text-[53px] xl:text-[60px] font-extrabold md:w-[50%] text-center">VIND EN REAGEER ALS <span className="bg-[#FF7E4B] text-black p-1">EERSTE</span> OP EEN HUUR WONING</h5>
      <button className='uppercase bottom-4 bg-[#FF8049] rounded-full py-3 my-auto px-4 md:px-10 text-white font-bold text-[18px] md:text-[20px] lg:text-[25px]'>set WhatsApp alert in</button>

    </div>
  )
}