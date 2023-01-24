import { ThemeInterface, ThemeProvider } from "styled-components";

const theme: ThemeInterface = {
  colors: {
    primary: "hsl(180, 6%, 50%)",
    secondary: "hsl(180, 6%, 60%)",
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
