export interface NoteInterface {
  title: string;
  noteDescription: string;
}

export interface ThemeInterface {
  colors: {
    main: string;
    secondary: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}
