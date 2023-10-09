"use client";
import React, { useState } from "react";
import restIcon from "../../../../public/svg/resticon.svg";
import Image from "next/image";


const NavbarRestaurant = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);

  const handleClick = (index) => {
    setActiveLinkIndex(index);
  };

  const links = [
    { text: "Chinese", url: restIcon },
    { text: "Sea Food", url: restIcon },
    { text: "Fast Food", url: restIcon },
    { text: "Pizza", url: restIcon },
    { text: "Indian", url: restIcon },
    { text: "Kebab", url: restIcon },
    { text: "Sea Food", url: restIcon },
    { text: "Pizza", url: restIcon },
    { text: "Italian", url: restIcon },
    { text: "Turkish", url: restIcon },
    { text: "Japan", url: restIcon },
  ];

  return (
    <div
      className="w-[250px] bg-[#F3F4F6] p-6 flex-none"
      style={{ maxHeight: "600px", overflowY: "auto" }}>
      <ul className="font-semibold text-lg text-[#333333] flex flex-col gap-5">
        {links.map((link, index) => (
          <li
            key={index}
            className={`flex p-1 gap-3 items-center cursor-pointer ${
              index === activeLinkIndex ? "text-[#D63626] bg-[#cfc3c2]" : ""
            }`}
            onClick={() => handleClick(index)}>
            <Image src={link.url} />
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarRestaurant;
