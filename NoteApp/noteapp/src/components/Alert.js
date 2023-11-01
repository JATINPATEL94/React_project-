import React, { useState, useEffect, useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Alert = () => {
  const context = useContext(NoteContext);
  const { alertMsg } = context;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    if (alertMsg.alertTitle === "sorry") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [alertMsg]);
  return (
    isVisible && (
      <div
        className={`${
          isVisible
            ? "animate-slideInRight"
            : "animate-slideOutRight duration-2500"
        } rounded-md fixed right-1 top-1 w-fit h-fit z-50 p-4 ${
          alertMsg.alertTitle === "Error" ? "bg-red-400" : "bg-green-300"
        }`}
      >
        <p className="flex items-#C4F9E2 text-sm font-medium animate-bounce text-[#004434]">
          {/* svg  */}
          <span className="pr-3">
            {alertMsg.alertTitle === "Error" ? (
              <svg
                className="flex-shrink-0 inline w-4 h-4 mr-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#00B078"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                  fill="white"
                ></path>
              </svg>
            )}
          </span>
          {/* error msgs */}
          {alertMsg.alertTitle} : {alertMsg.msg}
        </p>
      </div>
    )
  );
};

export default Alert;
