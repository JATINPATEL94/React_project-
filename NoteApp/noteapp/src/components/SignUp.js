import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import demo from "../images/demo-1.png";
import logo from "../images/logo-1.png";
import Alert from "./Alert";

const SignUp = () => {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { setAlertMsg } = context;
  // Set the initial state for SignUp
  const [logingData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // handle inputs
  const onChange = (e) => {
    setLoginData({ ...logingData, [e.target.name]: e.target.value });
  };
  // handle Submit Button
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:3001/api/auth/createuser", {
    const response = await fetch("https://reactproject-production.up.railway.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: logingData.name,
        email: logingData.email,
        password: logingData.password,
      }),
    });
    const json = await response.json();
    if (json.token) {
      localStorage.setItem("authtoken", json.token);
      navigate("/login");
      setTimeout(() => {
        setAlertMsg({
          alertTitle: "Account Created Successfully",
          msg: "Please Enter Your Email ID And Password To Login",
        });
      }, 500);
    }
  };
  return (
    <>
      <Alert />
      <div className=" bg-gray-900 flex flex-col md:flex-row">
        <div className="md:order-1 flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:w-1/2">
          <a href="/">
            <img className="w-36 mb-4" src={logo} alt="logo" />
          </a>
          <div className="w-full order-1 rounded-lg shadow border bg-gray-800 border-gray-700 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* email */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChange}
                    value={logingData.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
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
                  Create Account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already Have Account{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login Hear
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center md:w-1/2 lg:p-20">
          <img src={demo} className="w-full rounded-lg fit " alt="Demo" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
