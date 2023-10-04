
// import { ROUTER } from "shared/constant/router";
import logo from "../../../../feature/adminFolders/assets/image/navbar/logo.svg";
import footerLogo from "../../../../feature/adminFolders/assets/image/footer/footer-logo.svg";
import arrow from "../../../../feature/adminFolders/assets/image/menu/arrow-back.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


// export const getStaticProps = async ({locale})=>({
//   props:{
//       ...(await serverSideTranslations(locale, ["common"]))
//   }
// })




const Sidebar = ({ isMenuOpen, toggleMenu, closeAddModal }) => {

  const { t } = useTranslation("common");

//   function removeFromLocalStorage() {
//     localStorage.removeItem("userData");
//   }

// const menuOpen = `menu-overlay w-full h-full fixed top-0 left-0 backdrop-brightness-50  transition-transform  ease-in z-10  ${
//     isMenuOpen ? "translate-x-0" : "-translate-x-full"
//   }`


// const isMenuOpen = `bg-secondary lg:w-[256px] w-[274px] 
// h-full lg:h-[474px] rounded-0 fixed lg:top-[80px] lg:left-3 top-0 left-0
// lg:rounded-[14px] transition-transform  ease-in  
//  p-6  z-10 lg:block lg:translate-x-0 ${
//    isMenuOpen ? "translate-x-0" : "-translate-x-96"
//  }`

  return (
    <div className="lg:w-[256px] w-0 lg:me-4">
      <div
        // onClick={toggleMenu}
        className="menu-overlay h-full fixed top-0 left-0 backdrop-brightness-50  transition-transform  ease-in z-10"></div>
      <div
        className="bg-[#C74FEB] lg:w-[256px] w-[274px] text-[#FCDDEC]
        h-full lg:h-[474px] rounded-0 fixed lg:top-[80px] lg:left-3 top-0 left-0
        lg:rounded-[14px] transition-transform  ease-in  
         p-6 z-10 lg:block lg:translate-x-0">
        <div className="mb-9 lg:hidden block">
          <div className="flex gap-3">
            <div className="close-menu" onClick={toggleMenu}>
              <img src={arrow} alt="" />
            </div>
            <Link href={"/admin"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <ul>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6  hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="DashboardIcon">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                </svg>
                {t("common:Dashboard")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/products"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6 hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ProductionQuantityLimitsIcon">
                  <path d="M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"></path>
                </svg>
                {t("common:Products")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/restaurants"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6  hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="RestaurantIcon">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path>
                </svg>
                {t("common:Restaurants")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/category"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6 hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CategoryIcon">
                  <path d="m12 2-5.5 9h11z"></path>
                  <circle cx="17.5" cy="17.5" r="4.5"></circle>
                  <path d="M3 13.5h8v8H3z"></path>
                </svg>
                {t("common:Category")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/orders"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6  hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FilterFramesIcon">
                  <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"></path>
                </svg>
                {t("common:Orders")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/order-history"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6  hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FilterFramesIcon">
                  <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"></path>
                </svg>
                {t("common:History")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/offers"}
              onClick={closeAddModal}>
              <div className="flex items-center gap-5 p-2 rounded-md text-sm font-medium leading-6 hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LocalOfferIcon">
                  <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
                {t("common:Offers")}
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              className="text-link"
              href={"/admin/login"}
              onClick={(event) => {
                // removeFromLocalStorage();
                closeAddModal();
              }}>
              <div className="flex items-center gap-5 p-2 rounded-md  text-sm font-medium leading-6 hover:bg-customHover transition">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ExitToAppIcon">
                  <path d="M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
                {t("common:Logout")}
              </div>
            </Link>
          </li>
        </ul>
        <div className="w-[274px] h-[84px] lg:hidden flex bg-purple  flex-col fixed bottom-0 left-0 gap-y-1 p-3">
          <div className="w-[140px] h-[30px] ">
            <Image src={footerLogo} alt="footer-logo" />
          </div>
          <div className="flex flex-col text-gray-500 text-sm ps-10 leading-4 ">
            <span>1.0</span>
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
