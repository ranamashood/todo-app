import { useEffect, useState } from "react";
import styled from "styled-components";
import { NoteInterface } from "../../models";
import AddNote from "../AddNote";
import Notify from "../Notify";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";

const Content = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [isAddNote, setIsAddNote] = useState<boolean>(false);
  const [notify, setNotify] = useState<string>("");
  const [isNotify, setIsNotify] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<NoteInterface>({
    title: "",
    noteDescription: "",
  });

  const toggleIsAddNote = () => {
    setIsAddNote(!isAddNote);
  };

  const addNoteHandler = () => {
    if (newNote.title !== "") {
      setNotes([...notes, newNote]);
      return true;
    } else {
      setNotify("Note title can not be empty");
      return false;
    }
  };

  useEffect(() => {
    if (notify) {
      setIsNotify(!isNotify);
    }
  }, [notify]);

  useEffect(() => {
    setNewNote({ title: "", noteDescription: "" });
  }, [notes]);

  return (
    <Wrapper>
      {/* {notify && <Notify notify={notify} />} */}
      <Notify notify={notify} isNotify={isNotify} setIsNotify={setIsNotify} />
      <Menubar
        addNoteHandler={addNoteHandler}
        isAddNote={isAddNote}
        toggleIsAddNote={toggleIsAddNote}
      />
      <MainContent>
        <Sidebar notes={notes} />
        <NoteContainer>
          {isAddNote && <AddNote newNote={newNote} setNewNote={setNewNote} />}
        </NoteContainer>
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

const NoteContainer = styled.div`
  flex: 3;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default Content;
