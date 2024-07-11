function querysValidaitor(querysInput) {
  const { category, filter, serach } = querysInput;
  let isQueryActive = {
    result: false,
    querys: "",
  };

  if (category && category !== "") {
    isQueryActive.result = true;
    isQueryActive.querys = `filterCategories=${category}&`;
  }

  if (serach && serach !== "") {
    isQueryActive.result = true;
    isQueryActive.querys = `brand_or_name=${serach}`;
  }

  return isQueryActive;
}

export default querysValidaitor;
