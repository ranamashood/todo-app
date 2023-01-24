export interface NoteInterface {
  title: string;
  noteDescription: string;
}

export interface themeInterface {
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
