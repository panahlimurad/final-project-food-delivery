import React from "react";
import LoginHeader from "../loginHeader";
import LoginLeft from "../loginLeft";
import LoginForm from "../loginForm";

const LoginContainer = () => {
  return (
    <div className="px-[34px] py-[30px]">
      <LoginHeader />
      <div className="lg:flex items-center justify-around">
        <LoginLeft />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
