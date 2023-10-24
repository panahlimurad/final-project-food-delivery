"use client";
import { Login } from "../../../../../adminShared/services/dataApi";
import { useEffect, useState } from "react";
import Button from "../../../../../adminShared/ui/Button";
import LoginImg from "../LoginImg";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import Loader from "../../../../../adminShared/components/Loader/Loader";


const LoginForm = () => {
  const router = useRouter();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

    function writeToLocalStorage(data) {
    localStorage.setItem("userData", JSON.stringify(data));
  }


  

  const mutation = useMutation((data) => Login("/api/auth/signin", data), {
    onSuccess: (responseData) => {
      writeToLocalStorage(responseData)
      router.push("/admin");
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  // const mutation = useMutation(
  //   (data) => postData(apiUrl, data),
  //   {
  //     onSuccess: (responseData) => {
  //       console.log("okey:", responseData);
  //       writeToLocalStorage(responseData)
  //       navigate("/panel/dashboard")
  //     },
  //     onError: (error) => {
  //       console.error("error:", error);
  //      alert("log: team1@gmail.com/ password: team11111")
  //     },
  //   }
  // );

  const handleInput = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    mutation.mutate(login);
  }

  return (
    <>
      {mutation.isLoading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="login-form p-12 sm:bg-gray bg-[#38394E] flex flex-col items-center justify-center text-center sm:w-[51%]">
          <div className="title text-[#C7C7C7] font-bold lg:text-4xl sm:text-3xl text-2xl mb-10  font-secondaryFont">
            Welcome Admin
          </div>
          <input
            onChange={handleInput}
            name="email"
            type="text"
            className="w-full h-[50px] text-[#C7C7C7] mb-6 bg-[#5A5B70] rounded-sm px-6 outline-none text-sm"
            placeholder="Username"
          />
          <input
            onChange={handleInput}
            name="password"
            type="password"
            className="w-full h-[50px] text-[#C7C7C7] mb-6 bg-[#5A5B70] rounded-sm px-6 outline-none text-sm"
            placeholder="Password"
          />
          <Button>Sign in</Button>
        </form>
      )}
      {!mutation.isLoading && <LoginImg />}
    </>
  );
};
export default LoginForm;
