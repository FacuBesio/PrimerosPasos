import queryBrandsGenerator from "./queryBrandsGenerator";
import queryCategoriesGenerator from "./queryCategoriesGenerator";
import queryPricesGenerator from "./queryPricesGenerator";

function filterValidator(filterBrands, filterCategories, filterPrices) {
  let completeQuery = "";
  const validator = {
    filterActive: false,
    result: "",
  };

  if (filterBrands) {
    const queryBrands = queryBrandsGenerator(filterBrands);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryBrands;
    } else {
      completeQuery = queryBrands;
    }
  }

  if (filterCategories) {
    const queryCategories = queryCategoriesGenerator(filterCategories);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryCategories;
    } else {
      completeQuery = queryCategories;
    }
  }

  if (filterPrices[0] && filterPrices[1]) {
    const queryPrices = queryPricesGenerator(filterPrices);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryPrices;
    } else {
      completeQuery = queryPrices;
    }
  }
  validator.result = completeQuery;
  return validator;
}

export default filterValidator;
