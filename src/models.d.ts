import "styled-components";

export interface NoteInterface {
  title: string;
  noteDescription: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
    padding: string;
  }
}
