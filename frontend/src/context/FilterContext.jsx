import React, { createContext, useState, useMemo } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);
  const [brandsTag, setBrandsTag] = useState(null);
  const [filterPrices, setFilterPrices] = useState([0, 0]);
  const [pricesTag, setPricesTag] = useState([]);

  const value = useMemo(
    () => ({
      filter,
      setFilter,
      filterBrands,
      setFilterBrands,
      brandsTag,
      setBrandsTag,
      filterPrices,
      setFilterPrices,
      pricesTag,
      setPricesTag,
    }),
    [filter, filterBrands, filterPrices]
  );
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
