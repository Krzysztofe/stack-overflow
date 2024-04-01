import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fs_small: {
      fontSize: string;
      [key: string]: any;
    };
    fs_primary: {
      fontSize: string;
      [key: string]: any;
    };
  }

  interface TypographyVariantsOptions {
    fs_small: {
      fontSize: string;
      [key: string]: any;
    };
    fs_primary: {
      fontSize: string;
      [key: string]: any;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fs_small: true;
    fs_primary: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#F2F2F2", dark: "#99A1AD" },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    fs_small: {
      fontSize: "0.7rem",
      fontWeight: 600,
    },
    fs_primary: {
      fontSize: "0.7rem",
      "@media (min-width:400px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "0.2rem",
          "@media (min-width:500px)": {
            padding: "0.5rem",
          },
        },
      },
    },
  },
});
