import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./currencies";
import { Clock } from "./Container/Clock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
