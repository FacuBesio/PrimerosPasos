function queryRatingGenerator(sorterByRating) {
  let query = "";

  if (sorterByRating !== "") {
    query = `sortRating=${sorterByRating}`;
  }
  
  return query;
}

export default queryRatingGenerator;
