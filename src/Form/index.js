import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Field, Legend, Select, Value, Wrapper } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <Wrapper>
          <Legend>Przelicznik walut</Legend>
          <p>
            <label>
              <Value> Kwota w PLN*: </Value>
              <Field
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                step="0.01"
                min="1"
                placeholder="wpisz kwotę"
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
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </Select>
            </label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>
        </Wrapper>
        <Result result={result} />
      </form>
    </>
  );
};
export default Form;
