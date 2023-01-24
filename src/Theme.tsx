import { ThemeProvider } from "styled-components";
import { ThemeInterface } from "./models";

const theme: ThemeInterface = {
  colors: {
    main: "hsl(180, 6%, 50%)",
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
