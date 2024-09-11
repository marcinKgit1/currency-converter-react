import { createGlobalStyle } from "styled-components";
import background from "./money.png";

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
  height: 100%;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Lato", sans-serif;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

`;
