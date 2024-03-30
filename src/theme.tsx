import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#2569F4" },
    secondary: {
      main: "rgb(153,161,173)",
      light: "#FAFAFA",
    },
    info: {
      dark: "#3E3E3E",
      main: "#797979",
      light: "#E2E2E2",
    },
  },

  spacing: 10,

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: "32px",
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: "0.625rem",
      fontWeight: 600,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});
