"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import trust from '../../public/trustpilot.png'
import profile from '../../public/profile-pic.png'
import rating from '../../public/rating.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ReviewSection() {
  const cards =
    [
      {
        id: 0,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 1,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#fbf4ea',
      },
      {
        id: 2,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 3,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 4,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 5,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#fbf4ea',
      },
      {
        id: 6,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 7,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 8,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 9,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 10,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 11,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 12,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 13,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
    ]


  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const cp = currentPage;
  const tp = totalPages;

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const percentageComplete = (cp - 1) / (tp - 1) * 100;
  const barColor = `linear-gradient(90deg, #fd8047 ${percentageComplete}%, #ffe6db ${percentageComplete}%)`;
  return (
    <>
      <div className="w-full flex relative bottom-10 md:static  rounded-t-2xl flex-col gap-y-10 justify-center items-center py-8  bg-white">


        <div className="flex flex-col   gap-y-10 items-center lg:items-start justify-center sm:px-5 px-2 gap-x-3 w-full lg:flex-row lg:w-[94%] xl:flex-wrap py-5 pt-10">

          {currentCards.map((item) => (<div key={item.id} className={`bg-[#fbf4ea] mx-8 md:mx-0 flex flex-col lg:w-[500px] xl:w-[320px] rounded-2xl  items-start justify-center p-4 gap-y-6`}>
            <Image src={rating} alt="" className=" " />
            <p className="font-semibold text-black text-[16px] md:text-[20px]">{item.review}</p>

            <div className="flex items-center justify-start gap-x-3 pt-5" >
              <Image src={profile} className="rounded-full " alt="" />
              <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                <h6 className="font-bold">{item.name}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
          ))}



        </div>
      </div>

      <div className="w-full flex mb-10  relative bottom-10 md:static items-center px-5 lg:px-16 justify-between pb-10 pt-5 bg-white rounded-b-2xl">
        {/* bar for pages */}
        <div className={`w-36 py-[2px]  border border-[#ffe6db]  rounded-2xl`} style={{ background: barColor }}>
        </div>

        <div className="flex items-center gap-x-2">
          <IoIosArrowBack onClick={prevPage} size={45} className='border border-[#e2e8f0] flex items-center  cursor-pointer p-3 rounded-full text-[#242c3c] ' />
          <IoIosArrowForward onClick={nextPage} size={45} className='border border-[#e2e8f0] flex items-center cursor-pointer p-3 rounded-full text-[#242c3c] ' />
        </div>
      </div>

    </>
  )
}
