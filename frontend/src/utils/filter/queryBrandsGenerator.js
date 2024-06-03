function queryBrandsGenerator(filterBrands) {
  let query = "";

  if (filterBrands.length > 0 && filterBrands[0] !== "") {
    const joinQuery = filterBrands.join("&filterBrands=");
    query = "filterBrands=" + joinQuery;
  } else {
    query = "";
  }
  return query;
}

export default queryBrandsGenerator;
