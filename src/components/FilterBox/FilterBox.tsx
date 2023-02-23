import React from "react";
import { filter } from "../../constant";

const FilterBox: React.FC = () => {
  return (
    <div className="flex mt-6 mb-6">
      <div className="flex flex-row">
        {filter.map((item) => (
          <div className="flex flex-row mr-4 p-2 bg-black border rounded-full border-slate-700">
            <p className=" text-white">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
