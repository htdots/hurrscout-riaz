import React from 'react'
import Image from 'next/image';
import image from '@/public/trustpilot.png';
import { FaCheck } from "react-icons/fa6";
export default function Trustpilot() {
    return (

        // this is the outer div
        <div className='bg-[#FBF4EA] md:flex justify-around mx-auto px-4 items-center my-14 py-[20px]'>


            {/* this is the left div */}
            <div className=' text-center mx-auto]'>
                <div className=" py-2  mx-10 my-6 px-4 bg-white  justify-center align-center">
                    <Image className="shadow-xl p-3 rounded-full" src={image} alt="" />
                </div>
                <p className='max-w-[500px] text-center  text-[18px] md:text-[25px]'>Ben jij ook op zoek naar een huurwoning? Ontvang het nieuwste woningaanbod van 2.300+ huizensites direct via WhatsApp of e-mail, zodat je als eerste kunt reageren en bezichtigen! </p>
            </div>

            {/* this is the right div */}

            <div className='bg-white rounded-2xl max-w-[500px]'>

                <p className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center  border-b-2  border-[#B8B6E7] py-8 px-5  ">
                    <span className="inline-block mr-2">
                        <FaCheck size={30} className="bg-green-700 rounded-full p-1 mb-1 mx-2 text-white" />
                    </span>
                    Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.
                </p>

                <p className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center  border-b-2  border-[#B8B6E7] py-8 px-5">
                    <span className="inline-block mr-2">
                        <FaCheck size={30} className="bg-green-700 rounded-full p-1 mb-1 mx-2 text-white" />
                    </span>
                    Reageer als eerste en word veel vaker uitgenodigd voor een bezichtiging.
                </p>

                <p className="text-[16px] md:text-[24px] lg:text-[20px] flex items-center  border-b-2 border-[#B8B6E7] py-8 pb-14 px-5">
                    <span className="inline-block mr-2">
                        <FaCheck size={30} className="bg-green-700 rounded-full p-1 mb-1 mx-2 text-white" />
                    </span>
                    Vind samen met Huurscout woningen in heel NL (niet alleen de grote steden)
                </p>



            </div>

        </div>
    )
}
