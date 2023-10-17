import React from "react";
import UserSideBar from "../sideBar/UserSideBar";



const LayoutUser = ({ children }) => {

  return (

    <div className="mt-4 ml-12 flex gap-6">
      <div className="" >
     <UserSideBar/>
      </div>
      <div className="ml-4 w-[1031px] mr-12">
        {children}
      </div>
    </div>

  );
};

export default LayoutUser;
