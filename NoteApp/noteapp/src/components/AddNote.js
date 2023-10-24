import React, { useState, useContext } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote, tagColor } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "General",
  });
  const [tagSelected, setTagSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "tag") {
      setTagSelected(true);
    }
    if (type === "radio") {
      setNote({ ...note, tag: value });
    } else {
      setNote({ ...note, [name]: value });
      // setNote({...note,[e.target.name]:e.target.value})
    }
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  return (
    <div className="min-h-screen  overflow-x-hidden  bg-gray-950 p-10 flex justify-center align-middle 2xl:p-20">
      <form className="md:w-1/2">
        <div className="space-y-12 ">
          {/* Note Section */}
          <div className="border-b border-gray-100/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-100">
              Add A New Note
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-300">
              This inhtmlFormation will not be displayed publicly.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Add Titel  */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Titel
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Note Title."
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              {/* Add Description */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  write a Note
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className="block w-full p-2 rounded-md border-0 py-1.5 bg-transparent text-gray-100 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* Select Tag */}
              <div className="flex justify-center align-middle w-fit relative">
                {/* Droupdown Buttone */}
                <button
                  onClick={toggleOpen}
                  id="dropdownRadioBgHoverButton"
                  data-dropdown-toggle="dropdownRadioBgHover"
                  className="text-white bg-transparent  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 w-max h-fit border py-2.5 text-center inline-flex items-center relative"
                  type="button"
                >
                  Select Tag{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu  */}
                <div
                  id="dropdownRadioBgHover"
                  className={`${
                    isOpen ? "block" : "hidden"
                  } absolute left-28 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                  {/* Dropdown List */}
                  <ul
                    className="p-3 max-h-40 overflow-y-scroll space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownRadioBgHoverButton"
                  >
                    {/* tag from context */}
                    {tagColor.map((tagData, index) => (
                      <li key={index}>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
                          <input
                            onClick={onChange}
                            id={`default-radio-${index}`}
                            type="radio"
                            value={tagData.tag}
                            name="tag"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor={`default-radio-${index}`}
                            className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                          >
                            {tagData.tag}
                          </label>
                        </div>
                      </li>
                    ))}

                      {/* General */}
                      {/* <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            // defaultChecked
                            onClick={onChange}
                            id="default-radio-1"
                            type="radio"
                            value="General"
                            name="tag"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                          >
                            Genral
                          </label>
                        </div>
                      </li> */}
                      {/* Personal */}
                      {/* <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            onClick={onChange}
                            id="default-radio-2"
                            type="radio"
                            value="Personal"
                            name="tag"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                          >
                            Personal
                          </label>
                        </div>
                      </li> */}

                  </ul>
                </div>
              </div>
              {/* Upload File */}
              <div className="col-span-full">
                <h5 className="block text-sm font-medium leading-6 text-gray-100">
                  If You wont A To Upload A File or Photos.{" "}
                </h5>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-300">
                      <label
                        htmlFor="file-upload"
                        className="relative p-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-300">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Note Save or Cancle Button*/}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            type="submit"
            disabled={!tagSelected}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
