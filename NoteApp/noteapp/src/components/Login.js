import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import demo from "../images/demo-1.png";
import logo from "../images/logo-1.png";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { setAlertMsg } = context;
  // Set the initial state for SignUp
  const [logingData, setLoginData] = useState({ email: "", password: "" });
  // handle inputs
  const onChange = (e) => {
    setLoginData({ ...logingData, [e.target.name]: e.target.value });
  };
  // handle Submit Button
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call API
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: logingData.email,
        password: logingData.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/");
      // alert msg
      setTimeout(() => {
        setAlertMsg({
          alertTitle: "Hi!",
          msg: "Welcome to NOTEAPP - Your Note-Taking Companion",
        });
      }, 500);
    } else {
      setAlertMsg({
        alertTitle: "Error",
        msg: "Please Enter A Valid Email Address And Password",
      });
    }
  };
  return (
    <>
      <Alert />
      <div className="bg-gray-900 flex flex-col md:flex-row">
        <div className="md:order-1 flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:my-16 md:w-1/2">
          <a href="/">
            <img className="w-36 mb-4" src={logo} alt="logo" />
          </a>
          <div className="w-full order-1 rounded-lg shadow border bg-gray-800 border-gray-700 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={logingData.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                    value={logingData.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    autoComplete="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="/si"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center md:w-1/2">
          <img src={demo} className="w-full rounded-lg fit " alt="Demo" />
        </div>
      </div>
    </>
  );
};

export default Login;
