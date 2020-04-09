import defaultTheme from "./default";
//import font from "../fonts/foltyBook.ttf";
import { createMuiTheme } from "@material-ui/core";

/*const foltyBook = {
  fontFamily: "Folty-Book",
  fontStyle: "normal",
  color: `rgb(63,73,72)`,
  src: `
  local("Folty-Book"),
  url(${font}) format("ttf")
  `,
};*/

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
      color: `rgb(63,73,72)`,
      fontFamily: "Folty-Book, Arial",
    },
    h2: {
      fontSize: "2rem",
      color: `rgb(98,150,188)`,
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
};

export default {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
};
