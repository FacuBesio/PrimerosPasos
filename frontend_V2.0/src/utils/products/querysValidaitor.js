import filterValidator from "../filter/filterValidator";
import sorterValidator from "../sorter/sorterValidator";

function querysValidaitor(querysInput) {
  const { category, filter, page, serach, sorter } = querysInput;
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

  if (Object.keys(sorter).length > 0) {
    const sorterQuery = sorterValidator(sorter);
    if (sorterQuery !== "") {
      isQueryActive.result = true;
      isQueryActive.querys += sorterQuery;
    }
  }

  return isQueryActive;
}

export default querysValidaitor;
