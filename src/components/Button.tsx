import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  Icon: IconType;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface StyledProps {
  displayType: string;
}

const Button = (props: Props) => {
  const { Icon, title, onClick, disabled } = props;
  const [displayType, setDisplayType] = useState<string>(
    disabled ? "flex" : "none"
  );

  useEffect(() => {
    setTimeout(() => {
      if (displayType === "none") {
        setDisplayType("flex");
      } else {
        setDisplayType("none");
      }
    }, 100);
  }, [disabled]);

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      displayType={displayType}
    >
      <IconContainer>
        <Icon />
      </IconContainer>
      <Span>{title}</Span>
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledProps>`
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  display: ${(props) => props.displayType};
  justify-content: center;
  padding: ${(props) => props.theme.padding};
  scale: 1;
  transition: scale ${(props) => props.theme.transitionDuration.short};

  &:disabled {
    scale: 0;
  }

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
  transition: max-width ${(props) => props.theme.transitionDuration.normal};
`;

export default Button;
