import type { ThemeOptions } from "@mui/material";

export const getLightTheme = (): ThemeOptions => {
  const lightThemeOptions: ThemeOptions = {
    name: "light",
    palette: {
      mode: "light",
      primary: {
        light: "",
        main: "#FCD14A",
        dark: "",
        contrastText: "",
      },
      // secondary: {
      //   light: "",
      //   main: "#3F8EF5",
      //   dark: "",
      //   contrastText: "",
      // },
      // success: {
      // light: "",
      // main: "",
      // dark: "",
      // contrastText: "",
      // },
      // info: {
      // light: "",
      // main: "",
      // dark: "",
      // contrastText: "",
      // },
      // warning: {
      // light: "",
      // main: "",
      // dark: "",
      // contrastText: "",
      // },
      // error: {
      // light: "",
      // main: "",
      // dark: "",
      // contrastText: "",
      // },
      // accent: {
      //   link: "",
      //   success: "",
      //   info: "",
      //   warning: "",
      //   error: "",
      // },
      // common: {},
      // element: {
      //   card: "",
      //   popup: "",
      //   background: "",
      //   divider: "",
      // },
      // gradient: {
      //   linear: {
      //     primary: "",
      //     secondary: "",
      //   },
      // },
      border: {
        main: "#3F8EF5",
        hover: "",
        active: "",
      },
      // grey: {},
      // text: {
      // * defaults
      // primary: "",
      // secondary: "",
      // disabled: "",
      // * commons
      // * accents
      // success: "",
      // info: "",
      // warning: "",
      // error: "",
      // },

      // action: {
      //   active: '',
      //   hover: '',
      //   hoverOpacity: 0.04,
      //   selected: '',
      //   selectedOpacity: 0.08,
      // disabled: "",
      //   disabledOpacity: 0.38,
      //   disabledBackground: '',
      //   focus: '',
      //   focusOpacity: 0.12,
      //   activatedOpacity: 0.12,
      // },
      background: {
        default: "#C8C8C8",
        paper: "#F7E9DD",
        popup: "",
        navbar: "",
        content: "",
        sidebar: "",
        footer: "",
        success: "",
        info: "",
        warning: "",
        error: "",
      },
      // divider: "",
    },
    typography: {
      fontFamily: ['"Inter"', "sans-serif"].join(","),
      htmlFontSize: 16,
      fontSize: 16,
      fontWeightBold: 600,
      fontWeightMedium: 500,
      fontWeightRegular: 300,
      fontWeightLight: 300,
      h1: {
        fontSize: "2.75rem",
        fontWeight: "bold",
        "@media (max-width: 600px)": { fontSize: "2rem" },
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      h4: {
        fontSize: "1.25rem",
        fontWeight: 700,
      },
      h5: {
        fontSize: "1.125rem",
        fontWeight: 700,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 700,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.75rem",
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: "1.5rem",
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 500,
      },
      caption: {
        fontSize: "0.625rem",
        fontWeight: 400,
      },
      button: {
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: 1.7,
      },
    },
    shape: {
      borderRadius: 1,
    },
    components: {},
    shadows: [
      "none",
      "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.02)",
      "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.04),0px 1px 5px 0px rgba(0,0,0,0.02)",
      "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.02)",
      "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.04),0px 1px 10px 0px rgba(0,0,0,0.02)",
      "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)",
      "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)",
      "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)",
      "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)",
      "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)",
      "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)",
      "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)",
      "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)",
      "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)",
      "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)",
      "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)",
      "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)",
      "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)",
      "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)",
      "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)",
      "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)",
      "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)",
      "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)",
      "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)",
      "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)",
    ],
  };

  return lightThemeOptions;
};
