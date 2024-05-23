function queryPricesGenerator(filterPrices) {
  let filterPrices_aux = filterPrices;
  filterPrices_aux[0] === "" && (filterPrices_aux[0] = 0);
  filterPrices_aux[1] === "" && (filterPrices_aux[1] = 0);

  const joinQuery = filterPrices_aux.join("&filterPrice=");
  let query = "filterPrice=";
  if (filterPrices.length > 0) {
    query = query + joinQuery;
  } else {
    query = "";
  }
  return query;
}

export default queryPricesGenerator;
