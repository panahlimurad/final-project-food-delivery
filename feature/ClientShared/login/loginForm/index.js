
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import InputField from "../../inputField";
const initialStateValue = {
  userName: { value: "", isValid: false },
  password: { value: "", isValid: false },
};
const LoginForm = () => {
  const pathname = usePathname();
  const [inputValues, setInputValues] = useState(initialStateValue);
  const { userName, password } = inputValues;
  const handleChange = (value, name, isValid) => {
    setInputValues((prevInitialState) => ({
      ...prevInitialState,
      [name]: { value, isValid },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues(initialStateValue);
    console.log(inputValues);
  };
  return (
    <form className="w-[47%] px-10" onSubmit={handleSubmit}>
      <div className="flex justify-center text-3xl gap-10 mb-14">
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
      <InputField
        onChange={handleChange}
        placeholder="Username"
        label="Username"
        type="text"
        isValid={userName.isValid}
        name="userName"
        value={userName.value}
        id="userName"
        errorMsg="Username is not empty"
      />
      <InputField
        onChange={handleChange}
        placeholder="Password"
        label="Password"
        type="password"
        name="password"
        value={password.value}
        isValid={userName.isValid}
        id="password"
        errorMsg="Password is not empty"
      />
      <button className="w-full h-[68px] mt-14 bg-primary text-white font-medium text-[22px] rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
