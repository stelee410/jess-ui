
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      secondary: 'white', // replace '#yourColor' with your desired color
    },
  },
});

function Copyright(props) {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://elevenlee.com/">
            elevenlee.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </ThemeProvider>
    );
  }

export default Copyright;
