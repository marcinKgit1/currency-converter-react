import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_x8vKi7iE8zCeHSkdXdSOFd5uvwEABaaxczJDsPG4&currencies=EUR%2CUSD%2CGBP%2CCHF&base_currency=PLN"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { data, date } = await response.json();

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
    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};
