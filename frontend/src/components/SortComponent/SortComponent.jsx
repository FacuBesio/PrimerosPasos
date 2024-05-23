import React from "react";

const SortComponent = () => {
  return (
    <div className="sort-section flex p-2 gap-2 items-end ">
      <div className="h-full">
        <select className="rounded-md w-full h-full border-red-200 border text-[#5a5b5a]" name="" id="">
          <option value="">Precio</option>
          <option value="">Menor precio</option>
          <option value="">Mayor precio</option>
        </select>
      </div>
      <div className="h-full">
        <select className="rounded-md w-full  h-full border-red-200 border text-[#5a5b5a] focus:border-red-400" name="" id="">
          <option value="">Sin rating</option>
          <option value="">Menor rating</option>
          <option value="">Mayor rating</option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
