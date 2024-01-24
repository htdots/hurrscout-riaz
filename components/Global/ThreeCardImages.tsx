import Link from "next/link";
import React from "react";
import Image from "next/image";

import img1 from '../../public/home1.png'
import img2 from '../../public/home2.png'
import img3 from '../../public/home3.png'

export default function ThreeCardImages() {
  return (
    <div className="w-full rounded-t-2xl py-3 md:pb-10 bg-[#242c3c]  text-white  md:px-5  flex flex-col items-center justify-center gap-y-10">
    <div className="py-7 px-5 sm:px-5 flex flex-col gap-y-8 lg:flex-row items-start lg:items-center lg:justify-around w-[100%] lg:w-[90%] xl:w-[86%] text-white">
      <h5 className="text-[40px] sm:text-[48px] md:text-[45px] lg:text-[60px] font-[900] md:w-[50%]  uppercase ">Wij zijn pas tevreden als 
      <span className="inline-block transform text-[#242c3c] p-1 skewed-bg-text text-white ">jijdat</span>bent</h5>
      <p className="w-full sm:w-[80%] lg:w-[40%]">Probeer HuurScout uit, zonder risico. Als je binnen 14 dagen van gedachten verandert, dan zeg je eenvoudig op via jouw account of door te mailen naar <span className="text-[#FF7E4B]">support@huurscout.com.</span> Wij storten dan het aankoopbedrag terug.</p>
    </div>

    <div className="flex  items-center justify-center sm:px-5 px-2 lg:justify-around w-full lg:w-[90%] py-5 pt-10">
    <div className="rounded-3xl flex-col overflow-hidden relative lg:static left-6 bottom-16">
        <Image src={img1} alt="" className="w-[150px] h-[125px] sm:h-[150px] sm:w-[200px] md:h-[230px] lg:h-[280px] md:w-[250px] lg:w-[300px]"/>
        <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">65 m² / €1.250</p>
    </div>
    <div className="rounded-3xl flex-col overflow-hidden  relative lg:static right-4 bottom-9">
        <Image src={img2} alt="" className="w-[150px] h-[125px] sm:h-[150px] sm:w-[200px] md:h-[230px] lg:h-[280px] md:w-[250px] lg:w-[300px]"/>
        <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">120 m² / €1.250</p>
    </div>
    <div className="rounded-3xl flex-col overflow-hidden  relative lg:static right-8 bottom-0">
        <Image src={img3} alt="" className="w-[150px] h-[125px] sm:h-[150px] sm:w-[200px] md:h-[230px] lg:h-[280px] md:w-[250px] lg:w-[300px]"/>
        <p className="p-2 text-black bg-white text-center font-bold text-sm md:text-base">65 m² / €1.250</p>
    </div>
    </div>
    </div>
  );
}
