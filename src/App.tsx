import React from "react";
import "./App.css";
import { FilterBox } from "./components/FilterBox";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <FilterBox />
    </div>
  );
}

export default App;
