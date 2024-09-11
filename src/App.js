import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./currencies";
import { Clock } from "./Container/Clock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Form result={result} calculateResult={calculateResult} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
