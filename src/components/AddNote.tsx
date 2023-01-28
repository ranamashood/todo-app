import styled from "styled-components";
import { NoteInterface } from "../models";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

interface Props {
  readonly newNote: NoteInterface;
  setNewNote: React.Dispatch<React.SetStateAction<NoteInterface>>;
}

const AddNote = (props: Props) => {
  const { newNote, setNewNote } = props;

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote({
      title: event.target.value,
      noteDescription: newNote.noteDescription,
    });
  };

  const noteDescriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewNote({
      title: newNote.title,
      noteDescription: event.target.value,
    });
  };

  return (
    <Wrapper>
      <TextInput placeholder="Note Title..." onChange={titleHandler} />
      <div>{newNote.title}</div>
      <div>{newNote.noteDescription}</div>
      <TextArea
        placeholder="Note Description..."
        onChange={noteDescriptionHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default AddNote;
