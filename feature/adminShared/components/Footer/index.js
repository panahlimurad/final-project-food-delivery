import React from "react";
import logo from "../../../../feature/adminFolders/assets/image/footer/footer-logo.svg";
import Image from "next/image";

const Footer = () => {

  return (
    <div className="w-[256px] h-[84px] mt-4 z-10 bg-[#27283C] rounded-[14px] hidden lg:flex items-center justify-center
    flex-col fixed bottom-10 left-3">
      <div className="w-[140px] h-[30px] flex items-center gap-3 p-3 ">
        <Image src={logo} alt="logo"/>
      </div>
      <div className="flex flex-col text-gray-500 text-center text-sm leading-4">
        <span>Version: 1.0</span>
        <span>2023</span>
      </div>
    </div>
  );
};

export default Footer;
