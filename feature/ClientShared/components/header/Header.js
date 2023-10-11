"use client";
import Image from "next/image";
import React, { useState } from "react";
import flag from "../../../../public/svg/englishFlag.svg";
import Link from "next/link";
import SignButton from "../signInButton/SignInButton";
import basket from "../../assets/basket.svg";
import { RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [showFoodyText, setShowFoodyText] = useState(true);
  const [showInput, setShowInput] = useState(false);
 

  const toggleFoodyText = () => {
    setShowFoodyText(!showFoodyText);
    setShowInput(!showInput);

  };

  const handleLinkClick = (index) => {
    setActiveLinkIndex(index);
  };

  const links = [
    { text: "Home", href: "/" },
    { text: "Restaurants", href: "/restaurants" },
    { text: "About us", href: "/about" },
    { text: "How it works", href: "/howItWorks" },
    { text: "FAQs", href: "/FAQs" },
  ];

  return (
    <div className="min-w-full h-[120px] gap-4 flex justify-between items-center bg-[#F3F4F6] p-9">
      <div
        className={`${
          showFoodyText ? "w-[150px]" : "w-[]"
        }  h-[30] gap-3 flex justify-center items-center font-extrabold text-4xl`}>
        <div className="lg:hidden block mt-2">
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4688 15.5H0.09375V13H15.4688V15.5ZM23.1562 0.5V3H0.09375V0.5H23.1562ZM15.4688 9.25H0.09375V6.75H15.4688V9.25Z"
                fill="#181617"
              />
            </svg>
          </button>
        </div>
        {showFoodyText && (
          <div>
            Foody<span className="text-[#D63626]">.</span>
          </div>
        )}
      </div>
      <div className="hidden lg:block w-[520px]">
        <ul className="flex justify-center gap-8 font-medium text-lg text-[#828282]">
          {links.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                index === activeLinkIndex ? "text-[#D63626]" : ""
              }`}
              onClick={() => handleLinkClick(index)}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-1 sm:w-[300px] sm:h-[45px] rounded-lg sm:block ${
          showInput ? "block" : "hidden"
        }`}>
        <motion.input
          initial={{ width: 0 }}
          animate={{ width: showInput ? "100%" : "80%" }}
          transition={{ duration: 0.2}}
          className="sm:w-[300px] sm:h-[45px] rounded-lg p-4"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-4">
        <div className="bg-[#D63626] w-[41px] h-[41px] rounded-full text-white sm:hidden">
          <button
            className="flex justify-center items-center w-[41px] h-[41px] cursor-pointer"
            onClick={toggleFoodyText}>
            <RiSearch2Line size={25} />
          </button>
        </div>
        <div className="flex items-center w-[41px] h-[41px]">
          <Image className="cursor-pointer" src={flag} />
        </div>
        <div className="flex gap-4 hidden">
          <div className="w-[44px] relative h-[44px] text-center cursor-pointer flex justify-center items-center rounded-full bg-[#EB5757]">
            <span className="absolute bg-[#D63626] text-white top-[-10px] w-6 text-center right-[-4px] rounded-full text-">
              2
            </span>
            <Image src={basket} />
          </div>
          <div className="w-[44px] relative h-[44px] text-white text-xl cursor-pointer flex justify-center items-center rounded-full bg-[#F178B6]">
            <p>MP</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <SignButton url="/login" text="Sign up" />
      </div>
    </div>
  );
};

export default Header;
