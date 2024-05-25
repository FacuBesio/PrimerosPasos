//* FILTERS
export const handlerClickBrands = (allSetters, brand) => {
  const { setFilterBrands, setBrandsTag } = allSetters;
  return () => {
    setFilterBrands(brand);
    setBrandsTag(brand);
  };
};

export const handlerClickCategories = (navigate, setState, category) => {
  return () => {
    const filterCategories = category.id;
    const categoryTag = category.name;
    setState((prevState) => ({ ...prevState, filterCategories }));
    setState((prevState) => ({ ...prevState, categoryTag }));
    navigate("/shop");
  };
};

export const handlerMinPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setPricesTag } = allSetters;
  const arrayPrices = [event.target.value, filterPrices[1]];
  setFilterPrices(arrayPrices);
  setPricesTag(arrayPrices);
};

export const handlerMaxPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setPricesTag } = allSetters;
  const arrayPrices = [filterPrices[0], event.target.value];
  setFilterPrices(arrayPrices);
  setPricesTag(arrayPrices);
};
