import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const host = "http://192.168.2.100:3001";
  const host = "https://reactproject-production.up.railway.app";
  // status chek if user login or not for navabar
  const [userLogin, setUserLogin] = useState(localStorage.getItem("token") ? true : false);
  // for notes
  const [notes, setNotes] = useState([]);

  // alert msg
  const [alertMsg, setAlertMsg] = useState({
    alertTitle: "Hi",
    msg: "Welcome to NOTEAPP - Your Note-Taking Companion",
  });
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
      Color: "bg-neutral-300",
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
  // filter note
  const [selectedTag, setSelectedTag] = useState(null);
  //View note toggel
  const [isView, setIsView] = useState(false);
  const toggleView = () => {
    setIsView(!isView);
  };
  // Edit note toggel
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  //  Add Note ( C ) //
  const addNote = async (title, description, tag, Color) => {
    // API call for Add NOte
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, Color }),
    });
    console.log(response);
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
      setAlertMsg({
        alertTitle: "Success",
        msg: "Your Note Has Been Added successfully",
      });
    }
  };

  //  Fetch All  Note ( R ) //
  const fetchNote = async () => {
    // API call for Fetch All Note
    const response = await fetch(`${host}/api/note/fetchallnote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // Functionality to fetch A Note
    setNotes(json);
    setAlertMsg({
      alertTitle: "sorry",
      msg: "Sorry, Please Try Again!.",
    });
  };

  //  Edit Note ( U ) //
  const editNote = async (updatedData) => {
    const { id, title, description, tag, Color } = updatedData;
    try {
      //API call for Edit NOte
      const response = await fetch(`${host}/api/note/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ id, title, description, tag, Color }),
      });
      // Functionality to Edit a Not
      if (response.status === 200) {
        updateNoteInContext(id, title, description, tag, Color);
      } else {
        console.error("Failed to update note");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };
  const updateNoteInContext = (id, title, description, tag, Color) => {
    const updatedNotes = notes.map((note) => {
      if (note._id === id) {
        return {
          ...note,
          title,
          description,
          tag,
          Color,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setAlertMsg({
      alertTitle: "Success",
      msg: "Your Note Has Been Updated successfully",
    });
  };

  //  Delete Note ( D ) //
  const deleteNote = async (id) => {
    //API call for Delet NOte
    const response = fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(response);
    // Functionality to Delete a Not
    const newDeleteNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newDeleteNote);
    setAlertMsg({
      alertTitle: "Success",
      msg: "Your Note Has Been Delete successfully",
    });
  };

  return (
    <NoteContext.Provider
      value={{
        userLogin,
        setUserLogin,
        alertMsg,
        setAlertMsg,
        selectedTag,
        setSelectedTag,
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
