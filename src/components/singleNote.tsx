import React, { useRef, useState } from "react";
import { Note } from "./model";

type SingleNoteProps = {
  note: Note;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const SingleNote: React.FC<SingleNoteProps> = ({
  note,
  notes,
  setNotes,
}: SingleNoteProps) => {
  const [editedNote, setEditedNote] = useState<string>(note.note);
  const [editMode, setEditMode] = useState<boolean>(false);

  const editRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isDone: !note.isDone } : note
      )
    );
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, note: editedNote } : note
      )
    );
    setEditMode(false);
  };

  console.log(editMode);
  return (
    <form
      className="single__note"
      onSubmit={(e) => {
        handleEdit(note.id, e);
      }}
    >
      {editMode ? (
        <input
          ref={editRef}
          type="text"
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
        />
      ) : !note.isDone ? (
        <p>{note.note}</p>
      ) : (
        <s>{note.note}</s>
      )}

      <div onClick={() => handleDelete(note.id)}>Delete</div>
      <div onClick={() => handleDone(note.id)}>mark as done</div>
      <div
        onClick={() => {
          if (!note.isDone) setEditMode(!editMode);
        }}
      >
        Edit
      </div>
    </form>
  );
};

export default SingleNote;
