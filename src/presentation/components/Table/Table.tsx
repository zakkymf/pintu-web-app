import React, { useEffect } from "react";
import { useMarket } from "../../hooks/Market/useMarket";
import Content from "./Content";
import Head from "./Head";

const Table: React.FC = () => {
  const { data, getStockMarket, getPrice } = useMarket();

  useEffect(() => {
    getPrice();
    getStockMarket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" bg-black text-white">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <Head content={"CRYPTO"} />
            <Head content={""} />
            <Head content={"HARGA"} align="text-right" />
            <Head content={"24 JAM"} />
            <Head content={"1 MMG"} />
            <Head content={"1 BLN"} />
            <Head content={"1 THN"} />
          </tr>
        </thead>
        <tbody>
          <Content item={data} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
