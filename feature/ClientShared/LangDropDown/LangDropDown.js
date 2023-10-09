"use client"
import React, { useState, useEffect } from "react";

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
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="px-4 py-2">
        <Image width="40" height="40"
          src={
            selectedLanguage === "az" ? "/flagicons/az.svg" : selectedLanguage === "en" ? 
            "/flagicons/en.svg" : "/flagicons/fr.svg"
          }
          alt={`${selectedLanguage}Flag`}
          className="cursor-pointer"
        />
      </button>
      {isOpen && (
        <div className="absolute h-48 left-1 w-16  rounded-md">
          <div className="flex flex-col justify-center items-center gap-6 mt-4">
            <button onClick={() => changeLanguage("en")}>
              <Image width="40" height="40"
                src= "/flagicons/en.svg" 
                alt="enFlag"
                className={`opacity-75 cursor-pointer ${
                  selectedLanguage === "en" ? "hover:opacity-100" : ""
                }`}
              />
            </button>
            <button onClick={() => changeLanguage("az")}>
              <Image width="40" height="40"
                src= "/flagicons/az.svg" 
                alt="azFlag"
                className={`opacity-75 cursor-pointer ${
                  selectedLanguage === "az" ? "hover:opacity-100" : ""
                }`}
              />
            </button>
            <button onClick={() => changeLanguage("fr")}>
              <Image  width="40" height="40"
                src= "/flagicons/fr.svg" 
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
