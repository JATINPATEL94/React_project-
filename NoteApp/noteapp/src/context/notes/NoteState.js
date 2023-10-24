import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
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

  const notesApi = [
    {
      _id: "6532ba79d513e9f0e2d6cbae",
      user: "653177662696ce1a9105a35f",
      title: " 1st  note ",
      description:
        "Hear Is My First Note From This NOTEAPP.lknocnoas  amopsnmcoinso msxcoianaoind oisndonajn i iosniocnosa onosnocno ono  kljndkjcs oomlm icxosam oasondo om aomcows oaoido dowa omonawon knkjnef ikekjnonoc lkmolkmoi ls c oeoeofl; sldc dlksmoepfdmxclkm 0peopi lml ocipecmsmelkfmoeosiefoimd soemiofjoip[somdlcmesienflk l oijom[ oj io om opimoi iop o opi jopjoi io i i imi i m i  imio mom[oim[omo io iom [ oimio oi oimiomiomo oiiomoi imi i imi mi ifde kjkjno wdio oamslkdm oiwnoi mo oimoi oim omo n lkl mlkmoim omoi oi om  lmnl mk lk nml nl nl k",
      tag: "Impotant",
      Color: "bg-blue-300",
      Date: "2023-10-20T17:35:53.968Z",
      __v: 0,
    },
    {
      _id: "6537c2e5169f829bd500ec5f",
      user: "653177662696ce1a9105a35f",
      title: " 2ND  note ",
      description: "Hear Is My Secand Note From This NOTEAPP.",
      tag: "General",
      Color: "bg-red-400",
      Date: "2023-10-24T13:13:09.384Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesApi);

  // Add Note
  const addNote = (title, description, tag) => {
    const selectedTag = tagColor.find((tagData) => tagData.tag === tag);
    if (selectedTag) {
      const note = {
        _id: "6537c2e5169f829bd500ec6f",
        user: "653177662696ce1a9105a35f",
        title: title,
        description: description,
        tag: tag,
        Color: selectedTag.Color,
        Date: "2023-10-24T13:13:09.384Z",
        __v: 0,
      };
      setNotes(notes.concat(note));
    }
  };
  // Updead Note
  const updeadNote = () => {};
  //Delete Note
  const deleteNote = () => {};
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, tagColor, addNote, updeadNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
