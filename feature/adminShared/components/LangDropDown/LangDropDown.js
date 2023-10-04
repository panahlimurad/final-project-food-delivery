"use client"
import React, { useState, useEffect } from "react";
import az from "../../../adminFolders/assets/image/flagicons/az.svg";
import en from "../../../adminFolders/assets/image/flagicons/en.svg";
import fr from "../../../adminFolders/assets/image/flagicons/fr.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LangDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); 
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLanguage) => {
    
  
    router.push(router.pathname, router.asPath, { locale: newLanguage });
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    setIsOpen(false);
    setSelectedLanguage(newLanguage);
  };


  return (
    <div className="relative inline-block bg-[#27283C]">
      <button onClick={toggleDropdown} className="px-4 py-2">
        <Image
          src={
            selectedLanguage === "az" ? az : selectedLanguage === "en" ? en : fr
          }
          alt={`${selectedLanguage}Flag`}
          className="cursor-pointer"
        />
      </button>
      {isOpen && (
        <div className="absolute h-48 left-1 w-16 bg-[#27283C] rounded-md">
          <div className="flex flex-col justify-center items-center gap-6 mt-4">
            <button onClick={() => changeLanguage("en")}>
              <Image
                src={en}
                alt="enFlag"
                className={`opacity-75 cursor-pointer ${
                  selectedLanguage === "en" ? "hover:opacity-100" : ""
                }`}
              />
            </button>
            <button onClick={() => changeLanguage("az")}>
              <Image
                src={az}
                alt="azFlag"
                className={`opacity-75 cursor-pointer ${
                  selectedLanguage === "az" ? "hover:opacity-100" : ""
                }`}
              />
            </button>
            <button onClick={() => changeLanguage("fr")}>
              <Image
                src={fr}
                alt="frFlag"
                className={`opacity-75 cursor-pointer ${
                  selectedLanguage === "fr" ? "hover:opacity-100" : ""
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LangDropDown;
