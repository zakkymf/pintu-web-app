import { useState } from "react";
import axios from "../../../adapter/src/infrastructures/Http";

export function useMarket() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);

  const getStockMarket = () => {
    axios
      .get("/wallet/supportedCurrencies")
      .then((res) => {
        setData(res?.data?.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPrice = () => {
    axios
      .get("/trade/price-changes")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    data,
    getStockMarket,
    getPrice,
  };
}
