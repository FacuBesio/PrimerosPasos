import React, { createContext, useState, useMemo } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);
  const [brandsTag, setBrandsTag] = useState(null);
  const [filterPrices, setFilterPrices] = useState([0, 0]);
  const [pricesTag, setPricesTag] = useState([]);
  const [filterColors, setFilterColors] = useState([]);
  const [colorsTag, setColorsTag] = useState(null);
  const [filterSizes, setFilterSizes] = useState([]);
  const [sizesTag, setSizesTag] = useState(null);

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
      filterColors,
      setFilterColors,
      colorsTag,
      setColorsTag,
      filterSizes,
      setFilterSizes,
      sizesTag,
      setSizesTag,
    }),
    [filter, filterBrands, filterPrices, filterColors, filterSizes]
  );
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
