import React from "react";
import { filter } from "../../constant";

const FilterBox: React.FC = () => {
  return (
    <div className="flex mt-6 mb-6">
      <div className="flex flex-row">
        {filter.map((item, index) => (
          <button
            key={index}
            className="flex flex-row mr-4 p-2 bg-black border rounded-full border-slate-700 items-center"
          >
            <img className="w-4 h-auto img" src={item?.images} alt=""></img>
            <p className=" text-white ml-2">{item?.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
