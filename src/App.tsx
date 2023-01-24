import React from "react";
import styled from "styled-components";
import Content from "./components/layout/Content";
import { themeInterface } from "./models";
import Theme from "./Theme";

const App = () => {
  return (
    <Theme>
      {/* <Heading>Hello</Heading> */}
      <Content />
    </Theme>
  );
};

// const Heading = styled.h1({
//   fontSize: `${(props: any) => props.theme.fontSizes.large}px`,
// });

export default App;
