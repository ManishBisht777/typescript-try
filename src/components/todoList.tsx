import React from "react";
import { Note } from "./model";
import SingleNote from "./singleNote";

interface NoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const TodoList: React.FC<NoteProps> = ({ notes, setNotes }: NoteProps) => {
  return (
    <div className="container">
      {notes.map((note, index) => {
        return (
          <SingleNote
            note={note}
            setNotes={setNotes}
            notes={notes}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
