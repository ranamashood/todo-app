import styled, { useTheme } from "styled-components";

interface Props {
  notify: string;
  isNotify: boolean;
  setIsNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StyledProps {
  isNotify: boolean;
}

const Notify = (props: Props) => {
  const { notify, isNotify, setIsNotify } = props;
  const theme = useTheme();

  const transitionEndHandler = () => {
    setTimeout(() => {
      if (notify) {
        setIsNotify(false);
      }
    }, parseInt(theme.transitionDuration.long));
  };

  return (
    <Wrapper isNotify={isNotify} onTransitionEnd={transitionEndHandler}>
      {notify}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  position: absolute;
  left: 50%;
  transform: ${(props) =>
    props.isNotify ? "translate(-50%, 100%)" : "translate(-50%, -100%)"};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
  transition: transform ${(props) => props.theme.transitionDuration.long};
`;

export default Notify;
