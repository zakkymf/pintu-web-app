import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p>Harga Crypto dalam Rupiah hari ini</p>
      </div>
      <div>
        <input className="p-2" type="text" placeholder="Cari disini" />
      </div>
    </div>
  );
};

export default Header;
