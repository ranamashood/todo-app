import styled from "styled-components";

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: Props) => {
  const { placeholder, onChange } = props;

  return (
    <StyledTextarea
      placeholder={placeholder}
      onChange={onChange}
    ></StyledTextarea>
  );
};

const StyledTextarea = styled.textarea`
  flex: 1;
  resize: "none";
`;

export default TextArea;
