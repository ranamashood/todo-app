import React from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
}

const TextInput = (props: Props) => {
  const { placeholder } = props;

  return <Input type="text" placeholder={placeholder} />;
};

const Input = styled.input({
  // backgroundColor: "transparent",
});

export default TextInput;
