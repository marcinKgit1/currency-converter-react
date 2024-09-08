import { Outcome } from "./styled";

export const Result = ({ result }) => (
  <Outcome>
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>{" "}
      </>
    )}
  </Outcome>
);
