import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { title, onClick } = props;

  return (
    <Wrapper>
      <button onClick={onClick}>{title}</button>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Button;
