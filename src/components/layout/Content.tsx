import { useState } from "react";
import styled from "styled-components";
import { NoteInterface } from "../../models";
import AddNote from "../AddNote";
import Sidebar from "./Sidebar";

const Content = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [isAddNote, setIsAddNote] = useState<boolean>(false);

  const toggleIsAddNote = () => {
    setIsAddNote(!isAddNote);
  };

  const addNoteHandler = () => {
    setNotes([{ title: "hello", noteDescription: "note" }, ...notes]);
  };

  return (
    <Wrapper>
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        toggleIsAddNote={toggleIsAddNote}
      />
      <NoteContainer>{isAddNote && <AddNote />}</NoteContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const NoteContainer = styled.div`
  flex: 3;
  display: flex;
  background-color: blue;
`;

export default Content;
