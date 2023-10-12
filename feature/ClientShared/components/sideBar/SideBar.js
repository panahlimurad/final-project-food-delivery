"use client";
import React, { useState } from "react";
import Link from "next/link";
import {BsBasket} from 'react-icons/bs'
import {PiBasketLight} from 'react-icons/pi'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {IoIosLogOut} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
// import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
const SideBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    // { text: "Profile", href: "/user/profile", url:FontAwesomeIcon,  },
    // { text: "Profile", href: "/user/profile", url: CgProfile,  },
    { text: "Your Basket", href: "/user/basket", },
    { text: "Your Orders", href: "/user/oders" , },
    { text: "Checkout", href: "/user/checkout", url : AiOutlineCheckSquare},
    { text: "Logout", href: "/user/logout" , url:IoIosLogOut},
  ];

  return (
    <>
    <div className="w-[325px]  h-[515px] bg-[#F3F4F6] lg:flex justify-center py-8 mt-5  hidden" >
     
   
        <ul className="  font-semibold text-xl  text-[#828282] leading-6">
          {links.map((link, index,url) => (
            <li 
              key={index}
              className={`cursor-pointer flex p-1 gap-3 items-center ${
                index === activeLink?  "bg-[#cfc3c2] text-[#D63626]" : ""
              }
              ${
              url === activeLink?  "bg-[#cfc3c2] text-[#D63626]" : ""
              }
              `}
              onClick={() => handleLinkClick(index)}>
              <Link className="flex  " href={link.href}>
                <Image src={link.url} className="mr-5" /> 
                {link.text}
                </Link>
            </li>
          ))}
        </ul>
      </div>
     
     
          </>
  );
};

export default SideBar;
