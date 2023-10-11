import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const LoginForm = () => {
  const pathname = usePathname();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <form className="lg:w-[640px] w-full md:px-10">
      <div className="flex justify-center lg:text-3xl text-2xl gap-10 mb-14">
        <Link
          href="/login"
          className={`${
            pathname === "/login" ? "text-primary " : "text-gray_1"
          } hover:text-gray`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`${
            pathname === "/register" ? "text-primary " : "text-gray_1"
          } hover:text-primary`}
        >
          Register
        </Link>
      </div>
      <div className="mb-4">
        <label className="text-gray_2 xl:text-xl tetx-lg font-medium lg:mb-4 mb-2 block">
          Username
        </label>
        <input
          placeholder="Username"
          className="ps-7 pe-14 text-gray_2 font-medium w-full xl:h-[68px] h-[54px] rounded-md bg-light_red outline-none"
        />
      </div>
      <div className="mb-4 relative">
        <label className="text-gray_2 xl:text-xl tetx-lg font-medium mb-4 block">
          Password
        </label>
        <input
          type={passwordType}
          placeholder="Username"
          className="ps-7 pe-14 text-gray_2 font-medium w-full xl:h-[68px] h-[54px] rounded-md bg-light_red outline-none"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute xl:top-[70px] lg:top-[60px] top-[56px] right-[10px]"
        >
          {passwordType === "password" ? (
            <AiFillEye color="#EB5757" size={24} />
          ) : (
            <AiFillEyeInvisible color="#EB5757" size={24} />
          )}
        </button>
      </div>
      <button className="w-full xl:h-[68px] h-[54px] mt-8 bg-primary text-white font-medium lg:text-[22px] text-lg rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
