import queryBrandsGenerator from "./queryBrandsGenerator";
import queryPricesGenerator from "./queryPricesGenerator";

function filterValidator( filterBrands, filterPrices) {
  let completeQuery = "";

  const validator = {
    filterActive: false,
    result: "",
  };

  if (filterBrands.length > 0 || filterBrands[0] !== "") {
    const queryBrands = queryBrandsGenerator(filterBrands);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryBrands;
    } else {
      completeQuery = queryBrands;
    }
  }

  if (filterPrices[1] > 0 || filterPrices[0] === "" || filterPrices[1] === "") {
    validator.filterActive = true;
    const queryPrices = queryPricesGenerator(filterPrices);
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
