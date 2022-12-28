import React, { useRef } from "react";

interface Props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ note, setNote, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={note}
        ref={inputRef}
        type="text"
        placeholder="enter text"
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default Input;
