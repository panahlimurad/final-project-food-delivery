import React from "react";
import LoginHeader from "../loginHeader";
import LoginLeft from "../loginLeft";
import LoginForm from "../loginForm";

const LoginContainer = () => {
  return (
    <div className="md:px-[34px] md:py-[30px]">
      <LoginHeader />
      <div className="lg:flex items-center">
        <LoginLeft />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
