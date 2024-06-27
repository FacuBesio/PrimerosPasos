function queryColorsGenerator(filterColors) {
  let query = "";

  if (filterColors.length > 0 && filterColors[0] !== "") {
    const joinQuery = filterColors.join("&filterColor=");
    query = "filterColor=" + joinQuery;
  } else {
    query = "";
  }
  return query;
}

export default queryColorsGenerator;
