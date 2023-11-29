import React from "react";
import LoginForm from "../LoginForm";
import LoginHeader from "../LoginHeader";
import { useRouter } from "next/router";

const LoginContent = () => {

  const router = useRouter();
console.log("dash", router);

  return (
    <div className="flex flex-col bg-[#1e1e30]" style={{ minHeight: '100vh' }}>
      <LoginHeader />
      <div className="flex justify-center items-center min-h-full mt-20">
        <div className="flex sm:flex-row flex-col-reverse md:h-[420px] sm:w-[830px] w-full min-h-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
