
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LangDropDown from "../../LangDropDown/LangDropDown";

const LoginHeader = () => {
  return (
    <div className="h-[122px] bg-primary w-full flex justify-between items-center rounded-[4px] px-10 mb-6">
      <Link href="/">
        <Image src="/logo/logo.svg" alt="logo" width="134" height="52" />
      </Link>
       <LangDropDown/>
    </div>
  );
};

export default LoginHeader;
