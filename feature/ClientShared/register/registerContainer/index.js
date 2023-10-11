import React from "react";
import RegisterLeft from "../RegisterLeft";
import RegisterForm from "../RegisterForm";
import LoginHeader from "../../login/loginHeader";

const RegisterContainer = () => {
  return (
    <div className="px-[34px] py-[30px]">
      <LoginHeader />
      <div className="lg:flex items-center lg:justify-around justify-center">
        <RegisterLeft />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterContainer;