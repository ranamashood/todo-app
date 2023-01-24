import styled from "styled-components";

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField = (props: Props) => {
  const { placeholder, onChange } = props;

  return <Textarea placeholder={placeholder} onChange={onChange}></Textarea>;
};

const Textarea = styled.textarea({
  flex: 1,
  resize: "none",
});

export default TextField;
