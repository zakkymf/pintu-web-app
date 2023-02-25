import React from "react";
import Content from "./Content";
import Head from "./Head";

const item = {
  name: "test",
};

const Table: React.FC = () => {
  return (
    <div className="px-36 bg-black text-white">
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
          <Content item={item} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
