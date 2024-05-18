function queryBrandsGenerator(filterBrands) {

  const arrayId = [filterBrands];
  const joinQuery = arrayId.join("&filterBrands=");
  let query = "filterBrands=";

  if (arrayId.length > 0) {
    query = query + joinQuery;
  } else {
    query = "";
  }

  return query;
}

export default queryBrandsGenerator;
