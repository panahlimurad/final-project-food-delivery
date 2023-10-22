import logo from "../../../../feature/adminFolders/assets/image/navbar/logo.svg";
import adminAvatar from "../../../../feature/adminFolders/assets/image/navbar/adminAvatar.svg";
// import { Link } from "react-router-dom";
// import { ROUTER } from "shared/constant/router";
import hamburger from "../../../../feature/adminFolders/assets/image/navbar/hamburger.svg";
import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import LangDropDown from "../LangDropDown/LangDropDown";

// import useScrollHandler from "shared/hooks/useScrollHandler";
import { useState } from "react";
import {FORM} from '../../../adminFolders/utils/form'
import AddModal from '../AddModal/AddModal'


const Navbar = ({toggleMenu}) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const openAddModal = () => {
      setIsAddModalOpen(true);

    };

    const closeAddModal = () => {
      setIsAddModalOpen(false);
    };
    // const isFixed = useScrollHandler(150);
    // const headerClass = `flex sticky top-0 h-[65px]  rounded-xl justify-between p-5 bg-dark z-10 top-0 mb-4  w-full shadow transition duration-300 ${
    //   isFixed ? "" : " "
    // }`;
  return (
    <div className="flex sticky h-[65px]  rounded-xl justify-between p-5 bg-[#27283C] z-10 top-0 mb-4  w-full shadow transition duration-300">
      <div className="flex items-center justify-between">
        <button className="lg:hidden block mr-3 relative" onClick={toggleMenu}>
          <Image src={hamburger} alt="hamburger" />
        </button>
        <Link href={"#"}>
          <Image src={logo} alt="logoimage" />
        </Link>
      </div>
      <div className="flex gap-3 items-center justify-between">
        <NavButton openAddModal={openAddModal} />
        <AddModal form={FORM.PRODUCTS}
          isAddModalOpen={isAddModalOpen}
          openAddModal={openAddModal}
          closeAddModal={closeAddModal}
        />
        <LangDropDown backgroundColor="#27283C"/>
        <div className="rounded-2xl flex items-center">
          <Image
            src={adminAvatar}
            alt="adminAvatar"
            className="rounded-full w-12"
          />
          <span className="font-medium text-white  mx-3  text-xl hidden md:block">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
