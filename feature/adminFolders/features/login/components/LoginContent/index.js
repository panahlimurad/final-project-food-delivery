import React from "react";
import LoginForm from "../LoginForm";
import LoginHeader from "../LoginHeader";

const LoginContent = () => {
  return (
    <div className="flex flex-col h-full">
      <LoginHeader />
      <div className="flex justify-center items-center h-full mt-20">
        <div className="flex sm:flex-row flex-col-reverse md:h-[420px] sm:w-[830px] w-full h-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
