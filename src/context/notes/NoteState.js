import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // GET all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzgyMjYzNWFhMjM4OTI2NGRhZDM5In0sImlhdCI6MTY3Nzk1MzIyOH0.sNMaRcCrXZ4wuVn4VQWGD1_Sz1OPFQpVHSng49J6wBU"

      },
    });
    const json =  await response.json();
    console.log(json)
    setNotes(json)
  }

    // Add a Note
    const addNote = async (title, description, tag) => {
      // TODO API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzgyMjYzNWFhMjM4OTI2NGRhZDM5In0sImlhdCI6MTY3Nzk1MzIyOH0.sNMaRcCrXZ4wuVn4VQWGD1_Sz1OPFQpVHSng49J6wBU"
  
        },
        body: JSON.stringify({title, description, tag})
      });
  
      console.log("Adding a new  note")
      const note = {
        "_id": "6403a54754b5802238b6eeb6",
        "user": "6403822635aa2389264dad39",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-03-04T20:08:39.954Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

  // Delete a Note
  const deleteNote = (id) => {
    // TODO API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // TODO API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzgyMjYzNWFhMjM4OTI2NGRhZDM5In0sImlhdCI6MTY3Nzk1MzIyOH0.sNMaRcCrXZ4wuVn4VQWGD1_Sz1OPFQpVHSng49J6wBU"

      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();


    // Logic to Edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;