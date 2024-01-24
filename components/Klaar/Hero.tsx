import Link from "next/link";
import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";
import img1 from '../../public/home1.png'
import img2 from '../../public/home2.png'
import img3 from '../../public/home3.png'
import { useEffect } from "react";

export default function Hero() {
 
  return (
    <div className="w-full mt-40 py-3  rounded-t-xl text-black  md:px-5  flex flex-col items-center justify-center gap-y-10 overflow-hidden">
      <div className="py-7 px-5 md:flex justify-center gap-y-8   w-[100%] lg:w-[90%] xl:w-[86%] ">
        <BsExclamationCircle size={45} className="bg-[#FF8049] mt-1 absolute md:static md:mr-2 md:mt-4 rounded-full text-white " />
      

        <h5 className="text-[26px] pl-12 md:pl-1 ml-1 md:text-[45px] lg:text-[60px]  font-[900] md:w-[60%]  uppercase ">
          Jij hebt 100+ woningen gemist in de afgelopen 30 dagen</h5>

      </div>
    
      <div className="overflow-x-scroll sm:overflow-auto w-full block sm:flex justify-center items-center">

      <div className="flex items-center justify-center sm:justify-around w-[640px] gap-x-4 sm:gap-x-0 overflow-x-hidden sm:overflow-auto sm:w-[90%] md:w-[90%] lg:w-[80%] py-5">
        <div className="flex flex-col items-center overflow-hidden bg-[#EEDEC5] rounded-lg mr-2">
          <Image src={img1} alt="" className="w-[185px] h-[160px] sm:w-[200px] sm:h-[150px] md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[280px]" />
          <p className="text-black font-bold text-sm md:text-base">65 m² / €1.25</p>
        </div>
        <div className="flex flex-col items-center overflow-hidden bg-[#EEDEC5] rounded-lg mr-2">
          <Image src={img2} alt="" className="w-[185px] h-[160px] sm:w-[200px] sm:h-[150px] md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[280px]" />
          <p className="text-black font-bold text-sm md:text-base">120 m² / €1.25</p>
        </div>
        <div className="flex flex-col items-center overflow-hidden bg-[#EEDEC5] rounded-lg">
          <Image src={img3} alt="" className="w-[185px] h-[160px] sm:w-[200px] sm:h-[150px] md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[280px]" />
          <p className="text-black font-bold text-sm md:text-base">65 m² / €1.25</p>
        </div>
      </div>
      </div>

    </div>
  );
}



