"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import girlImage from '@/public/girl-image.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Step = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        {
            id: 0,
            title: 'Vertel ons jouw woonwensen',
            image: girlImage,
            step: 1,
            desc: 'Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen.',
            color: '#b8b6e7',
        },
        {
            id: 2,
            title: 'Vertel ons jouw woonwensen',
            image: girlImage,
            step: 2,
            desc: 'Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen.',
            color: '#b8b6e7',
        },
        {
            id: 3,
            title: 'Vertel ons jouw woonwensen',
            image: girlImage,
            step: 3,
            desc: 'Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen.',
            color: '#b8b6e7',
        },
        // Add more cards as needed
    ];
    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const percentageComplete = (currentCardIndex) / (cards.length - 1) * 100;
    const barColor = `linear-gradient(90deg, #b8b6e7 ${percentageComplete}%, #42485e ${percentageComplete}%)`;
    const currentCard = cards[currentCardIndex];
    return (
        <div className="w-full flex flex-col gap-y-10 px-5  justify-center items-center py-8 bg-[#242c3c]">
            <div className="flex justify-center items-center flex-col px-5 w-full py-5">
                <h5 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-[900] sm:w-[80%] md:w-[40%] md:text-center uppercase mb-5 md:mb-10 text-white">Hoe werkt HUURSCOUT</h5>
            </div>

            <div className="bg-[#FBF4EA] flex flex-col gap-y-10 items-center justify-center sm:px-5 px-2 w-full lg:w-[35%] py-5 pt-10 rounded-lg">
                <div className={`bg-${currentCard.color} flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6`}>
                    <p className="font-bold text-black text-[16px] md:text-[35px] mx-2 md:mx-auto md:max-w-[80%]">{currentCard.title}</p>
                    <Image src={currentCard.image} alt={currentCard.title} className="mx-2 md:mx-auto md:max-w-[80%]" width={500} height={500} />


                    <div className="flex items-center justify-start gap-x-3">
                        <div className="flex flex-col gap-y-3  md:text-sm items-start justify-center ">
                            <h6 className="font-bold ">STAP {currentCard.step}/3</h6>
                            <p className='text-[14px] md:text-[20px]'>{currentCard.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex mb-10 items-center  lg:px-16 justify-between pb-10 pt-5  ">

                <div className={`w-44 py-[3px]  border border-[#42485e]  rounded-2xl`} style={{ background: barColor }}>
                </div>

                <div className="flex items-center gap-x-2">
                    <IoIosArrowBack onClick={prevCard} size={45} className='bg-white flex items-center  cursor-pointer p-3 rounded-full text-[#242c3c] ' />
                    <IoIosArrowForward onClick={nextCard} size={45} className=' bg-white flex items-center cursor-pointer p-3 rounded-full text-[#242c3c] ' />
                </div>
            </div>
        </div>
    );
};

export default Step;

