import React from "react";
import { ThemeProvider } from "styled-components";
import { themeInterface } from "./models";

const theme: themeInterface = {
  colors: {
    main: "#fff",
    secondary: "#fff",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
