import React, { useState } from "react";
// import Header from "../feature/adminShared/components/Header/Header";
import Sidebar from "../feature/adminShared/components/Sidebar/Sidebar";
import styled from "./layoutAdmin.module.css";
import PageHeader from "../feature/adminShared/components/PageHeader/index";
import { useRouter } from "next/router";
import Footer from "../feature/adminShared/components/Footer/index";
import Navbar from "../feature/adminShared/components/Header/Header";

const LayoutAdmin = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className={styled.bodyAdmin}>
      <Navbar toggleMenu={toggleMenu} />
      <div className={styled.panel}>
        <div className={styled.leftBar}>
          <Sidebar
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Footer />
        </div>
        <div className={styled.main}>
          {router.pathname !== "/admin" ? <PageHeader /> : null}
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
