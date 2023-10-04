import React from "react";
import LoginContent from "../../../feature/adminFolders/features/login/components/LoginContent";
import Head from "next/head";

const Login = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Login</title>
      </Head>
      <LoginContent />
    </div>
  );
};

export default Login;
