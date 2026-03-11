import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
        const response = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR%2CUSD%2CGBP%2CCHF&base_currency=PLN`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const responseData = await response.json();

        const { data } = responseData;
        const date = responseData.meta.last_updated_at || "Brak daty";

        setRatesData({
          state: "success",
          data: data,
          date: date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    fetchRates();
  }, []);

  return ratesData;
};
