import React from "react";
import "./App.css";
import { FilterBox } from "./components/FilterBox";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

function App() {
  return (
    <div className=" bg-black px-20 pb-6">
      <Header />
      <FilterBox />
      <Table />
    </div>
  );
}

export default App;
