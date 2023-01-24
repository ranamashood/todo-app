import React, { useState } from "react";
import styled from "styled-components";
import { NoteInterface } from "../../models";
import Button from "../Button";

interface Props {
  notes: NoteInterface[];
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
  toggleIsAddNote: () => void;
}

const Sidebar = (props: Props) => {
  const { notes, setNotes, toggleIsAddNote } = props;
  const [newNote, setNewNote] = useState<NoteInterface>();

  const addNoteHandler = () => {
    // setNewNote({ title: "hello", noteDescription: "note" });
    setNotes([{ title: "hello", noteDescription: "note" }, ...notes]);
  };

  return (
    <Wrapper>
      <Button onClick={toggleIsAddNote} title="Add Note" />
      {notes.map((note, key) => {
        return <div key={key}>{note.title}</div>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  flex: 1.5,
  backgroundColor: "red",
});

export default Sidebar;
