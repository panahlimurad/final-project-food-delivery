import React from "react";
import UserSideBar from "../sideBar/UserSideBar";
import UserPage from "../../../../pages/user/[page]";

const LayoutUser = () => {
  return (
    <div className="mt-4 p-8 flex gap-6">
      <div>
        <UserSideBar />
      </div>
      <div className="w-full">
        <UserPage />
      </div>
      {/* <div className="bg-orange-900 ml-4 w-[1031px] mr-12 max-[1200px]:w-full max-[1200px]:mr-4 max-[380px]:ml-1 max-[380px]:mr-1">
        {children}
      </div> */}
    </div>
  );
};

export default LayoutUser;
