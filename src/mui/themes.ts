import { createTheme } from "@mui/material/styles";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    search: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    search: true;
  }
}

// const xxs = "320px";
// const xxsh = "425px";
const xls = "600px";
// const xlg = "1440px";
const lg = "1200px";
const md = "768px";

const mq = (size: string, styles: any) => {
  return {
    [`@media (max-width: ${size})`]: styles,
  };
};

const themes = createTheme({
  palette: {
    primary: {
      main: "#4B93E7 !important",
    },
    secondary: {
      main: "#E7F1FF  !important",
    },
    error: {
      main: "#D50000  !important",
    },
    warning: {
      main: "#F7AC25  !important",
    },
    info: {
      main: "#7D86EE !important",
    },
    success: {
      main: "#469607  !important",
    },
  },
  typography: {
    fontFamily: `"Poppins-Medium.ttf"`,
    h1: {
      fontSize: "40px",
      ...mq(md, {
        fontSize: "30px",
      }),
    },
    h2: {
      fontSize: "24px",
      ...mq(md, {
        fontSize: "20px",
      }),
    },
    h3: {
      fontSize: "22px",
    },
    h4: {
      fontSize: "19.93px",
      ...mq(lg, {
        fontSize: "1.2rem",
      }),
      ...mq(md, {
        fontSize: "1rem",
      }),
    },
    h5: {
      fontSize: "1.25rem",
      ...mq(md, {
        fontSize: "1rem",
      }),
    },
    h6: {
      fontSize: "1.2rem",
      ...mq(md, {
        fontSize: ".8rem",
      }),
    },
    subtitle1: {
      fontSize: "1.1rem",
      ...mq(md, {
        fontSize: "1rem",
      }),
    },
    subtitle2: {
      fontSize: "1rem",
      ...mq(md, {
        fontSize: "0.85rem",
      }),
    },
    body1: {
      fontSize: "12px",
      ...mq(md, {
        fontSize: "11px",
      }),
      ...mq(xls, {
        fontSize: "10px",
      }),
    },
    body2: {
      fontSize: "10px",
      ...mq(md, {
        fontSize: "9px",
      }),
      ...mq(xls, {
        fontSize: "8px",
      }),
    },
    button: {
      fontSize: "1rem",
      fontFamily: `"Poppins-Medium.ttf"`,
      ...mq(md, {
        fontSize: "0.85rem",
      }),
      ...mq(xls, {
        fontSize: ".7rem",
      }),
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
    fontFamily: `"Poppins-Medium.ttf"`,

        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "48px",
          fontSize: "1rem",
          border: "1px solid #4B93E7",
          fontFamily: `"Poppins-Medium.ttf"`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: `"Poppins-Regular.ttf"`,
          fontSize: "1rem",
          color: "#082777 !important",
          "&.Mui-focused": {
            color: "#082777 !important",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          fontFamily: `"Poppins-Medium.ttf"`,
          "&.Mui-focused": {
            backgroundColor: "#DDEAFB",
            color: "#082777",
            border: "none !important",
            "& *": {
              color: "#082777",
              fontSize: "1rem",
            },
          },
          "&.Mui-focused $notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "48px",
          borderRadius: "8px",
          display: "grid",
          placeItems: "center",
          fontSize: "1rem",
          textTransform: "none",
          color: "white",
          textAlign: "center",
          boxShadow: "none",
          fontFamily: `"Poppins-Medium.ttf"`,

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            height: "40px",
          },
        },
      ],
    },
  },
});

export default themes;
