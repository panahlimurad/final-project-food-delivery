"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import profile from "../../../../public/profile.svg";
import Link from "next/link";
import basket from "../../assets/basket.svg";
import SignButton from "../signInButton/SignInButton";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import LangDropDown from "../../../adminShared/components/LangDropDown/LangDropDown";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import { GetBasket, GetUser } from "../../../adminShared/services/dataApi";
import { useRouter } from "next/router";
import styles from "../sideBar/sideBar.module.css";
const Header = () => {
  const removeLocalUser = () => {
    localStorage.removeItem("clientData");
  };

  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenus = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeMenus);

    return () => {
      document.removeEventListener("mousedown", closeMenus);
    };
  }, []);

  const { t } = useTranslation();
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [showFoodyText, setShowFoodyText] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const toggleFoodyText = () => {
    setShowFoodyText(!showFoodyText);
    setShowInput(!showInput);
  };

  const selUserData = useSelector((state) => state.user.data);

  const selBasket = useSelector((state) => state.basket.data);
  // console.log("selBasket", selBasket);
  const basketItem = selBasket?.result?.data?.items?.length;

  const {
    data: basketData,
    isLoading: isBasketLoading,
    isError: isBasketError,
    error: basketError,
  } = useQuery("basket", GetBasket, {
    // onSuccess: (res) => {

    // },
    // onError: (err) => {
    //   console.log(err);
    // },
  });

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useQuery("user", GetUser);

  const basketCount = basketData?.result?.data?.items?.length;

  const removeToken = () => {
    localStorage.removeItem("clientData");
  };

  useEffect(() => {
    const userJSONData = localStorage.getItem("clientData");
    const userData = JSON.parse(userJSONData);
    const token = userData?.user?.access_token;
    if (token) {
      setUserToken(token);
    }
  }, []);

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
    { text: "AboutUs", href: "/about" },
    { text: "HowItworks", href: "/howItWorks" },
    { text: "FAQs", href: "/FAQs" },
  ];

  const signInLinks = [
    { text: "Home", href: "/" },
    { text: "Restaurants", href: "/restaurants" },
    { text: "Profile", href: "/user?page=profile" },
    { text: "Your Basket", href: "/user?page=basket" },
    { text: "Your Orders", href: "/user?page=orders" },
    { text: "Checkout", href: "/user?page=checkout" },
    { text: "AboutUs", href: "/about" },
    { text: "HowItworks", href: "/howItWorks" },
    { text: "FAQs", href: "/FAQs" },
  ];

  return (
    <>
      <div className="min-w-full h-[120px] gap-4 flex justify-between items-center bg-[#F3F4F6] p-9">
        <div
          className={`${
            showFoodyText ? "w-[150px]" : "w-[]"
          }  h-[30] gap-3 flex justify-center items-center font-extrabold text-4xl`}>
          <div className="lg:hidden block mt-2">
            <button className="lg:hidden block mt-2" onClick={openMenu}>
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
        <div className="hidden lg:block w-auto">
          <ul className="flex justify-center gap-6 font-bold text-base text-[#828282]">
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  index === activeLinkIndex ? "text-[#D63626]" : ""
                }`}
                onClick={() => handleLinkClick(index)}>
                <Link href={link.href}>{t(`common:${link.text}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`flex-1 sm:w-[300px] justify-center sm:h-[35px] rounded-lg sm:block ${
            showInput ? "block" : "hidden"
          }`}>
          <motion.input
            initial={{ width: 0 }}
            animate={{ width: showInput ? "90%" : "80%" }}
            transition={{ duration: 0.2 }}
            className="sm:w-[300px] sm:h-[35px] rounded-lg p-4 ml-6"
            type="text"
            placeholder={t("common:Search")}
          />
        </div>
        <div className="flex items-center">
          <div className="bg-[#D63626] w-[41px] h-[41px] rounded-full text-white sm:hidden">
            <button
              className="flex justify-center items-center w-[41px] h-[41px] cursor-pointer"
              onClick={toggleFoodyText}>
              <RiSearch2Line size={25} />
            </button>
          </div>
          <div className="z-20 transition-transform transform hover:scale-95">
            <LangDropDown />
          </div>

          {userToken ? (
            <div className="flex gap-4">
              <Link className="text-link" href={"/user?page=basket"}>
                <div className="w-[44px] relative h-[44px] text-center cursor-pointer flex justify-center items-center rounded-full bg-[#EB5757] transition-transform transform hover:scale-95">
                  <span className="absolute bg-[#D63626] text-white top-[-10px] w-6 text-center right-[-4px] rounded-full text-">
                    {basketCount}
                  </span>
                  <Image src={basket} />
                </div>
              </Link>

              {userToken ? (
                <div className="w-[44px] relative h-[44px] text-white text-xl cursor-pointer flex justify-center items-center rounded-full bg-[#F178B6] transition-transform transform hover:scale-95">
                  <button
                    onClick={toggleMenu}
                    url="/login"
                    removeToken={removeToken}>
                    <Image
                      className="rounded-full"
                      width={120}
                      height={120}
                      src={
                        userData?.user?.img_url
                          ? userData?.user?.img_url
                          : profile
                      }
                    />
                  </button>
                </div>
              ) : null}

              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="menu right-3 sm:right-5 lg:right-16 mt-16 bg-white z-10 px-10 pt-4 absolute">
                  <ul>
                    <li
                      className={`mb-3 ${
                        pathname === "/user/profile" ? styles.active : ""
                      }`}>
                      <Link href={"/user?page=profile"}>
                        <div className="flex items-center gap-5 p-2 rounded-md text-sm font-semibold leading-6 ">
                          Profile
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`mb-3 ${
                        pathname === "/user/basket" ? styles.active : ""
                      }`}>
                      <Link className="text-link" href={"/user?page=basket"}>
                        <div className="flex items-center gap-5 p-2 rounded-md text-sm font-semibold leading-6 hover:bg-customHover transition">
                          Your Basket
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`mb-3 ${
                        pathname === "/user/orders" ? styles.active : ""
                      }`}>
                      <Link className="text-link" href={"/user?page=orders"}>
                        <div className="flex items-center gap-5 p-2 rounded-md text-sm font-semibold leading-6 hover:bg-customHover transition">
                          Your Orders
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`mb-3 ${
                        pathname === "/user/checkout" ? styles.active : ""
                      }`}>
                      <Link className="text-link" href={"/user?page=checkout"}>
                        <div className="flex items-center gap-5 p-2 rounded-md text-sm font-semibold leading-6 hover:bg-customHover transition">
                          Checkout
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`mb-3 ${
                        pathname === "/login" ? styles.active : ""
                      }`}>
                      <Link
                        className="text-link"
                        href={"/login"}
                        onClick={removeLocalUser}>
                        <div className="flex items-center gap-5 p-2 rounded-md  text-sm font-semibold leading-6 hover:bg-customHover transition">
                          Logout
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="hidden lg:block transition-opacity ease-in-out duration-300 hover:opacity-75">
          {userToken ? //
          null : (
            <SignButton url="/login" text={t("SignIn")} />
          )}
        </div>
      </div>
      <div
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={closeMenu}
        className={`${
          showMenu
            ? "bg-overlay  fixed left-0 top-0 w-full h-full  z-[100]"
            : "hidden"
        }`}></div>
      <div
        className={`${
          showMenu
            ? "mobile-menu  h-full fixed top-0 left-0 bg-white w-[256px] z-[111] p-4"
            : "hidden"
        }`}>
        <AiOutlineClose onClick={closeMenu} size={28} />
        <div className="text-center mt-12 flex gap-10 flex-col">
          <div className="relative h-[44px] text-white text-xl cursor-pointer gap-6 flex justify-center items-center rounded-full bg-[#F178B6] transition-transform transform hover:scale-95">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={userData?.user?.img_url ? userData?.user?.img_url : profile}
            />
            <p>{userData?.user?.username}</p>
          </div>
          {userToken ? (
            <SignButton
              url="/login"
              removeToken={removeToken}
              text={t("Log Out")}
            />
          ) : (
            <SignButton url="/login" text={t("SignIn")} />
          )}
        </div>
        {userToken ? (
          <ul className="font-medium text-lg mt-24 text-[#828282]">
            {signInLinks.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-4 ${
                  index === activeLinkIndex ? "text-[#D63626]" : ""
                }`}
                onClick={() => handleLinkClick(index)}>
                <Link className="text-lg" href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="font-medium text-lg mt-24 text-[#828282]">
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-4 ${
                  index === activeLinkIndex ? "text-[#D63626]" : ""
                }`}
                onClick={() => handleLinkClick(index)}>
                <Link className="text-lg" href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
