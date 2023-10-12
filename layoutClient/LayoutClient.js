import React from "react";
import Header from "../feature/ClientShared/components/header/Header";
import Footer from "../feature/ClientShared/components/footer/Footer";

const LayoutClient = ({ children }) => {
  return (
    <>
      <div className="p-6">
        <Header />
        <div>{children}</div>
      </div>

      <Footer />
    </>
  );
};

export default LayoutClient;
