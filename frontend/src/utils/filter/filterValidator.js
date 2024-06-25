import queryBrandsGenerator from "./queryBrandsGenerator";
import queryColorsGenerator from "./queryColorsGenerator";
import queryPricesGenerator from "./queryPricesGenerator";
import querySizesGenerator from "./querySizesGenerator";

function filterValidator(
  filterBrands,
  filterColors,
  filterPrices,
  filterSizes
) {
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

  if (filterColors.length > 0 || filterColors[0] !== "") {
    const queryColors = queryColorsGenerator(filterColors);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryColors;
    } else {
      completeQuery = queryColors;
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

  if (filterSizes.length > 0 || filterSizes[0] !== "") {
    const querySizes = querySizesGenerator(filterSizes);
    validator.filterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + querySizes;
    } else {
      completeQuery = querySizes;
    }
  }

  validator.result = completeQuery;
  return validator;
}

export default filterValidator;
