function queryCategoriesGenerator(filterCategories) {

  const arrayId = [filterCategories];
  const joinQuery = arrayId.join("&filterCategories=");
  let query = "filterCategories=";

  if (arrayId.length > 0) {
    query = query + joinQuery;
  } else {
    query = "";
  }

  return query;
}

export default queryCategoriesGenerator;
