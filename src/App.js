import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./currencies";

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
    <Container>
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
