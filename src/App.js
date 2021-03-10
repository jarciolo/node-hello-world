import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MainRouter from "./mainRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#00bf71",
      dark: "#00bf71",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#152c5b",
      dark: "#152c5b",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 5,
        padding: [[10,30]],
        textTransform: "capitalize",
      },
    },
  },
  typography: {
    h1: {
      color: "#152c5b",
    },
    h2: {
      color: "#152c5b",
    },
    body1: {
      color: "#8a95ad",
    },
    body2: {
      color: "#8a95ad",
    },
    h3: {
      color: "#152c5b",
    },
    h4: {
      color: "#152c5b",
    },
    h5: {
      color: "#152c5b",
    },
    h6: {
      color: "#152c5b",
    }
  }
});

function App() {
  return (
    <div className="contentWrapper">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
