function queryPricesGenerator(filterPrices) {
  const joinQuery = filterPrices.join("&filterPrice=");

  let query = "filterPrice=";
  if (filterPrices.length > 0) {
    query = query + joinQuery;
  } else {
    query = "";
  }
  return query;
}

export default queryPricesGenerator;
