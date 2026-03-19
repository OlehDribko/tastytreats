import { createTheme } from "@mui/material/styles";

export const layoutPaddingX = {
  xs: "16px",
  sm: "32px",
  lg: "100px",
} as const;

export const theme = createTheme({
  // Dark/Light
  palette: {
    primary: {
      main: "#9BB537",
      contrastText: "#050505",
    },
    secondary: {
      main: "#9BB537",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#050505",
      secondary: "#757575",
    },
  },
  typography: {
    h1: {
      fontFamily: "Inter",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "1.2",
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "1.5",
    },
  },
  spacing: 16,
});
