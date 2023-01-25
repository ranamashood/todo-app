import React from "react";
import styled from "styled-components";
import { NoteAdd } from "@styled-icons/material";

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { title, onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      <NoteAddIcon />
      <Span>{title}</Span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  padding: 10px;
  float: right;

  &:hover {
    cursor: pointer;
    & span {
      max-width: 200px;
    }
  }
`;

const NoteAddIcon = styled(NoteAdd)`
  width: ${(props) => props.theme.fontSizes.medium};
`;

const Span = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  overflow: hidden;
  max-width: 0;
  white-space: nowrap;
  transition: max-width 500ms;
`;

export default Button;
