import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "hsl(180, 6%, 50%)",
    secondary: "hsl(180, 6%, 60%)",
  },
  fontSizes: {
    small: "1.3em",
    medium: "1.5em",
    large: "2em",
  },
  transitionDuration: {
    short: "300ms",
    normal: "500ms",
    long: "750ms",
  },
  borderRadius: "10px",
  padding: "8px",
};

export { theme };
