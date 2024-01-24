"use client";
import React, { useState } from "react";
import logo from "../../public/logo coloured.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ContactDetail from "../Global/ContactDetail";
import Link from "next/link";


export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  }
  const handleMenuLinkClick = () => {
    setTimeout(() => {
      setMenuToggle(false);
    }, 300); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <nav className='py-3 md:py-9 px-3  md:px-6 w-full bg-[#242c3c] '>
          <div className="container flex p-0 justify-between  items-center">
            {/* logo */}
            <div>
              <Image src={logo} alt="logo" className="w-[155px] sm:w-[170px] lg:w-[200px]" />
            </div>
            {/* right content */}
            <div className='items-center gap-x-10 text-md font-semibold text-white  hidden md:flex'>
              <Link href='/'><h6 className='cursor-pointer font-extrabold hover:text-[#FF7E4B]'>Maar Hoe? </h6></Link>
              <Link href='/Reviews'><h6 className='cursor-pointer font-extrabold hover:text-[#FF7E4B]'>Reviews</h6></Link>
              <Link href='/Klaar'><h6 className='cursor-pointer font-extrabold hover:text-[#FF7E4B]'>Over Ons</h6></Link>
              <Link href='/Verifiren'><h6 className='cursor-pointer font-extrabold hover:text-[#FF7E4B]'>Vragen?</h6></Link>
              <Link href='/ContactUs'><h6 className='cursor-pointer font-extrabold hover:text-[#FF7E4B]'>Contact</h6></Link>
            </div>

            {/* menu icon */}
            <IoMenu onClick={handleMenu} size={36} className='block bg-white p-2 rounded-full text-[#242c3c] md:hidden cursor-pointer' />
          </div>
        </nav>
        <ContactDetail />

      </div>
      {/* Menu Sidebar */}
      <div className={`${menuToggle ? 'right-0' : '-right-[100vh]'}  py-10 border-l-2 border-[#FF7E4B] bg-[#242c3c] fixed z-50 top-0 transition-all duration-300 w-[300px] px-3 h-full flex-col gap-y-24`}>
        <div className="flex justify-end w-full mb-9">
          <RxCross2 onClick={handleMenu} size={36} className="cursor-pointer bg-white p-2 rounded-full text-[#242c3c] " />
        </div>

        <div className="flex flex-col gap-y-5 w-full px-2">

          <Link href='/'>         <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide   hover:text-[#FF7E4B]  mt-3' onClick={handleMenuLinkClick}>MAAR HOE? </h6></Link>
          <Link href='/Reviews'>  <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide hover:text-[#FF7E4B]' onClick={handleMenuLinkClick}>REVIEWS</h6></Link>
          <Link href='/Klaar'>    <h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide hover:text-[#FF7E4B]' onClick={handleMenuLinkClick}>OVER ONS</h6></Link>
          <Link href='/Verifiren'><h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide hover:text-[#FF7E4B]' onClick={handleMenuLinkClick}>VRAGEN?</h6></Link>
          <Link href='/ContactUs'><h6 className='cursor-pointer text-white font-[900]  text-[20px] tracking-wide hover:text-[#FF7E4B]' onClick={handleMenuLinkClick}>CONTACT</h6></Link>
        </div>
      </div>
    </>
  );
}