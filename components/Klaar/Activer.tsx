import React from 'react'
import Image from 'next/image';

import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import image from '@/public/visa-payment-white.png';
export default function Activer() {
    return (
        // The Container div
        <div className='px-2 md:px-[20px] my-[140px]'>

            <div className='flex flex-col'>

                <div className='text-center relative bottom-[140px] '>
                    <span className='bg-[#51b37e] rounded-full text-center text-lg px-10 md:px-9 py-5 md:py-4 my-6 text-white md:text-[30px] font-bold mb-20'>Activeer</span>
                </div>

                <div className='mx-auto text-center my-[40px] relative bottom-5'> {/* Adding mx-auto to center the image */}
                    <Image src={image} alt="" />
                </div>

            </div>
            <div className='mx-8'>
                <hr />
            </div>



            {/* Outer div of pricing */}
            <div className='lg:flex  my-12 px-2 md:px-8 lg:px-12'>
                <div>
                    <h1 className='text-[26px] my-4 mr-6 md:text-[30px] lg:text-[40px] font-bold'>Dit gaat er voor jou veranderen</h1>
                    <p className='text-[18px] md:text-[24px]'>Een makelaar voegt een woning toe:</p>

                </div>

                <div className='flex flex-col  mt-5 mb-10'>
                    <h1 className='text-[16px] md:text-[34px] font-bold text-left'>Oude manier</h1>

                    <h5 className="text-[15px] md:text-[20px] lg:text-[18px] flex items-center  border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block pt-2 mr-3">
                            <RxCross2 size={25} className="bg-[#FF8049] rounded-full py-1 p-1 mb-1 text-white" />
                        </span>
                        Jij checkt dagelijks elke woningsite handmatig
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center   border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3 pt-2">
                            <RxCross2 size={25} className="bg-[#FF8049] rounded-full p-1 mb-1 text-white" />
                        </span>
                        Jij ziet een woning gemiddeld pas na 18 uur
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center  border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3 pt-2">
                            <RxCross2 size={25} className="bg-[#FF8049] rounded-full py-1 mb-1 text-white" />
                        </span>
                        Je reageert te laat op de woningen
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center   border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3  pt-2">
                            <RxCross2 size={25} className="bg-[#FF8049] rounded-full py-1 mb-1 text-white" />
                        </span>
                        De woning is weg
                    </h5>
                </div>

                {/* this div is for green color lines */}

                <div className='flex flex-col  mt-5 mb-10 '>
                    <h1 className='text-[16px] md:text-[34px] font-bold text-left'>Huurscout manier</h1>

                    <h5 className="text-[14px] md:text-[24px] lg:text-[20px] flex items-center   border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3">
                            <FaCheck size={25} className="bg-green-700 rounded-full py-1 p-1 mb-1 text-white" />
                        </span>
                        Jouw zoekbot checkt dag en nacht 1.400+ websites
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center  border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3">
                            <FaCheck size={25} className="bg-green-700 rounded-full  p-1 mb-1 text-white" />
                        </span>
                        Je krijgt binnen 30 sec een WhatsApp of mail
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center   border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3">
                            <FaCheck size={25} className="bg-green-700 rounded-full mt-2 p-1 mb-1 text-white" />
                        </span>
                        Je reageert als eerste op de woning
                    </h5>

                    <h5 className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center   border-b-2 pb-4 border-[#B8B6E7] p-2">
                        <span className="inline-block mr-3">
                            <FaCheck size={25} className="bg-green-700 rounded-full mt-2 p-1 mb-1 text-white" />
                        </span>
                        Grote kans om de woning te krijgen
                    </h5>
                </div>

            </div>
        </div>
    )
}

