import React from "react";
import LoginContent from "../../../feature/adminFolders/features/login/components/LoginContent";
import Head from "next/head";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-full">
        <LoginContent />
      </div>
    </div>
  );
};

export default Login;
