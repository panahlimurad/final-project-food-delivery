"use client";
import Image from "next/image";
import React, { useState } from "react";
import flag from "../../../../public/svg/englishFlag.svg";
import Link from "next/link";
import SignButton from "../signInButton/SignInButton";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
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
    <>
      <div className="min-w-full h-[120px] gap-4 flex justify-between items-center bg-[#F3F4F6] p-9">
        <div className="w-[150px]  h-[30] gap-3 flex justify-center items-center font-extrabold text-4xl">
          <button className="lg:hidden block mt-2" onClick={openMenu}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4688 15.5H0.09375V13H15.4688V15.5ZM23.1562 0.5V3H0.09375V0.5H23.1562ZM15.4688 9.25H0.09375V6.75H15.4688V9.25Z"
                fill="#181617"
              />
            </svg>
          </button>
          <div>
            Foody<span className="text-[#D63626]">.</span>
          </div>
        </div>
        <div className="hidden lg:block w-[520px]">
          <ul className="flex justify-center gap-8 font-medium text-lg text-[#828282]">
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  index === activeLinkIndex ? "text-[#D63626]" : ""
                }`}
                onClick={() => handleLinkClick(index)}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="float-left justify-center items-center hidden sm:block">
          <input
            className="w-[300px] h-[45px] rounded-lg p-4"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-cente bg-teal-700r">
          <Image className="cursor-pointer" src={flag} />
        </div>
        <div className="hidden lg:block">
          <SignButton url="/login" text="Sign up" />
        </div>
      </div>
      <div
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={closeMenu}
        className={`${
          showMenu
            ? "bg-overlay  fixed left-0 top-0 w-full h-full  z-[100]"
            : "hidden"
        }`}
      ></div>
      <div
        className={`${
          showMenu
            ? "mobile-menu  h-full fixed top-0 left-0 bg-white w-[256px] z-[111] p-4"
            : "hidden"
        }`}
      >
        <AiOutlineClose onClick={closeMenu} size={28} />
        <div className="text-center mt-12">
          <SignButton url="/login" text="Sign up" />
        </div>
        <div className="hidden  gap-3 mt-6 items-center font-medium">
          <img src="/svg/15.svg" alt="" />
          <div className="name">Sarkhan Rahimli</div>
        </div>
        <ul className="font-medium text-lg mt-24 text-[#828282]">
          {links.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer mb-4 ${
                index === activeLinkIndex ? "text-[#D63626]" : ""
              }`}
              onClick={() => handleLinkClick(index)}
            >
              <Link className="text-lg" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
