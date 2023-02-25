import React from "react";
import "./App.css";
import { FilterBox } from "./components/FilterBox";
import { Header } from "./components/Header";

function App() {
  return (
    <div className=" bg-black px-20 pb-6">
      <Header />
      <FilterBox />
    </div>
  );
}

export default App;
