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
    <div className="sort-section flex p-2 gap-2  justify-end ">
      <div className="category-section flex gap-4">
        <div>
         
          <select
            className="rounded-md w-full border border-red-200"
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
         
          <select
            className="rounded-md w-full border border-red-200 "
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
