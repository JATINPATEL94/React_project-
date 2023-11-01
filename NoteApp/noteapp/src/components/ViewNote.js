import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const ViewNote = ({ note }) => {
  const context = useContext(NoteContext);
  const { toggleView, isView } = context;

  const [viewNote, setViewNote] = useState({
    title: "",
    description: "",
    tag: "",
    Color: "",
  });
  useEffect(() => {
    setViewNote({
      title: note ? note.title : "something went wrong",
      description: note
        ? note.description
        : "please try again or refresh the page.",
      tag: note ? note.tag : "General",
      Color: note ? note.Color : "bg-blue-300",
    });
  }, [note]);
  const originalDate = note ? note.Date : 20052003;
  const dateObject = new Date(originalDate);
  const day = dateObject.getUTCDate().toString().padStart(2, "0");
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getUTCFullYear().toString().slice(-2);
  const convertedDate = `${day}-${month}-${year}`;
  return (
    <div
      className={`${
        isView ? "flex" : "hidden"
      } fixed z-50 h-full w-full pt-20 justify-center align-middl p-4 overflow-hidden backdrop-blur-sm`}
    >
      <div
        className={`${viewNote.Color} h-96  lg:w-1/2 rounded-lg overflow-hidden  group relative border-2 md:border-4`}
      >
        {/* DATE And Tag Section */}
        <div className="flex justify-between bg-gray-200 pr-2 h-8 w-full">
          {/* date */}
          <h6 className="text-xs p-1  text-gray flex items-center">
            <svg
              className="w-2.5 h-2.5 mr-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            Created on : {convertedDate}
          </h6>
          {/* tag */}
          <div className="flex items-center text-sm 1nt-medium text-gray-900 dark:text-gray-900">
            <span
              className={`flex w-2.5 h-2.5  ${viewNote.Color} rounded-full mr-1.5 flex-shrink-0`}
            ></span>
            {viewNote.tag}
          </div>
        </div>
        {/* Note Titel Descripcion  */}
        <div className="p-3 overflow-hidden">
          <h3 className="font-bold"> {viewNote.title}</h3>
          <h5>{viewNote.description}</h5>
        </div>
        {/* Cancel Button */}
        <div className="h-8 absolute bottom-1 right-1">
          <button
            onClick={toggleView}
            type="button"
            className="text-sm font-semibold leading-6 bg-indigo-600 py-1 px-3 rounded-md text-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
