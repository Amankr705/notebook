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
              "_id": "6403a54754b5802238b6eebb",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
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
              "_id": "6403a54754b5802238b6eebb",
              "user": "6403822635aa2389264dad39",
              "title": "My title",
              "description": "Wake up early",
              "tag": "personal",
              "date": "2023-03-04T20:08:39.954Z",
              "__v": 0
            }
    ]

    const [notes, setNotes] = useState(notesInitial)
    
    
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;