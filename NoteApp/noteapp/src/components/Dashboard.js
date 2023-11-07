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
  console.log(notes[0]);
  // Creacting Default Note If user Dont Have Any Note
  const defaultNote = [
    {
      title: "This Is Default Note",
      description:
        "Hello! As you begin using our note-taking app, we've provided a helpful default note to get you started. Please be aware that this default note will be automatically deleted once you create one or more of your own notes. We're here to make your note-taking experience as seamless as possible. Enjoy creating and managing your notes!",
      tag: "Impotant",
      Color: "bg-red-400  ",
      Date: "07-11-2023",
    },
    {
      title: "Note Interaction and Management",
      description:
        "Click on a note to open it and access a range of options. You can view the note in full screen for a distraction-free experience, edit its content to make changes, delete it if it's no longer needed, or copy the content to reuse elsewhere. Additionally, you can quickly add a new note by clicking the 'Add Note' link at the top of the screen. We've made note management as simple and versatile as possible, all with just a click.",
      tag: "To-Do",
      Color: "bg-yellow-300  ",
      Date: "07-11-2023",
    },
    {
      title: "Versatile General Note for All Your Thoughts and Ideas",
      description:
        "Welcome to your General Note! This versatile space is perfect for capturing a wide range of thoughts, ideas, and information. Whether you have a sudden brainstorm, a quote that inspires you, or just need a digital scratchpad, this note can accommodate it all. With the flexibility of this General Note, you can quickly jot down and organize your miscellaneous notes, ensuring that no brilliant idea or important tidbit goes forgotten. It's your go-to canvas for unstructured content, providing a clean slate for your creative and practical needs",
      tag: "General",
      Color: "bg-blue-300",
      Date: "07-11-2023",
    },
  ];
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
                    <div className="h-8 absolute bottom-0 right-0 overflow-hiddenc">
                      <div className="md:hidden group-hover:block float-right self-end">
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
          {/* Default Note if user dont have any notes */}
          {notes[0] === undefined ? (
            defaultNote.map((defaultNote) => {
              return (
                <div
                  className={`max-h-96 w-full flex flex-col justify-between rounded-lg overflow-auto group relative ${defaultNote.Color}`}
                  key={defaultNote._id}
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
                      {defaultNote.Date}
                    </h6>
                    {/* tag */}
                    <div className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-900">
                      <span
                        className={`flex w-2.5 h-2.5  ${defaultNote.Color} rounded-full mr-1.5 flex-shrink-0`}
                      ></span>
                      {defaultNote.tag}
                    </div>
                  </div>
                  {/* Note Title Descripcion  */}
                  <div className="p-1 w-full h-full overflow-hidden">
                    <h3 className="font-bold"> {defaultNote.title}</h3>
                    <h5>{defaultNote.description}</h5>
                  </div>
                  {/* Edit Section */}
                  <div className="h-8 absolute bottom-0 right-0 overflow-hiddenc">
                    <div className="md:hidden group-hover:block float-right self-end">
                      <GroupButtons
                        note_id={defaultNote._id}
                        note={defaultNote}
                        onEditClick={() => handleEditClick(defaultNote)}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
