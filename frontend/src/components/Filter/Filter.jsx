/* eslint-disable react/prop-types */
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import filterValidator from "../../utils/filter/filterValidator";
import {
  BrandsContext,
  FilterContext,
  PagesContext,
} from "../../context/index.js";
import {
  handlerMinPrice,
  handlerMaxPrice,
} from "../../utils/filter/filterHandlers";
import { filterStyles } from "../../styles.js";


const Filter = () => {
  const { allBrands } = useContext(BrandsContext);
  const { setPage } = useContext(PagesContext);

  const {
    filterPrices,
    setFilter,
    filterBrands,
    setFilterBrands,
    setFilterPrices,
    setBrandsTag,
    setPricesTag,
  } = useContext(FilterContext);

  const allSetters = useMemo(() => ({
    setPricesTag,
    setFilterBrands,
    setFilterPrices,
    setPage,
  }), [setPricesTag, setFilterBrands, setFilterPrices, setPage]);

  const onChangeMinPrice = useCallback((event) => {
    handlerMinPrice(event, filterPrices, allSetters);
  }, [filterPrices, allSetters]);

  const onChangeMaxPrice = useCallback((event) => {
    handlerMaxPrice(event, filterPrices, allSetters);
  }, [filterPrices, allSetters]);

  const onBrandChange = useCallback((event) => {
    const selectedBrand = event.target.value;
    setFilterBrands([selectedBrand]);
    setBrandsTag(selectedBrand);
    setPage(1);
  }, [setFilterBrands, setBrandsTag, setPage]);

  useEffect(() => {
    const filterQuery = filterValidator(filterBrands, filterPrices);
    if (filterQuery.filterActive) {
      setFilter(filterQuery.result);
    }
  }, [filterBrands, filterPrices, setFilter]);

  const filterPriceInputs = useMemo(() => (
    <div className="items-center whitespace-nowrap hidden lg:flex gap-2">
      <h2 className={filterStyles}>Rango de precio:</h2>
      <form className="flex gap-2" action="">
        <label htmlFor="">
          <input
            className="max-w-[60px] text-center border rounded-md border-white"
            type="text"
            placeholder="mín"
            value={filterPrices[0] === 0 ? "" : filterPrices[0]}
            onChange={onChangeMinPrice}
          />
        </label>
        <label htmlFor="">
          <input
            className="max-w-[60px] text-center rounded-md border border-white"
            type="text"
            placeholder="máx"
            value={filterPrices[1] === 0 ? "" : filterPrices[1]}
            onChange={onChangeMaxPrice}
          />
        </label>
      </form>
    </div>
  ), [filterPrices, onChangeMinPrice, onChangeMaxPrice]);

  const brandOptions = useMemo(() => (
    <>
      <option value="" disabled>Marca:</option>
      <option value="">All</option>
      {allBrands?.brands?.map((brand) => (
        <option key={brand} className="text-[#5a5b5a]" value={brand}>
          {brand}
        </option>
      ))}
    </>
  ), [allBrands]);

  return (
    <section className="left-side flex items-center gap-2">
      {filterPriceInputs}
      <select
        className={filterStyles}
        name="sorterByBrand"
        id="sorterByBrand"
        onChange={onBrandChange}
        value={filterBrands[0] || ""}
      >
        {brandOptions}
      </select>
    </section>
  );
};

export default React.memo(Filter);
