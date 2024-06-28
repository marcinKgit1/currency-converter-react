import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

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
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicznik walut</legend>
          <p>
            <label>
              <span className="form__value"> Kwota w PLN*: </span>
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="form__field"
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
              <span className="form__value">Wybierz walutę:</span>

              <select
                className="form__field"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <button className="form__button" type="submit">
              Przelicz
            </button>
          </p>
        </fieldset>
        <Result result={result} />
      </form>
    </>
  );
};
export default Form;
