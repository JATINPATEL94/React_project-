import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Filter = () => {
  const context = useContext(NoteContext)
  const {notes } = context;
  return (
    <div className="flex align-middle justify-center">
      <div className="w-fit flex p-2  gap-2  overflow-y-hidden overflow-x-auto">
        {notes.map((note) => {
          return (
            <div
              key={note.tag}
              className={` ${note.Color} text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-gray-900 `}
            >
              {note.tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
