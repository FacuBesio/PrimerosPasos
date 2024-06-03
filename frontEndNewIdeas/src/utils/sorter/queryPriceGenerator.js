function queryPriceGenerator(sorterByPrice) {
  let query = "";

  if (sorterByPrice !== "") {
    query = `sortPrice=${sorterByPrice}`;
  }
  
  return query;
}

export default queryPriceGenerator;
