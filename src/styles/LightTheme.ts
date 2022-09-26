import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import Typography from '../styles/typography';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { 
      main: '#000',
      contrastText: "rgb(126, 126, 126)"
    },
    secondary: {
      'main': '#d5d3f9',
    },
  },
  typography: Typography,
});

export default responsiveFontSizes(lightTheme);