import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F4F4F4',
    },
  },
  typography: {
    /* fontFamily: 'Raleway, Arial', */
    body1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28px',
    },
    h1: {
      fontWeight: 400,
      fontSize: '36px',
      lineHeight: '43px',
    },
    button: {
      fontStyle: 'italic',
    },
  },
});
