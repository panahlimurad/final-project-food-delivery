"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import aboutImage from "../../../../../public/svg/aboutImage.svg";
import aboutImageSmall from "../../../../../public/svg/aboutImageSmall.svg";

const AboutImage = () => {
  const [width, setWidth] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    if (width < 640) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  return (
    <div className="flex-1 mt-5">
      <div className="flex  justify-center">
        <Image src={isSmallScreen ? aboutImageSmall : aboutImage} />
      </div>
    </div>
  );
};

export default AboutImage;
