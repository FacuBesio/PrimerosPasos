//* FILTERS
export const handlerClickBrands = (allSetters, brand) => {
  const { setFilterBrands, setFilterBrandsName } = allSetters;
  return () => {
    setFilterBrands(brand);
    setFilterBrandsName(brand);
  };
};

export const handlerClickCategories = (allSetters, category) => {
  const { setFilterCategories, setFilterCategoriesName } = allSetters;
  return () => {
    setFilterCategories(category.id);
    setFilterCategoriesName(category.name);
  };
};

export const handlerMinPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setFilterPricesValues } = allSetters;
  const arrayPrices = [event.target.value, filterPrices[1]];
  setFilterPrices(arrayPrices);
  setFilterPricesValues(arrayPrices);
};

export const handlerMaxPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setFilterPricesValues } = allSetters;
  const arrayPrices = [filterPrices[0], event.target.value];
  setFilterPrices(arrayPrices);
  setFilterPricesValues(arrayPrices);
};

