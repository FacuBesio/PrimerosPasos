import React from "react";

const SortComponent = ({sorterByPrice,onChangeSorterPrice, onChangeSorterRating, sorterByRating}) => {
  return (
    <div className="sort-section flex p-2 gap-2 items-end ">
      <div className="category-section">
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por precio
          </h3>
          <select
            className="rounded-md w-full"
            name="sorterByPrice"
            id="sorterByPrice"
            onChange={onChangeSorterPrice}
            value={sorterByPrice}
          >
            <option value="">Precio</option>
            <option value="asc">Menor precio</option>
            <option value="desc">Mayor precio</option>
          </select>
        </div>
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por rating
          </h3>
          <select
            className="rounded-md w-full"
            name="sorterByRating"
            id="sorterByRating"
            onChange={onChangeSorterRating}
            value={sorterByRating}
          >
            <option value="">Sin rating</option>
            <option value="asc">Menor rating</option>
            <option value="desc">Mayor rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;
