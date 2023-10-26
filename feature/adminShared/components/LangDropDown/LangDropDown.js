"use client";
import React, { useState, useEffect } from "react";
import az from "../../../adminFolders/assets/image/flagicons/az.svg";
import en from "../../../adminFolders/assets/image/flagicons/en.svg";
import fr from "../../../adminFolders/assets/image/flagicons/fr.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LangDropDown = ({ backgroundColor, bgFlags }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { i18n } = useTranslation();
  const router = useRouter();
//  update 

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
    <div
      className="relative inline-block"
      style={{ backgroundColor: `${bgFlags}` }}>
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
        <div
          className="absolute h-36 left-1 w-16 rounded-md z-30"
          style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            {selectedLanguage !== "en" && (
              <button onClick={() => changeLanguage("en")}>
                <Image
                  src={en}
                  alt="enFlag"
                  className={`opacity-50 cursor-pointer transition-opacity ease-in-out duration-300 hover:opacity-100 ${
                    selectedLanguage === "en"
                  }`}
                />
              </button>
            )}
            {selectedLanguage !== "az" && (
              <button onClick={() => changeLanguage("az")}>
                <Image
                  src={az}
                  alt="azFlag"
                  className={`opacity-50 cursor-pointer transition-opacity ease-in-out duration-300 hover:opacity-100 ${
                    selectedLanguage === "az"
                  }`}
                />
              </button>
            )}
            {selectedLanguage !== "fr" && (
              <button onClick={() => changeLanguage("fr")}>
                <Image
                  src={fr}
                  alt="frFlag"
                  className={`opacity-50 cursor-pointer transition-opacity ease-in-out duration-300 hover:opacity-100 ${
                    selectedLanguage === "fr"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangDropDown;
