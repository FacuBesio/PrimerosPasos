import filterValidator from "../filter/filterValidator";

function querysValidaitor(querysInput) {
  const { category, filter, page, serach } = querysInput;
  let isQueryActive = {
    result: false,
    querys: "",
  };

  if (category && category !== "") {
    isQueryActive.result = true;
    isQueryActive.querys += `filterCategories=${category}&`;
  }

  if (page && page > 1) {
    isQueryActive.result = true;
    isQueryActive.querys += `page=${page}&`;
  }

  if (Object.keys(filter).length > 0) {
    const filterQuery = filterValidator(filter);
    if (filterQuery !== "") {
      isQueryActive.result = true;
      isQueryActive.querys += filterQuery;
    }
  }

  if (serach && serach !== "") {
    isQueryActive.result = true;
    isQueryActive.querys += `brand_or_name=${serach}`;
  }

  return isQueryActive;
}

export default querysValidaitor;
