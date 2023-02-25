import React from "react";
import { FilterBox } from "../../components/FilterBox";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";

const Market: React.FC = () => {
  return (
    <div className=" bg-black px-20 pb-6">
      <Header />
      <FilterBox />
      <Table />
    </div>
  );
};

export default Market;
