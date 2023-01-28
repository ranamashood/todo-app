import styled from "styled-components";

interface Props {
  readonly notify: string;
  readonly isNotify: boolean;
  setIsNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StyledProps {
  readonly isNotify: boolean;
}

const Notify = (props: Props) => {
  const { notify, isNotify, setIsNotify } = props;

  return (
    <Wrapper
      isNotify={isNotify}
      onTransitionEnd={() => setTimeout(() => setIsNotify(false), 5000)}
    >
      {notify}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  position: absolute;
  left: 50%;
  /* transform: translate(-50%, 0); */
  transform: ${(props) =>
    props.isNotify ? "translate(-50%, 100%)" : "translate(-50%, -100%)"};
  background-color: red;
  padding: 10px 20px;
  border-radius: 10px;
  transition: transform 500ms;
`;

export default Notify;
