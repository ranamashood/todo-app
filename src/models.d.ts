import "styled-components";

export interface NoteInterface {
  title: string;
  noteDescription: string;
}

declare module "styled-components" {
  export interface ThemeInterface {
    colors: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
