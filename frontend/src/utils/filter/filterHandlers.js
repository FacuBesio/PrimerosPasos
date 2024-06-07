//* FILTERS
// export const handlerClickBrands = (allSetters, brand) => {
//   const { setFilterBrands, setBrandsTag } = allSetters;
//   return () => {
//     setFilterBrands(brand);
//     setBrandsTag(brand);
//   };
// };

export const handlerClickCategories = (
  navigate,
  setFilterCategories,
  setCategoryTag,
  category,
  setPage,
  
) => {
  return () => {
    
    setFilterCategories(category.id);
    setCategoryTag(category.name);
    setPage(1)
    navigate(`/shop/categories/${category.name}`);
  };
};

export const handlerMinPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setPricesTag } = allSetters;
  const arrayPrices = [event.target.value, filterPrices[1]];
  setFilterPrices(arrayPrices);
  setPricesTag(arrayPrices);
};

export const handlerMaxPrice = (event, filterPrices, allSetters) => {
  const { setFilterPrices, setPricesTag, setPage } = allSetters;
  const arrayPrices = [filterPrices[0], event.target.value];
  setFilterPrices(arrayPrices);
  setPricesTag(arrayPrices);
  setPage(1)
};
