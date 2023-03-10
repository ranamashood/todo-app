import { MdAddCircle, MdCancel, MdCheckCircle } from "react-icons/md";
import styled from "styled-components";
import Button from "../Button";

interface Props {
  isAddNote: boolean;
  toggleIsAddNote: () => void;
  addNoteHandler: () => boolean;
  notify: string;
}

const Menubar = (props: Props) => {
  const { isAddNote, toggleIsAddNote, addNoteHandler, notify } = props;

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
          !notify && addNoteHandler() && toggleIsAddNote();
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
