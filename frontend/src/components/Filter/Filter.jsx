import React, { useState, useEffect, useContext } from "react";
import filterValidator from "../../utils/filter/filterValidator";
import {
  handlerClickBrands,
  handlerMinPrice,
  handlerMaxPrice,
} from "../../utils/filter/filterHandlers";
import { CategoriesContext } from "../../context/CategoriesContext.jsx";
import { BrandsContext } from "../../context/BrandsContext.jsx";
import { FilterContext } from "../../context/FilterContext.jsx";

const Filter = ({ allTagsSetters, filterPrices,setFilterPrices }) => {
  const { allBrands } = useContext(BrandsContext);
  const { setFilter } = useContext(FilterContext);
  const { filterCategories } = useContext(CategoriesContext);
  const [filterBrands, setFilterBrands] = useState([]);
 

  const allSetters = {
    ...allTagsSetters,
    setFilterBrands,
    setFilterPrices,
  };

  const onChangeMinPrice = (event) => {
    handlerMinPrice(event, filterPrices, allSetters);
  };

  const onChangeMaxPrice = (event) => {
    handlerMaxPrice(event, filterPrices, allSetters);
  };

  const onBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setFilterBrands([selectedBrand]);
  };

  useEffect(() => {
    const filterQuery = filterValidator(
      filterBrands,
      filterCategories,
      filterPrices
    );
    if (filterQuery.filterActive) {
      setFilter(filterQuery.result);
    }
  }, [filterBrands, filterCategories, filterPrices, setFilter]);

  return (
    <section className="left-side flex items-center gap-2">
      <div className=" items-center whitespace-nowrap hidden lg:flex gap-2">
      <h2 className="text-[#5a5b5a] border border-red-200 bg-white rounded-md w-fit px-1">
        Rango de precio:
      </h2>
      <form className="flex gap-2" action="">
        <label htmlFor="">
          <input
            className="max-w-[60px] text-center border rounded-md border-red-200"
            type="text"
            placeholder="mín"
            value={filterPrices[0] === 0 ? "" : filterPrices[0]}
            onChange={onChangeMinPrice}
          />
        </label>
        <label htmlFor="">
          <input
            className="max-w-[80px] text-center rounded-md border border-red-200"
            type="text"
            placeholder="máx"
            value={filterPrices[1] === 0 ? "" : filterPrices[1]}
            onChange={onChangeMaxPrice}
          />
        </label>
        </form>
        </div>
      <select
        className="rounded-md w-full border border-red-200 text-[#5a5b5a] items-center"
        name="sorterByPrice"
        id="sorterByPrice"
        onChange={onBrandChange}
        value={filterBrands[0] || ""}
      >
        <option value="" disabled>
          Marca:
        </option>
        <option value="">
          All
        </option>
        {allBrands?.brands?.map((brand) => (
          <option key={brand} className="text-[#5a5b5a]" value={brand}>
            {brand}
          </option>
        ))}
      </select>

      
    </section>
  );
};

export default Filter;
