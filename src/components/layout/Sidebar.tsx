import styled from "styled-components";
import { NoteInterface, ThemeInterface } from "../../models";
import Button from "../Button";

interface Props {
  notes: NoteInterface[];
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
  toggleIsAddNote: () => void;
}

const Sidebar = (props: Props) => {
  const { notes, setNotes, toggleIsAddNote } = props;

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
  backgroundColor: `${(theme: ThemeInterface) => theme.colors.main}`,
  // backgroundColor: "hsl(180, 6%, 50%)",
});

export default Sidebar;
