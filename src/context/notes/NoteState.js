import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
            {
              "_id": "6403a4c9c1a5366c67ca4c66",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:06:33.433Z",
              "__v": 0
            },
            {
              "_id": "6403a54754b5802238b6eebb",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
              "__v": 0
            },
            {
              "_id": "6403a54754b5802238b6eeb1",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
              "__v": 0
            },
            {
              "_id": "6403a54754b5802238b6eeb2",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
              "__v": 0
            },
            {
              "_id": "6403a54754b5802238b6eeb3",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
              "__v": 0
            }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag)=>{
      // TODO API Call
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
    const deleteNote = (id)=>{
      // TODO API Call
      console.log("Deleting the note with id" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }

    // Edit a Note
    const editNote = (id, title, description, tag)=>{

    }    
    
    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;