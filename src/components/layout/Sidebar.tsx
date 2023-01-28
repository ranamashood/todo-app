import styled from "styled-components";
import { NoteInterface } from "../../models";

interface Props {
  readonly notes: NoteInterface[];
}

const Sidebar = (props: Props) => {
  const { notes } = props;

  return (
    <Wrapper>
      {notes.map((note, key) => {
        return <div key={key}>{note.title}</div>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1.5;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default Sidebar;
