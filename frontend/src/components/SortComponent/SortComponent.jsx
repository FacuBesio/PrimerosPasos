import React, { useEffect } from "react";

const SortComponent = ({ sortComponentProps }) => {
  const {
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating,
  } = sortComponentProps;

  useEffect(() => {}, [
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating,
  ]);

  return (
    <div className="sort-section flex  gap-2  justify-end ">
      <div className="category-section flex gap-4 items-center">
        <div>
         
          <select
            className="rounded-md w-full border border-red-200 text-[#5a5b5a] items-center"
            name="sorterByPrice"
            id="sorterByPrice"
            onChange={onChangeSorterPrice}
            value={sorterByPrice}
          >
            <option className="text-[#5a5b5a]" value="">Precio</option>
            <option className="text-[#5a5b5a]" value="asc">Menor precio</option>
            <option className="text-[#5a5b5a]" value="desc">Mayor precio</option>
          </select>
        </div>
        <div>
         
          <select
            className="rounded-md w-full border border-red-200 text-[#5a5b5a] "
            name="sorterByRating"
            id="sorterByRating"
            onChange={onChangeSorterRating}
            value={sorterByRating}
          >
            <option className="text-[#5a5b5a]" value="">Sin rating</option>
            <option className="text-[#5a5b5a]" value="asc">Menor rating</option>
            <option className="text-[#5a5b5a]" value="desc">Mayor rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;
