import React from 'react';
import Image from "next/image";
// import iconwhatsapp from '@/public/whatsapp.png';
// import iconmail from '@/public/gmail.png';
// import iconmap from '@/public/googlemap.png';
import iconwhatsapp from '@/public/wtsap.png';
import iconmail from '@/public/mail.png';
import iconmap from '@/public/locationicon2.png';

export default function ContactUs() {
    return (
        <div className='bg-[#EEDEC5] mt-[110px] md:mt-[120px] lg:flex justify-evenly items-center px-5 md:px-28 lg:px-10 py-16'>

            {/* Left div */}
            <div>
                <h1 className='text-[35px] md:text-[45px] lg:text-[60px] font-[900] uppercase leading-[1.0] pb-10'>Vragen of suggesties?</h1>
                <h3 className='pl-1 md:text-[18px] py-4 font-bold'>Kom maar op</h3>
                <p className='pl-1 text-sm md:text-[18px] lg:w-[55%]'>
                    Kom maar door met je bericht. We reageren gewoonlijk binnen 24 uur. Kom maar door met je bericht. We reageren gewoonlijk binnen 24 uur.
                </p>
            </div>

            {/* Right div */}
            <div className='m-auto'>
                {/* For Whatsapp */}
                <a href="//api.whatsapp.com/send?phone=91MOBILE_NUMBER&text=Interested%20in%20your%20offer!" title="On whatsapp">
                    <div className='bg-white flex py-3 sm:w-[60%] md:w-[75%] lg:w-[100%] rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]'>
                        <div className='px-4 sm:px-1'>
                            <Image className='pt-4' src={iconwhatsapp} width={34} height={24} alt="WhatsApp Icon" />

                        </div>
                        <div className='mx-2 py-2'>
                            <h4 className='font-bold text-[16px] md:text-[20px]'>Via Whatsapp</h4>
                            <p className='text-[16px] md:text-[18px] underline-on-hover'>+31625165304</p>
                        </div>
                    </div>
                </a>

                {/* For Email */}
                <a href="mailto:dummy@gmail.com?subject=Interested%20in%20your%20offer!">
                    <div className='bg-white flex py-3 sm:w-[60%] md:w-[75%] lg:w-[100%] rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]'>
                        <div className='px-4 sm:px-1'>
                            <Image src={iconmail} alt="WhatsApp Icon" width={28} height={24} className='pt-3 sm:w-40 sm:h-12' />
                        </div>
                        <div className='mx-2'>
                            <h4 className='font-bold text-[16px] md:text-[20px]'>Via Email</h4>
                            <p className='text-[16px] md:text-[18px] underline-on-hover'>info@huurscout.nl</p>
                        </div>
                    </div>

                </a>

                {/* For Solostraat */}

                <div className='bg-white flex py-3 sm:w-[60%] md:w-[75%] lg:w-[100%] rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]'>
                    <div className='px-4 sm:px-0'>
                        <Image src={iconmap} width={28} height={24} alt="WhatsApp Icon" className='pt-3 sm:w-31 sm:h-12' />
                    </div>
                    <div className='mx-2 my-2'>
                        <h4 className='font-bold text-[16px] md:text-[20px]'>Solostraat 73</h4>
                        <p className='text-[16px] md:text-[18px] underline-on-hover'>1059 GV Amsterdam</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
