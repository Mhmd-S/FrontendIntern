import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6  bg-[#1E293B] rounded-md shadow-lg">
        <h2 className="text-2xl text-center">Welcome Back!</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <PrimaryButton>Login</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
