import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import Typography from '../styles/typography';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { 
      main: '#fff',
      contrastText: "rgb(205, 205, 205)"
    },
    secondary: {
      'main': '#2C1E3D', // '#413650',
    },
    background: {
      paper: "#121212",
      default: "#110324",
    }
  },
  typography: Typography,
});

export default responsiveFontSizes(darkTheme);