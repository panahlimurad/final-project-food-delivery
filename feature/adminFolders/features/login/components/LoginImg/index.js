import loginImg from "../../../../assets/image/login/login.svg";
import Image from "next/image";


const LoginImg = () => {
  return (
    <div className="relative  bg-transparent md:p-9 p-5  sm:w-[49%] w-[300px] mx-auto sm:bg-white">
      <div className="absolute top-0 right-0">
      </div>
      <Image src={loginImg} alt="login-img" className="h-full w-full" />
    </div>
  );
};

export default LoginImg;
