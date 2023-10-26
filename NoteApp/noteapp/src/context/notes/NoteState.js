import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const notesApi = [];
  const [notes, setNotes] = useState(notesApi);
  const tagColor = [
    {
      tag: "General",
      Color: "bg-blue-300",
    },
    {
      tag: "Impotant",
      Color: "bg-red-400",
    },
    {
      tag: "Personal",
      Color: "bg-orange-300",
    },
    {
      tag: "Work",
      Color: "bg-green-300",
    },
    {
      tag: "To-Do",
      Color: "bg-yellow-300",
    },
    {
      tag: "Finance",
      Color: "bg-neutral-100",
    },
    {
      tag: "Goals",
      Color: "bg-purple-300",
    },
    {
      tag: "Fitness",
      Color: "bg-pink-300",
    },
  ];

  //View note toggel
  const [isView, setIsView] = useState(false);
  const toggleView = () => {
    setIsView(!isView);
  };
  //  Fetch All  Note ( R ) //
  const fetchNote = async () => {
    // API call for Fetch All Note
    const response = await fetch(`${host}/api/note/fetchallnote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMTc3NjYyNjk2Y2UxYTkxMDVhMzVmIn0sImlhdCI6MTY5Nzc0MDY0Nn0.AWKw8MXKGnarIcLsFS34msftQuxHKY-3pmn8E-Ytf9c",
      },
    });
    const json = await response.json();
    // Functionality to fetch A Note
    setNotes(json);
  };

  //  Add Note ( C ) //
  const addNote = async (title, description, tag, Color) => {
    // API call for Add NOte
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMTc3NjYyNjk2Y2UxYTkxMDVhMzVmIn0sImlhdCI6MTY5Nzc0MDY0Nn0.AWKw8MXKGnarIcLsFS34msftQuxHKY-3pmn8E-Ytf9c",
      },
      body: JSON.stringify({ title, description, tag, Color }),
    });
    // Functionality to Add A Note
    const selectedTag = tagColor.find((tagData) => tagData.tag === tag);
    if (selectedTag) {
      const note = {
        _id: "6537c2e5169f829bd500ec6f",
        user: "653177662696ce1a9105a35f",
        title: title,
        description: description,
        tag: tag,
        Color: Color,
        Date: "2023-10-24T13:13:09.384Z",
        __v: 0,
      };
      setNotes(notes.concat(note));
    }
  };

  // Edit note toggel
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  //  Edit Note ( U ) //
  const editNote = async (id, title, description, tag, Color) => {
    //API call for Edit NOte
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMTc3NjYyNjk2Y2UxYTkxMDVhMzVmIn0sImlhdCI6MTY5Nzc0MDY0Nn0.AWKw8MXKGnarIcLsFS34msftQuxHKY-3pmn8E-Ytf9c",
      },
      body: JSON.stringify({ title, description, tag, Color }),
    });
    // Functionality to Edit a Not
  };

  //  Delete Note ( D ) //
  const deleteNote = async (id) => {
    //API call for Delet NOte
    const response = fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMTc3NjYyNjk2Y2UxYTkxMDVhMzVmIn0sImlhdCI6MTY5Nzc0MDY0Nn0.AWKw8MXKGnarIcLsFS34msftQuxHKY-3pmn8E-Ytf9c",
      },
    });
    // Functionality to Delete a Not
    const newDeleteNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newDeleteNote);
  };

  return (
    <NoteContext.Provider
      value={{
        tagColor,
        toggleView,
        isView,
        toggleEdit,
        isEdit,
        notes,
        setNotes,
        fetchNote,
        addNote,
        editNote,
        deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
