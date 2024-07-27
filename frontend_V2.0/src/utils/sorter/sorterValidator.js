function sorterValidator(sorter) {
  let query = "";

  if (sorter.hasOwnProperty("price_selector")) {
    sorter.price_selector !== "" &&
      (query += `sortPrice=${sorter.price_selector}&`);
  }

  if (sorter.hasOwnProperty("rating_selector")) {
    sorter.rating_selector !== "" &&
      (query += `sortRating=${sorter.rating_selector}&`);
  }

  return query;
}

export default sorterValidator;
