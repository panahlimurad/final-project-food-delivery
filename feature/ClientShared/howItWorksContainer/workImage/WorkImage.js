"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import workImage from "../../../../public/svg/workImage.svg";
import aboutImageSm from "../../../../public/svg/aboutImageSm.svg"

const WorkImage = () => {
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
    <div>
      <div className="flex justify-center">
        <Image src={isSmallScreen ? aboutImageSm : workImage } />
      </div>
    </div>
  );
};

export default WorkImage;
