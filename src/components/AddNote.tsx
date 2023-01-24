import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

const AddNote = () => {
  return (
    <Wrapper>
      <TextInput placeholder="Note Title..." />
      <TextArea />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "green",
});

export default AddNote;
