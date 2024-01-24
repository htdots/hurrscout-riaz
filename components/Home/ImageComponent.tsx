import React from 'react';
import Image from 'next/image';
import image from '@/public/home2.png';

export default function ImageComponent() {
    return (
        // This is outer div
        <div className='bg-[#B8B6E7]  py-[50px]'>

            {/* the first div */}
            <div className='lg:flex justify-between mx-auto'>
                {/* First div is for heading */}
                <h1 className='mx-auto px-5 lg:px-[150px]  lg:pt-[140px] pb-[20px] text-[26px] md:text-[45px] lg:text-[53px] xl:text-[60px] font-extrabold md:w-[50%] uppercase'>
                    Waarom is een huurwoning vinden zo moeilijk
                </h1>
                {/* The second div is for description */}
                <div className='mx-auto px-5 md:max-w-[50%] lg:px-[150px] lg:py-[140px]'>
                    <p className='text-[16px] md:text-[22px]  mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className='text-[16px] md:text-[22px] py-3 mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            {/* The second div */}


            <div className='lg:flex justify-between items-center mx-auto'>
                {/* First div is for heading */}

                <div className='mx-auto px-4 md:max-w-[60%] lg:py-5'>
                    <Image
                        src={image}
                        alt="Your Image Alt Text"
                        width={900}
                        height={900}
                        className='w-full py-4 md:max-w-[80%] mx-auto rounded-[26px] h-[400px]'
                       
                    />
                    <p className='text-[16px] md:px-16 md:text-[20px] my-4'>
                        Met name in Amsterdam is 40% gestegen
                    </p>
                </div>


                {/* The second div is for description */}
                <div className='mx-auto  md:max-w-[50%]'>
                    <p className='text-[16px] md:text-[20px] px-4 md:max-w-[70%] mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    </p>
                </div>
            </div>


        </div>
    )
}
