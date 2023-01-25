import styled from "styled-components";

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => {
  const { placeholder, onChange } = props;

  return (
    <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
  );
};

const StyledInput = styled.input`
  // backgroundColor: "transparent",
`;

export default TextInput;
