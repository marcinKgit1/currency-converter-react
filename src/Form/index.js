import { useState } from "react";
import { Result } from "./Result";
import {
  Button,
  Field,
  Legend,
  Select,
  Value,
  Wrapper,
  Loading,
  Failure,
  Info,
} from "./styled";
import { useRatesData } from "../useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (selectedCurrency, amount) => {
    const rateData = ratesData.data?.[selectedCurrency];
    if (!rateData) return;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rateData.value,
      currency: selectedCurrency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <Wrapper>
        <Legend>Przelicznik walut</Legend>
        {ratesData.state === "loading" ? (
          <Loading>
            Momencik... <br /> Ładujemy Twoje dane 💰
          </Loading>
        ) : ratesData.state === "error" ? (
          <Failure>
            Coś poszło nie tak...
            <br /> Pracujemy nad tym 🕵️
          </Failure>
        ) : (
          <>
            <p>
              <label>
                <Value> Kwota w PLN*: </Value>
                <Field
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  type="number"
                  step="0.01"
                  min="1"
                  placeholder="Wpisz kwotę"
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <Value>Wybierz walutę:</Value>
                <Select
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.data || {}).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
              </label>
            </p>

            <p>
              <Button>Przelicz</Button>
            </p>
          </>
        )}
      </Wrapper>
      <Result result={result} />
      {ratesData.state === "success" && (
        <Info>Kursy aktualne na dzień: {ratesData.date}</Info>
      )}
    </form>
  );
};
export default Form;
