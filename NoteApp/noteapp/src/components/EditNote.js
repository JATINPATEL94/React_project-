import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const EditNote = () => {
  const context = useContext(NoteContext);
  const { toggleEdit, isEdit, tagColor } = context;

  // tag toggle
  const [tagSelected, setTagSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const onChange = (e) => {
    const { name } = e.target;
    // toggle tags button
    if (name === "e_tag") {
      setIsOpen(!isOpen);
      setTagSelected(true);
    }
  };

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={` ${
        isEdit ? "flex" : "hidden"
      } fixed z-50 h-full w-full pt-20 top-0 justify-center align-middle bg-transparent p-4 overflow-hidden`}
    >
      <div className="relative w-full max-w-4xl max-h-full">
        <div className="bg-white h-fit min-w-full rounded-lg shadow dark:bg-gray-700 ">
          {/* <!-- Close Button--> */}
          <button
            onClick={toggleEdit}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* Edite Note Form */}
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Edit Your Note
            </h3>
            <form className="space-y-6" action="#">
              {/* titel */}
              <div>
                <label
                  htmlFor="titel"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Titel
                </label>
                <input
                  type="text"
                  name="e_title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Edite Titel"
                  required
                />
              </div>
              {/* description */}
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="e_description"
                  rows={5}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              {/* Select Tag */}
              <div className="flex justify-center align-middle w-fit relative">
                {/* Droupdown Buttone */}
                <button
                  type="button"
                  onClick={toggleOpen}
                  // disabled={tagSelected}
                  id="dropdownRadioBgHoverButton"
                  data-dropdown-toggle="dropdownRadioBgHover"
                  className="text-white bg-transparent  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 w-max h-fit border py-2.5 text-center inline-flex items-center relative"
                >
                  Select Tag
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
                        <div className="flex items-center justify-start p-2 rounded hover:bg-gray-100 dark:hover-bg-gray-600">
                          <input
                            onClick={onChange}
                            id={`default-radio-${index}`}
                            type="radio"
                            value={tagData.tag}
                            name="e_tag"
                            data-color={
                              tagData.Color
                            } /* Assign Color into a data attribute */
                            className="w-4 h-4   bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor={`default-radio-${index}`}
                            className={`${tagData.Color}w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300`}
                          >
                            {tagData.tag}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* save or cancle Buttone */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  onClick={toggleEdit}
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  Cancel
                </button>
                <button
                  // onClick={handleClick}
                  type="submit"
                  disabled={!tagSelected}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
