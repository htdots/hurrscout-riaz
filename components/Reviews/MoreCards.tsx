"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import trust from '../../public/trustpilot.png'
import profile from '../../public/profile-pic.png'
import rating from '../../public/rating.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function MoreCards() {
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
        color: '#fbf4ea',
      },
      {
        id: 12,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 13,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },
      {
        id: 14,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 15,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#fbf4ea',
      },
      {
        id: 16,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#ff8049',
      },
      {
        id: 17,
        review: '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
        name: 'ERIK VAN VEEN',
        desc: 'Geschreven op Trustpilot',
        color: '#b8b6e7',
      },

    ]


  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <>
      <div className="w-full mt-[110px] md:mt-[120px] flex flex-col gap-y-10 justify-center items-center py-8  bg-white">
        <div className="flex justify-center items-center flex-col px-5 w-full py-5">
          <h5 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-[900]  sm:w-[80%] md:w-[40%]  text-center  uppercase mb-5 md:mb-10">Wat anderen zeggen over huurscout</h5>
          <div className=" py-2  mx-10 my-6 px-4 bg-white  justify-center align-center">
            <Image className="shadow-xl p-3 rounded-full" src={trust} alt="" />
          </div>
        </div>

        <div className="flex  flex-col gap-y-10 items-center justify-center sm:px-5 px-2  w-full lg:w-[90%] py-5 pt-10">

          {currentCards.map((item) => (<div key={item.id} className={`bg-[${item.color}] flex flex-col rounded-2xl items-start justify-center p-4 gap-y-6`}>
            <Image src={rating} alt="" className=" " />
            <p className="font-semibold text-black text-[16px] md:text-[20px]">{item.review}</p>

            <div className="flex items-center justify-start gap-x-3">
              <div className="flex flex-col gap-y-1 text-[12px] md:text-sm items-start justify-center ">
                <h6 className="font-bold">{item.name}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>

      <div className="w-full flex items-center container justify-between pb-10 pt-5">
        <IoIosArrowBack onClick={prevPage} size={35} className=' flex items-center  cursor-pointer p-1 rounded-full text-[#242c3c] ' />

        {/* Page Numbers */}
        <div className="flex items-center gap-x-2">
          {Array.from({ length: Math.min(3, totalPages) }, (_, index) => (
            <div
              key={index + 1 + Math.floor((currentPage - 1) / 3) * 3}
              className={`${index + 1 + Math.floor((currentPage - 1) / 3) * 3 <= totalPages ? '' : 'hidden'} cursor-pointer border border-[#b8b6e7] rounded-full p-2 px-4 ${index + 1 + Math.floor((currentPage - 1) / 3) * 3 === currentPage ? 'bg-[#51b37e] text-white' : ''
                }`}
              onClick={() => setCurrentPage(index + 1 + Math.floor((currentPage - 1) / 3) * 3)}
            >
              {index + 1 + Math.floor((currentPage - 1) / 3) * 3 <= totalPages ? index + 1 + Math.floor((currentPage - 1) / 3) * 3 : 'h'}
            </div>
          ))}

          {totalPages > 3 && <div className="cursor-pointer px-4">...</div>}
          {/* Add the last button */}
          <div
            className={`cursor-pointer border border-[#b8b6e7] rounded-full p-2 px-4 ${totalPages === currentPage ? 'bg-[#51b37e] text-white' : ''
              }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </div>
        </div>

        <IoIosArrowForward onClick={nextPage} size={35} className=' flex items-center cursor-pointer p-1.5 rounded-full text-[#242c3c] ' />
      </div>

    </>
  )
}
