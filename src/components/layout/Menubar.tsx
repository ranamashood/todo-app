import { MdAddCircle, MdCancel, MdCheckCircle } from "react-icons/md";
import styled from "styled-components";
import Button from "../Button";

interface Props {
  readonly isAddNote: boolean;
  toggleIsAddNote: () => void;
  addNoteHandler: () => void;
}

const Menubar = (props: Props) => {
  const { isAddNote, toggleIsAddNote, addNoteHandler } = props;

  return (
    <Wrapper>
      <Button
        onClick={toggleIsAddNote}
        title="Add Note"
        Icon={MdAddCircle}
        disabled={isAddNote}
      />
      <Button
        onClick={() => {
          toggleIsAddNote();
          addNoteHandler();
        }}
        title="Save Note"
        Icon={MdCheckCircle}
        disabled={!isAddNote}
      />
      <Button
        onClick={toggleIsAddNote}
        title="Cancel"
        Icon={MdCancel}
        disabled={!isAddNote}
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
