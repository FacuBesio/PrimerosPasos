import queryBrandsGenerator from "./queryBrandsGenerator";
import queryCategoriesGenerator from "./queryCategoriesGenerator";

function filterValidator(filterBrands, filterCategories) {
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
  validator.result = completeQuery;
  return validator;
}

export default filterValidator;
