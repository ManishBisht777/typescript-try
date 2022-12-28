import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Note } from "./components/model";
import TodoList from "./components/todoList";

const App: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (note) {
      setNotes([...notes, { id: Date.now(), note: note, isDone: false }]);
      setNote("");
    }
  };

  console.log(notes);
  return (
    <div className="App">
      <h1>Typescript Demo</h1>
      <Input note={note} setNote={setNote} handleAdd={handleAdd} />
      <TodoList notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
