import React from "react";
import UserSideBar from "../sideBar/UserSideBar";



const LayoutUser = ({ children }) => {

  return (

    <div className="mt-4 ml-12 flex gap-6 max-[1200px]:ml-0 max-[1200px]:gap-0">
      <div className="" >
     <UserSideBar/>
      </div>
      <div className="ml-4 w-[1031px] mr-12 max-[1200px]:w-full max-[1200px]:mr-4 max-[380px]:ml-1 max-[380px]:mr-1">
        {children}
      </div>
    </div>

  );
};

export default LayoutUser;
