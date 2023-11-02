import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupButtons from "./GroupButtons";
import Filter from "./Filter";
import NoteContext from "../context/notes/noteContext";
import EditNote from "./EditNote";
import ViewNote from "./ViewNote";
import Alert from "./Alert";

const Dashboard = () => {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, fetchNote, selectedTag } = context;
  // Stat to store the selected current note
  const [selectedNote, setSelectedNote] = useState(null);
  const handleEditClick = (note) => {
    setSelectedNote(note);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNote();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Alert />
      <ViewNote note={selectedNote} />
      <EditNote note={selectedNote} />
      <Filter />
      <div className="min-h-screen  overflow-x-hidden  bg-gray-950 p-10 2xl:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-4  xl:grid-cols-4">
          {/* Context Note */}
          {Array.isArray(notes) ? (
            notes
              .filter((note) => !selectedTag || note.tag === selectedTag)
              .map((note) => {
                const originalDate = note.Date;
                const dateObject = new Date(originalDate);
                const day = dateObject.getUTCDate().toString().padStart(2, "0");
                const month = (dateObject.getUTCMonth() + 1)
                  .toString()
                  .padStart(2, "0");
                const year = dateObject.getUTCFullYear().toString().slice(-2);
                const convertedDate = `${day}-${month}-${year}`;

                return (
                  <div
                    className={`max-h-96 w-full flex flex-col justify-between rounded-lg overflow-auto group relative ${note.Color}`}
                    key={note._id}
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
                        {convertedDate}
                      </h6>
                      {/* tag */}
                      <div className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-900">
                        <span
                          className={`flex w-2.5 h-2.5  ${note.Color} rounded-full mr-1.5 flex-shrink-0`}
                        ></span>
                        {note.tag}
                      </div>
                    </div>
                    {/* Note Title Descripcion  */}
                    <div className="p-1 w-full h-full overflow-hidden">
                      <h3 className="font-bold"> {note.title}</h3>
                      <h5>{note.description}</h5>
                    </div>
                    {/* Edit Section */}
                    <div className="h-8 absolute bottom-0 right-0 overflow-hidden">
                      <div className="hidden group-hover:block float-right self-end">
                        <GroupButtons
                          note_id={note._id}
                          note={note}
                          onEditClick={() => handleEditClick(note)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <p>Loading notes...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
