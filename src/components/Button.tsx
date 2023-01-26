import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  Icon: IconType;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { Icon, title, onClick, disabled } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <IconContainer>
        <Icon />
      </IconContainer>
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
  padding: ${(props) => props.theme.padding};

  &:hover {
    cursor: pointer;
    & span {
      max-width: 200px;
    }
  }
`;

const IconContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Span = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  overflow: hidden;
  max-width: 0;
  white-space: nowrap;
  transition: max-width 500ms;
`;

export default Button;
