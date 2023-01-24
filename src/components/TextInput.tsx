import styled from "styled-components";

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => {
  const { placeholder, onChange } = props;

  return <Input type="text" placeholder={placeholder} onChange={onChange} />;
};

const Input = styled.input`
  // backgroundColor: "transparent",
`;

export default TextInput;
