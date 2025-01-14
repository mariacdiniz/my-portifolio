import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#424242',
      },
      secondary: {
        main: '#8f599c',
      },
    },
    typography:{
        fontFamily: [
          '-apple-system',
          // 'BlinkMacSystemFont',
          // '"Segoe UI"',
          // 'Roboto',
          // '"Helvetica Neue"',
          // 'Arial',
          // 'sans-serif',
          // '"Apple Color Emoji"',
          // '"Segoe UI Emoji"',
          // '"Segoe UI Symbol"',
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;