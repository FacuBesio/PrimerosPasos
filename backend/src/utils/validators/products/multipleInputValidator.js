const multipleInputValidator = (queryInputs) => {
  let validator = 0;
  let flag = false;
  const {
    brand_or_name,
    filterName,
    filterColor,
    filterSize,
    filterBrands,
    filterCategories,
    filterPrice,
  
  } = queryInputs;

  brand_or_name !== "" && (validator += 1)
  filterName !== "" && (validator += 1)
  filterColor !== "" && (validator += 1)
  filterSize !== "" && (validator += 1)
  filterBrands !== "" && (validator += 1)
  filterCategories .length > 0 && (validator += 1)
  filterPrice.length > 0 && (validator += 1)

  validator > 1 && (flag = true)

  return flag;
};

module.exports = multipleInputValidator;
