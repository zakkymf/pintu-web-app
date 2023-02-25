import React from "react";
import { SearchBar } from "../SearchBar";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg font-semibold text-white">
        Harga Crypto dalam Rupiah hari ini
      </p>
      <SearchBar />
    </div>
  );
};

export default Header;
