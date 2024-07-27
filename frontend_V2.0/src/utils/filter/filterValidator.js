function filterValidator(filter) {
  let query = "";

  if (filter.hasOwnProperty("brand_selector")) {
    filter.brand_selector !== "" &&
      (query += `filterBrands=${filter.brand_selector}&`);
  }

  if (filter.hasOwnProperty("color_selector")) {
    filter.color_selector !== "" &&
      (query += `filterColor=${filter.color_selector}&`);
  }

  if (filter.hasOwnProperty("size_selector")) {
    filter.size_selector !== "" &&
      (query += `filterSize=${filter.size_selector}&`);
  }

  if (filter.hasOwnProperty("price_inputs")) {
    let priceArray = [];
    if (Array.isArray(filter.price_inputs) && filter.price_inputs.length === 2) {
      priceArray = filter.price_inputs;
    }
    query += `filterPrice=${priceArray[0]}&filterPrice=${priceArray[1]}&`;
  }

  return query;
}

export default filterValidator;
