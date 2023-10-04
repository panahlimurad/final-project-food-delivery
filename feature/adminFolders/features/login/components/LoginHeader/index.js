
import Image from "next/image";
import logo from "../../../../../adminFolders/assets/image/navbar/logo.svg";

const LoginHeader = () => {
  return (
    <div className="pt-4 ps-4">
        <Image src={logo} alt="logo" />
    </div>
  )
}

export default LoginHeader