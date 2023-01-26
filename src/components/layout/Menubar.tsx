import { MdAddCircle, MdCheckBox, MdNoteAdd, MdSaveAlt } from "react-icons/md";
import styled from "styled-components";
import Button from "../Button";

interface Props {
  readonly isAddNote: boolean;
  toggleIsAddNote: () => void;
}

const Menubar = (props: Props) => {
  const { isAddNote, toggleIsAddNote } = props;

  return (
    <Wrapper>
      <Button
        onClick={toggleIsAddNote}
        title="Add Note"
        Icon={MdAddCircle}
        disabled={isAddNote}
      />
      <Button
        onClick={toggleIsAddNote}
        title="Save Note"
        Icon={MdCheckBox}
        disabled={isAddNote}
      />
      <Button
        onClick={toggleIsAddNote}
        title="Cancel"
        Icon={MdNoteAdd}
        disabled={isAddNote}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & button {
    margin: 0px 5px;
  }
`;

export default Menubar;
