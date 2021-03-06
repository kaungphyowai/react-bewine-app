import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#064125",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
});

export default theme;
