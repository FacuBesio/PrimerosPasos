function querySizesGenerator(filterSizes) {
  let query = "";

  if (filterSizes.length > 0 && filterSizes[0] !== "") {
    const joinQuery = filterSizes.join("&filterSize=");
    query = "filterSize=" + joinQuery;
  } else {
    query = "";
  }
  return query;
}

export default querySizesGenerator;
